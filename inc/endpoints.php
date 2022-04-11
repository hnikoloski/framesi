<?php

function get_all_stores()
{
    $stores = get_posts([
        'post_type' => 'stores',
        'numberposts' => -1,
        'orderby' => 'title',
        'order' => 'ASC',
    ]);

    $data = [];

    foreach ($stores as $store) {
        $data[] = [
            'id' => $store->ID,
            'title' => $store->post_title,
            'location' => get_field('store_location', $store->ID),
        ];
    }

    return $data;
}

add_action('rest_api_init', function () {
    // Get all products + min/max price params
    register_rest_route('api/v1', 'stores', array(
        'methods' => 'GET',
        'callback' => 'get_all_stores',
        'permission_callback' => '__return_true'
    ));
});
