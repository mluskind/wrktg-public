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

  <section id="primary" xmlns="http://www.w3.org/1999/html">
    <div id="content" role="main">

      <article id="introduction">
        <header>
          <h2 class="intro">We build BIG things with WordPress.</h2>

          <p class="sub-intro">We design and develop web applications using the world’s most popular and versatile
            content management system.</p>
        </header>
        <div class="row-fluid technology">
          <div class="span3 well scaleup">
            <img src="<?php echo get_stylesheet_directory_uri() ?>/images/scaleup.png"
                 alt="scaleup icon">

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
      </article>

      <article id="contact">
        <header>
          <h2 class="span12 intro">Contact Us.</h2>

          <p class="sub-intro">Let's Work Together!</p>
        </header>

        <div class="row-fluid">
          <div class="offset1 span4 well emergency">
            <i class="icon-ambulance"></i>

            <h3>Emergencies</h3>

            <p>If you absolutely, positively, need something critical done right away, <strong>we're available</strong>!</p>
          </div>
          <div class="span6 well">
            <div itemprop="contactPoint" itemscope itemtype="http://schema.org/Person" class="span6">
              <div itemscope itemtype="http://schema.org/Person">
                <h4 itemprop="name">Taras Mankovski</h4>
                <p itemprop="jobTitle"><strong>CEO, Founder</strong></p>

                <p itemprop="phone"><i class="icon-phone"></i> 416-779-3907</p>

                <p itemprop="email">
                  <i class="icon-envelope"></i> <a href="mailto:taras@wrktg.com">taras@wrktg.com</a>
                </p>
              </div>
            </div>
            <div class="row-fluid">
              <div itemprop="contactPoint" itemscope itemtype="http://schema.org/Person" class="span6">
                <div itemscope itemtype="http://schema.org/Person">
                  <h4 itemprop="name">Michael Luskind</h4>
                  <p itemprop="jobTitle"><strong>Co-founder</strong></p>

                  <p itemprop="phone"><i class="icon-phone"></i> 647-985-1296</p>

                  <p itemprop="email">
                    <i class="icon-envelope"></i> <a href="mailto:michael@wrktg.com">michael@wrktg.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>

<?php
get_footer();