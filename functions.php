<?php

define( 'WRKTG_PUBLIC_THEME_DIR', dirname( __FILE__ ) );

include( WRKTG_PUBLIC_THEME_DIR . '/classes/class-theme-base.php' );

function the_bootstrap_setup() {
    global $content_width;

    if ( ! isset( $content_width ) ) {
        $content_width = 770;
    }

    load_theme_textdomain( 'the-bootstrap', get_template_directory() . '/lang' );

    add_theme_support( 'automatic-feed-links' );

    add_theme_support( 'post-thumbnails' );

    add_theme_support( 'post-formats', array(
        'aside',
        'chat',
        'link',
        'gallery',
        'status',
        'quote',
        'image',
        'video'
    ) );

    add_theme_support( 'tha_hooks', array( 'all' ) );

    if ( version_compare( get_bloginfo( 'version' ), '3.4', '<' ) )
        // Custom Theme Options
        require_once( get_template_directory() . '/inc/theme-options.php' );
    else
        // Implement the Theme Customizer script
        require_once( get_template_directory() . '/inc/theme-customizer.php' );

    /**
     * Custom template tags for this theme.
     */
    require_once( get_template_directory() . '/inc/template-tags.php' );

    /**
     * Custom Nav Menu handler for the Navbar.
     */
    require_once( get_template_directory() . '/inc/nav-menu-walker.php' );

    /**
     * Theme Hook Alliance
     */
    require_if_theme_supports( 'tha_hooks', get_template_directory() . '/inc/tha-theme-hooks.php' );

    /**
     * Including three menu (header-menu, primary and footer-menu).
     * Primary is wrapping in a navbar containing div (wich support responsive variation)
     * Header-menu and Footer-menu are inside pills dropdown menu
     *
     * @since	1.2.2 - 07.04.2012
     * @see		http://codex.wordpress.org/Function_Reference/register_nav_menus
     */
    register_nav_menus( array(
        'primary'		=>	__( 'Main Navigation', 'the-bootstrap' ),
        'header-menu'  	=>	__( 'Header Menu', 'the-bootstrap' ),
        'footer-menu' 	=>	__( 'Footer Menu', 'the-bootstrap' )
    ) );

} // the_bootstrap_setup