<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <div class="entry-content clearfix">
        <?php
        the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'the-bootstrap' ) );
        the_bootstrap_link_pages(); ?>
    </div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
