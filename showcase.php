<!-- Showcase -->
<div class="showcase">
    <div class="container">
        <div class="row">
            <div class="span12">
                <header class="js-animated">
                    <h1><?php bloginfo('name') ?></h1>
                    <p class="description"><?php bloginfo('description') ?></p>
                </header>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    jQuery(document).ready(function($){
        // fancy animation - fade out header content on page scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10) {
                $('.js-animated').stop().animate({opacity: 0}, 200);
            }
            if ($(this).scrollTop() < 10) {
                $('.js-animated').stop().animate({opacity: 1}, 500);
            }
        });
    });
</script>