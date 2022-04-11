<div id="hero-home" style="background:url('<?php the_field('hero_background'); ?>'); background-size:cover; background-position:center; background-repeat:no-repeat;">
    <div class="content">
        <?php if (get_field('hero_title')) : ?>
            <h2 class="half"><?php the_field('hero_title'); ?></h2>
        <?php endif; ?>
        <?php if (get_field('hero_subtitle')) : ?>
            <h3><?php the_field('hero_subtitle'); ?></h3>
        <?php endif; ?>
    </div>
    <?php if (get_field('decorative_text')) : ?>
        <h4 class="decorative"><?php the_field('decorative_text'); ?></h4>
    <?php endif; ?>
</div>