import * as leaflet from 'leaflet';
import 'leaflet.locatecontrol';
import 'leaflet.markercluster';
import axios from 'axios';


jQuery(document).ready(function ($) {
    let storesData = [];
    if ($('#map').length) {
        let config = {
            method: "get",
            url: '/wp-json/api/v1/stores',

        };
        axios(config)
            .then(function (response) {
                let stores = response.data;
                const sideBarHtml = stores.map((store) => {
                    let storeName = store.title;
                    return (
                        `<li data-lat="${store.location.lat}" data-lng="${store.location.lng}"><h3>${storeName}</h3>
                        </li>`
                    );
                });
                $(".app-wrapper #sidebar ul").html(sideBarHtml);

            })
            .then(() => {
                // Create leaflet map with markers
                let map = L.map('map', {
                    center: [48.280578, 16.411830],
                    zoom: 12,
                    layers: [
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://digital-orange.com">Digital-Orange</a>'
                        })
                    ]
                });

                // Add locate control
                L.control.locate({
                    position: 'topright',
                    drawCircle: false,
                    showPopup: true,
                    strings: {
                        title: "Show me where I am",
                        popup: "You are within {distance} {unit} from this point",
                        outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
                    },
                    locateOptions: {
                        maxZoom: 18,
                        watch: true,
                        enableHighAccuracy: true,
                        maximumAge: 10000,
                        timeout: 10000
                    }
                }).addTo(map);

                // Add marker cluster
                let markers = L.markerClusterGroup();

                //   Get stores from wp-json/api/v1/stores
                axios(config)
                    .then(function (response) {
                        let stores = response.data;
                        stores.forEach((store) => {
                            console.log(store)
                            let storeName = store.title;
                            let storeAddress = store.location.address;
                            let storeLatitude = store.location.lat;
                            let storeLongitude = store.location.lng;
                            let storeIcon = L.icon({
                                iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });
                            let marker = L.marker([storeLatitude, storeLongitude], { icon: storeIcon });
                            marker.bindPopup(`<h3>${storeName}</h3><p>${storeAddress}</p>`);
                            markers.addLayer(marker);
                        });
                        map.addLayer(markers);
                    });

                // Go to coordinates on click
                $(".app-wrapper #sidebar ul li").on("click", function () {
                    $(".app-wrapper #sidebar ul li").removeClass("active");
                    $(this).addClass('active')
                    let lat = $(this).data("lat");
                    let lng = $(this).data("lng");
                    map.setView([lat, lng], 16);
                }
                );

            })

            .catch(function (error) {
                console.log(error);
            });
    }




});
