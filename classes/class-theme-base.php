<?php
if ( !class_exists( 'WRKTG_Public_Theme' ) ) {

  class WRKTG_Public_Theme {

    function __construct() {
      add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );
    }

    function wp_enqueue_scripts() {
      wp_register_script( 'waypoints', get_stylesheet_directory_uri() . '/js/waypoints.min.js', array( 'jquery' ), '2.0.2' );

      /**
       * @todo: add font-awesome for IE7
       */
      wp_enqueue_style( 'bootstrap', '//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css' );
      wp_enqueue_style( 'font-awesome', 'http://netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css', array('bootstrap') );
      wp_enqueue_style( 'openwebicons', 'http://weloveiconfonts.com/api/?family=openwebicons', array( 'font-awesome' ) );
      wp_enqueue_style( 'font-patua-one', 'http://fonts.googleapis.com/css?family=Patua+One' );
      wp_enqueue_script( 'bootstrap', '//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js', array('jquery'), '2.2.2');
      wp_enqueue_script( 'waypoints' );
      wp_enqueue_style( 'the-bootstrap-child', get_stylesheet_uri(), array( 'bootstrap' ) );
    }



  }

}
new WRKTG_Public_Theme();