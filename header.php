<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
	<head>
		<?php tha_head_top(); ?>
		<link rel="profile" href="http://gmpg.org/xfn/11" />
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		
		<title><?php wp_title( '&laquo;', true, 'right' ); ?></title>
		
		<?php tha_head_bottom(); ?>
		<?php wp_head(); ?>
	</head>
	
	<body <?php body_class(); ?>

  <div class="container">
    <div class="navbar navbar-inverse">
      <div class="navbar-inner">
        <div class="container">

          <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>

          <a class="brand" href="#">WRKTG</a>

          <div class="nav-collapse collapse">
            <ul class="nav">
              <li><a href="#content">Home</a></li>
              <li><a href="#how-we-work">How We Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>