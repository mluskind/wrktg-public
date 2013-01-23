<!-- Showcase -->
<div class="showcase">
    <div class="container">
        <div class="row">
            <div class="span12 caption middle-left container"">
                <header class="js-animated">
                    <h1 class= "large blue text-white"><?php bloginfo('name') ?></h1>
                    <p class="description small blue text-white" >Technical and Creative people</p>
                    <p class="description small blue text-white" >passionate about business, technology</p>
                    <p class="description small blue text-white" >and design.</p>
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