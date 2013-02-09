<?php get_header( 'front-page' ); ?>

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

  <section class="showcase">
    <div class="caption middle-left container">
      <header class="js-animated">
        <h1 class="large blue text-white">WRKTG</h1>

        <p class="description small blue text-white">people working together</p>
      </header>
    </div>
  </section>

  <section class="strip">
    <h3>Let's work together! <a class="btn" href="#contact">Contact us</a></h3>
  </section>

  <section id="primary" class="container" xmlns="http://www.w3.org/1999/html">
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

            <p>ScaleUp is an in-house framework that's designed to make it easier to build web applications on
              WordPress. We use it to save our clients time and money!</p>
          </div>
          <div class="span3 well">
            <i class="icon-group"></i>

            <h3>People</h3>

            <p>WRKTG is composed of a core team of dedicated developers with a large network of professional
              freelancers.</p>
          </div>
          <div class="span3 well">
            <i class="icon-building"></i>

            <h3>Build</h3>

            <p>We work with Startups, NGOs and small to medium sized companies to build, test and validate
              ideas.</p>
          </div>
          <div class="span3 well">
            <i class="icon-desktop"></i>
            <i class="icon-mobile-phone"></i>

            <h3>Responsive</h3>

            <p>We build applications that run across all devices by building responsive from the start!</p>
          </div>
        </div>
      </article>

      <article id="how-we-work">
        <header>
          <h2 class="intro">How we work.</h2>

          <p class="sub-intro">It's all about co-creation.</p>
        </header>
        <div id="process-diagram"></div>
        <dl>
          <dt class="estimate">Estimate</dt>
          <dd>
            <p>We can provide a ballpark estimate to give you an idea if our prices are close to what you
              expected.</p>

            <p>We encourage prospective clients to be open about their business goals and budget to give us an
              opportunity to find workable solution.</p>
          </dd>
          <dt class="team">
          <dt>Team</dt>
          <dd>
            <p>We assemble a team of professional creatives with skills that match the needs of the project.
              We invite our client's staff to participate in the team as equal members to give our clients an
              opportunity
              to utilize their internal resources and give their staff an opportunity to learn in the process.</p>
          </dd>
          </dt>
        </dl>
      </article>

      <article id="contact">
        <header>
          <h2 class="span12 intro">Contact Us.</h2>

          <p class="sub-intro">Let's Work Together!</p>
        </header>
        <div itemscope itemprop="contactPoint" class="row-fluid">
          <div itemscope itemtype="http://schema.org/Person" class="span6 well">
            <h4 itemprop="name">Taras Mankovski</h4>

            <p itemprop="jobTitle"><strong>CEO, Founder</strong></p>

            <p itemprop="phone"><i class="icon-phone"></i> 416-779-3907</p>

            <p itemprop="email">
              <i class="icon-envelope"></i> <a href="mailto:taras@wrktg.com">taras@wrktg.com</a>
            </p>
          </div>
          <div itemscope itemprop="contactPoint" class="span6 well">
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
      </article>
  </section>

<?php get_footer();