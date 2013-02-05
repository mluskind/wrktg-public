<?php
/** index.php
 *
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @author    Konstantin Obenland
 * @package    The Bootstrap
 * @since    1.0.0 - 05.02.2012
 */

get_header( 'front-page' ); ?>

  <section id="primary" class="span8" xmlns="http://www.w3.org/1999/html">
  <div id="content" role="main">

  <div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
      <div class="container">
        <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="brand" href="./index.html">WRKTG</a>

        <div class="nav-collapse collapse">
          <ul class="nav">
            <li class="active">
              <a href="./index.html">Home</a>
            </li>
            <li class="">
              <a href="./getting-started.html">Principles</a>
            </li>
            <li class="">
              <a href="./scaffolding.html">How we work</a>
            </li>
            <li class="">
              <a href="./base-css.html">Clients</a>
            </li>
            <li class="">
              <a href="./components.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="row-fluid big-things">
    <h2 class="span12 intro">We build BIG things with WordPress.</h2>

    <p class="span12 sub-intro">We design and develop web applications using the world’s most popular and versatile
      content management system.</p>
  </div>


  <div class="row-fluid technology">
    <div class="span3 well scaleup">
      <i class="icon-circle-arrow-up"></i>

      <h3>ScaleUp</h3>

      <p>WRKTG is a network of professional developers and designers.</p>
    </div>

    <div class="span3 well">
      <i class="icon-group"></i>

      <h3>People</h3>

      <p>The conversation you have with us is the same conversation you would have internally about business
        objectives, organizational constraints, and timeline. </p>
    </div>
    <div class="span3 well">
      <i class="icon-building"></i>

      <h3>Build</h3>

      <p>Plans are made together, and can be changed together! During the project we are firm believers that in
        order to avoid unnecessary revisions and hold-ups, it is essential to establish clear and consistent lines
        of communication. </p>
    </div>
    <div class="span3 well">
      <i class="icon-desktop"></i>
      <i class="icon-mobile-phone"></i>

      <h3>Responsive</h3>

      <p>Since you are a members of the team you’ll get to see the entire evolution of the build. However, weekly
        builds allow the entire team to test a version of the build at that point in time.</p>
    </div>
  </div>

  <hr class="soften">

  <div class="row-fluid commandments">
    <h2 class="span12 intro">Wrktg Principles.</h2>

    <p class="span12 sub-intro">“Tell me and I will forget. Show me and I will remember. Involve me and I will
      understand” – Confucius</p>
  </div>

  <div class="well">
    <div class="row principles">
      <div class="offset2 span4 experience">
        <h3><i class="icon-folder-open"></i>openness and sharing</h3>

        <p>WRKTG is a network of professional developers and designers.
          WRKTG is a network of professional developers and designers.
          WRKTG is a network of professional developers and designers.</p>
      </div>

      <div class="span4 experience">
        <h3><i class="icon-random"></i>agile & iterative</h3>

        <p>WRKTG is a network of professional developers and designers.
          WRKTG is a network of professional developers and designers.
          WRKTG is a network of professional developers and designers.</p>
      </div>
    </div>

    <div class="row principles">
      <div class="offset2 span4 experience">
        <h3><i class="icon-sitemap"></i>flexible network</h3>

        <p>WRKTG is a network of professional developers and designers.
          WRKTG is a network of professional developers and designers.
          WRKTG is a network of professional developers and designers.</p>
      </div>

      <div class="span4 experience">
        <h3><i class="icon-bullhorn"></i>continued dialogue</h3>

        <p>WRKTG is a network of professional developers and designers.
          WRKTG is a network of professional developers and designers.
          WRKTG is a network of professional developers and designers.</p>
      </div>
    </div>
  </div>

  <hr class="soften">

  <div class="row-fluid process">
    <h2 class="span12 intro">How we work.</h2>

    <p class="span12 sub-intro">It's all about co-creation.</p>

  </div>

  <div class="well">
    <div class="row-fluid approach">

      <div class="offset2 span2 expertise">
        <h3>Set-up.</h3>
      </div>

      <div class="span2 ">
        <script type="text/javascript">
          jQuery(document).ready(function ($) {
            $('.approach i').popover();
          });
        </script>

        <i class="icon-time" data-content="Popover with data-trigger" data-placement="top"
           data-original-title="Estimate"
           data-trigger="hover"></i>
      </div>
      <div class="span2 ">
        <i class="icon-group" data-content="Select a team based on project specs." data-placement="top"
           data-original-title="Team"
           data-trigger="hover"></i>
      </div>
      <div class="span2">
        <i class="icon-tasks" data-content="The team refines the estimate and creates a weekly task list."
           data-placement="top" data-original-title="Refined Estimate and Tasks"
           data-trigger="hover"></i>
      </div>
    </div>

    <hr class="soften">

    <div class="row-fluid approach">
      <div class="offset2 span2 expertise">
        <h3>Iteration.</h3>
      </div>
      <div class="span2">
        <i class="icon-cogs" data-content="Popover with data-trigger" data-placement="top"
           data-original-title="Development"
           data-trigger="hover"></i>
      </div>
      <div class="span2 ">
        <i class="icon-building"
           data-content="The entire team will be able to test the weeks build. Weekly builds are essential to keep the project on task."
           data-placement="top"
           data-original-title="Weekly Build" data-trigger="hover"></i>
      </div>
      <div class="span2 ">
        <i class="icon-ok-circle"
           data-content="You will be able to approve the weeks hours before payment is released to the development team. Pay is released on a bi-weekly basis."
           data-placement="top"
           data-original-title="Time Approval" data-trigger="hover"></i>
      </div>
    </div>

    <hr class="soften">

    <div class="row-fluid approach">
      <div class="offset2 span2 expertise">
        <h3>Deliverables.</h3>
      </div>
      <div class="offset2 span2 ">
        <i class="icon-truck" data-content="Popover with data-trigger" data-placement="top"
           data-original-title="Final Product" data-trigger="hover"></i>
      </div>
    </div>
  </div>

  <hr class="soften">

  <div class="clients">
    <div class="row-fluid copy">
      <h2 class="span12 intro">Some of our clients.</h2>

      <p class="span12 sub-intro">we have sexy times with our clients.</p>
    </div>
    <div class="row-fluid">
      <ul class="thumbnails example-sites">
        <li class="span3">
          <a class="thumbnail" href="http://homewood.org/" target="_blank">
            <img src="http://wrktg.site/wp-content/themes/wrktg-public/images/Homewood.png" alt="Homewood">
          </a>
        </li>
        <li class="span3">
          <a class="thumbnail" href="http://dhltd.com/" target="_blank">
            <img src="http://wrktg.site/wp-content/themes/wrktg-public/images/D+H.png" alt="Davis and Henderson">
          </a>
        </li>
        <li class="span3">
          <a class="thumbnail" href="http://no-kidding.ichannel.ca/" target="_blank">
            <img src="http://wrktg.site/wp-content/themes/wrktg-public/images/ichannel.png" alt="No Kidding - ichannel">
          </a>
        </li>
        <li class="span3">
          <a class="thumbnail" href="http://nobelwomensinitiative.org/" target="_blank">
            <img src="http://wrktg.site/wp-content/themes/wrktg-public/images/NWI.png" alt="Noble Women's Initiative">
          </a>
        </li>
      </ul>
    </div>
  </div>

  <hr class="soften">

  <div class="row-fluid contact">
    <h2 class="span12 intro">Contact Us.</h2>

    <p class="span12 sub-intro">Let's Work Together!</p>
  </div>


  <div class="row-fluid emergency">
    <div class="offset1 span4 well ">
      <i class="icon-ambulance"></i>

      <h3>Emergencies</h3>

      <p>If you absolutely, positively, need something critical done right away!</p>
    </div>
  </div>

  </section>
<?php
get_footer();