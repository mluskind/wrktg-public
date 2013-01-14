<?php
if ( !class_exists( 'WRKTG_Public_Theme' ) ) {

  class WRKTG_Public_Theme {

    function __construct() {
      add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );
      add_action( 'init', array( $this, 'init' ) );
    }

    function wp_enqueue_scripts() {
      /**
       * @todo: add font-awesome for IE7
       */
      wp_enqueue_style( 'font-awesome', 'http://netdna.bootstrapcdn.com/font-awesome/2.0/css/font-awesome.css', array( 'tw-bootstrap' ) );
      wp_enqueue_style( 'font-patua-one', 'http://fonts.googleapis.com/css?family=Patua+One' );
    }

    function init() {
      $this->register_field_groups();
    }

    function register_field_groups() {

      if ( function_exists( "register_field_group" ) ) {
        register_field_group( array(
                                   'id' => 'wrktg_public_front_page',
                                   'title' => 'Front Page',
                                   'fields' =>
                                   array(
                                     0 =>
                                     array(
                                       'key' => 'field_1',
                                       'label' => 'Pages',
                                       'name' => 'pages',
                                       'type' => 'relationship',
                                       'order_no' => 0,
                                       'instructions' => '',
                                       'required' => 0,
                                       'conditional_logic' =>
                                       array(
                                         'status' => 0,
                                         'rules' =>
                                         array(
                                           0 =>
                                           array(
                                             'field' => 'null',
                                             'operator' => '==',
                                           ),
                                         ),
                                         'allorany' => 'all',
                                       ),
                                       'post_type' =>
                                       array(
                                         0 => 'page',
                                       ),
                                       'taxonomy' =>
                                       array(
                                         0 => 'all',
                                       ),
                                       'max' => '',
                                     ),
                                   ),
                                   'location' =>
                                   array(
                                     'rules' =>
                                     array(
                                       0 =>
                                       array(
                                         'param' => 'page_type',
                                         'operator' => '==',
                                         'value' => 'front_page',
                                         'order_no' => 0,
                                       ),
                                     ),
                                     'allorany' => 'all',
                                   ),
                                   'options' =>
                                   array(
                                     'position' => 'normal',
                                     'layout' => 'default',
                                     'hide_on_screen' =>
                                     array(),
                                   ),
                                   'menu_order' => 0,
                              ) );
      }

    }

  }

}
new WRKTG_Public_Theme();