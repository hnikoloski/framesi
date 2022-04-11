<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * 
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <header id="masthead" class="site-header page-padding-x">
            <!-- Get wordpress site logo url -->

            <?php
            $custom_logo_id = get_theme_mod('custom_logo');
            $siteLogo = wp_get_attachment_image_src($custom_logo_id, 'full')[0];
            ?>

            <a href="<?= home_url(); ?>" class="site-logo-wrapper d-block">
                <img src="<?= $siteLogo; ?>" alt="<?= get_bloginfo('name'); ?>" class="full-size-img full-size-img-contain">
            </a>
            <div class="toolbar">
                <div class="menu-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="side-menu-wrapper">
                <div class="sidebar-close">
                    <span></span>
                    <span></span>
                </div>
                <!-- Get Menu -->
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'menu-1',
                    'menu_id'        => 'primary-menu',
                    'menu_class'     => 'site-menu',
                    'container'      => false,
                ));
                ?>
                <div class="bottom">
                    <!-- Socials -->
                    <?php
                    $socials = get_field('socials', 'option');
                    if ($socials) :
                    ?>
                        <ul class="socials">
                            <?php foreach ($socials as $social) : ?>
                                <li>
                                    <a href="<?= $social['link']; ?>" target="_blank" rel="noopener noreferrer">
                                        <img src="<?= $social['icon']['url']; ?>" alt="<?= $social['icon']['alt']; ?>">
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                    <!-- Socials -->
                    <div class="img-wrapper">
                        <img src="<?= $siteLogo; ?>" alt="<?= get_bloginfo('name'); ?>" class="full-size-img full-size-img-contain">
                    </div>
                </div>
            </div>
        </header>
        <!-- #masthead -->