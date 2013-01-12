<?php if ( $subpages = get_field('pages') ):  ?>
    <?php foreach ( $subpages as $post ) : setup_postdata( $post ) ?>
        <?php get_template_part( 'one-page-article' ) ?>
    <?php endforeach; ?>
<?php endif ?>