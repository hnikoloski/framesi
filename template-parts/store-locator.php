<section id="store-locator">
    <div class="container">
        <input type="hidden" name="map-marker-field" value="<?php the_field('map_marker_img'); ?>" id="map-marker-field">

        <!-- list the stores -->
        <div class="row map-border my-5">
            <div class="col-12 col-md-5 col-lg-4 order-2 order-md-1 px-md-0">
                <!-- search on top -->
                <div class="p-4">
                    <div class="input-group shadow-sm mt-3">
                        <input id="autocomplete" placeholder="Enter a place" type="text">
                        <div class="input-group-append">
                            <button class="btn btn-secondary bg-white text-secondary border-0 py-0" type="submit">Find</button>
                        </div>
                    </div>
                    <p id="result" class="small text-center mt-3 mb-0"></p>
                </div>
            </div>
            <!-- MAP -->
            <div class="app-wrapper">
                <div id="map"></div>
                <aside id="sidebar">
                    <ul>
                        <!-- Check store-locator.js -->
                    </ul>
                </aside>
            </div>
        </div>
    </div>
</section>