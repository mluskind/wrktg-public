<?php
if ( !class_exists( 'WRKTG_Public_Theme' ) ) {

  class WRKTG_Public_Theme {

    function __construct() {
      add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );
    }

    function wp_enqueue_scripts() {
      if ( SCRIPT_DEBUG ) {
        $min = '';
      } else {
        $min = '.min';
      }
      wp_register_script( 'waypoints', get_stylesheet_directory_uri() . "/js/waypoints$min.js", array( 'jquery' ), '2.0.2' );
      wp_register_script( 'raphael', get_stylesheet_directory_uri() . "/js/raphael$min.js" );
      wp_register_script( 'main', get_stylesheet_directory_uri() . '/js/main.js', array( 'jquery', 'raphael' ) );
      /**
       * @todo: add font-awesome for IE7
       */
      wp_enqueue_style( 'bootstrap',      "//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/css/bootstrap.no-icons.min.css" );
      wp_enqueue_style( 'font-awesome',   "//netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css", array('bootstrap') );
      wp_enqueue_style( 'font-patua-one', "//fonts.googleapis.com/css?family=Patua+One" );
      wp_enqueue_style( 'the-bootstrap-child', get_stylesheet_uri(), array( 'bootstrap' ) );
      wp_enqueue_script( 'bootstrap',     "//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/js/bootstrap.js", array('jquery'), '2.3.0');
      wp_enqueue_script( 'waypoints' );
      wp_enqueue_script( 'main' );
    }



  }

}
new WRKTG_Public_Theme();