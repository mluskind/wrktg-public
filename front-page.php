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

      <div class="row-fluid big-things">
        <h1 class="span12 intro">We build BIG things with WordPress.</h1>
        <h2 class="span12 byline">We develop and design web applications using the world’s most popular and versatile
          content management system.</h2>
      </div>

      <div class="row-fluid principles">
        <div class="span3">
          <i class="icon-group"></i>
          <h2>Expertise</h2>
          <p>WRKTG is a network of professional developers and designers.</p>
        </div>
        <div class="span3"><br/>
          <i class="icon-cogs"></i>
          <h3>Transparency</h3>
          <p>The conversation you have with us is the same conversation you would have internally about business
            objectives, organizational constraints, and timeline. You can expect each WRKTG team member to generously
            share their knowledge and recommend solutions that are in the best interest of your business. By working
            together we remove all the unnecessary BS between stakeholders and makers. Solutions are arrived at by
            leveraging the collective talent and experience of the entire team&#8230;.which means you too!</p>
        </div>
        <div class="span3">
          <i class="icon-comments-alt"></i>
          <h3>Communication</h3>
          <p>Plans are made together, and can be changed together! During the project we are firm believers that in
            order to avoid unnecessary revisions and hold-ups, it is essential to establish clear and consistent lines
            of communication. Setting expectations at the outset and sticking to them is paramount. However, this
            doesn’t mean that there is no flexibility to change things along the way as new information and ideas are
            infused into the project.</p>
        </div>
        <div class="span3">
          <i class="icon-truck"></i>
          <h3>Deliverables</h3>
          <p>Since you are a members of the team you’ll get to see the entire evolution of the build. However, weekly
            builds allow the entire team to test a version of the build at that point in time.</p>
        </div>
      </div>

      <div class="row-fluid clients">
        <h2>Some of our clients</h2>
        <blockquote class="offset3 span6"><i class="icon-quote-left"></i>
          Once you&#8217;ve worked with WRKTG and experienced
          this enlightened approach to productivity you&#8217;ll wonder why someone hadn&#8217;t already thought of this
          concept.
          <i class="icon-quote-right"></i>
          <span class="byline">Janet Walkutz, Homewood Health Centre</span>
        </blockquote>

      </div>

      <div class="row-fluid client-logo">
        <div class="span12">

      <img class="alignnone size-full wp-image-156" alt="canc1" src="/wp-content/uploads/2012/11/canc1.png" width="270" height="70" />
      <img class="alignnone size-full wp-image-148" alt="ichannel" src="/wp-content/uploads/2012/11/ichannel.png" width="64" height="70"/>
      <img class="alignnone size-full wp-image-145" alt="homewood" src="/wp-content/uploads/2012/11/homewood.png" width="264" height="70"/>
      <img class="alignnone size-full wp-image-147" alt="dh" src="/wp-content/uploads/2012/11/dh.png" width="190" height="70"/>
      <img class="alignnone size-full wp-image-146" alt="nwi" src="/wp-content/uploads/2012/11/nwi.png" width="127" height="70"/>

        </div>
      </div>

    <!-- #content -->
  </section><!-- #primary -->

<?php
get_footer();