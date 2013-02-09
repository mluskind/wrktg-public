/**
 * Waypoints
 */
jQuery(document).ready(function($){
    $( '#page' ).waypoint( function( direction ) {
        if ( direction === 'down' ) {
            $( '.navbar' ).toggleClass( 'stuck' ).slideDown( 'fast' );
        }
        if ( direction === 'up' ) {
            $( '.navbar').slideUp( 'fast' ).toggleClass( 'stuck');
        }
    });

    $( "#primary, #principles, #how-we-work, #clients, #contact" ).waypoint(function( direction ) {
        current_id = $(this).attr( "id" );
        if ( direction === 'down' ) {
            previous_id = $(this).waypoint( 'prev' ).attr( "id" );
        }
        if ( direction === 'up' ) {
            previous_id = $(this).waypoint( 'next').attr( "id" );
        }
        if ( previous_id !== undefined ) {
            $( 'a[href="#' + previous_id + '"]' ).parent().removeClass( 'active' );
            $( 'a[href="#' + current_id + '"]').parent().addClass( 'active' );
        }
    });

});

/**
 * Fancy scroll
 */
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

/**
 * Showcase
 */
jQuery(document).ready(function($){
    $('.showcase').height( $(window).height() - $('.strip').outerHeight() );
});

/**
 * how we work - process diagram
 */
jQuery(document).ready(function ($) {

    var base = { 'width': 1170, height: 440 }

    function resizePaper() {
        newWidth = $('#process-diagram').width();
        ratio =  newWidth / base.width;
        newHeight = base.height * ratio;
        $('#process-diagram').css( 'height', newHeight );
        var tString = 'S'+ ratio + ',' + ratio + ',0,0';
        all.transform( tString );
        paper.setViewBox( 0, 0, newWidth, newHeight, true );
    }
    $(window).resize(resizePaper);

    var paper = Raphael('process-diagram', '100%', '100%');

    paper.setStart();

    var estimate = paper.path("m 134.29167,222.72917 v 4.45833 q 0,0.9056 -0.66179,1.56738 -0.66178,0.66179 -1.56738,0.66179 h -26.75 q -0.9056,0 -1.56738,-0.66179 -0.66179,-0.66178 -0.66179,-1.56738 v -31.20833 q 0,-0.9056 0.66179,-1.56739 0.66178,-0.66178 1.56738,-0.66178 h 4.45833 q 0.9056,0 1.56739,0.66178 Q 112,195.07357 112,195.97917 V 220.5 h 20.0625 q 0.9056,0 1.56738,0.66178 0.66179,0.66179 0.66179,1.56739 z m 13.375,-2.22917 q 0,-7.24479 -2.82129,-13.8278 -2.82129,-6.58301 -7.62793,-11.38965 -4.80664,-4.80664 -11.38965,-7.62793 -6.58301,-2.82129 -13.8278,-2.82129 -7.24479,0 -13.8278,2.82129 -6.583009,2.82129 -11.389649,7.62793 -4.806641,4.80664 -7.62793,11.38965 -2.821289,6.58301 -2.821289,13.8278 0,7.24479 2.821289,13.8278 2.821289,6.58301 7.62793,11.38965 4.80664,4.80664 11.389649,7.62793 6.58301,2.82129 13.8278,2.82129 7.24479,0 13.8278,-2.82129 6.58301,-2.82129 11.38965,-7.62793 4.80664,-4.80664 7.62793,-11.38965 2.82129,-6.58301 2.82129,-13.8278 z m 17.83333,0 q 0,14.55924 -7.17513,26.85449 -7.17513,12.29525 -19.47038,19.47038 Q 126.55924,274 112,274 97.44075,274 85.145507,266.82487 72.850258,259.64974 65.675128,247.35449 58.500001,235.05924 58.500001,220.5 q 0,-14.55924 7.175127,-26.85449 7.17513,-12.29525 19.470378,-19.47038 Q 97.44075,167 112,167 q 14.55924,0 26.85449,7.17513 12.29525,7.17513 19.47038,19.47038 Q 165.5,205.94076 165.5,220.5 z");
    estimate.attr({id: 'estimate',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'estimate');

    var fromestimatetoteam = paper.path("m 225.62521,196.64829 0,12.625 -41.96875,0 0,18.46875 41.96875,0 0,12.78125 38.03125,-21.9375 -38.03125,-21.9375 z");
    fromestimatetoteam.attr({id: 'from-estimate-to-team',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'fromestimatetoteam');

    var team = paper.path("m 310.08649,222 q -9.67299,0.29855 -15.8231,7.64286 h -8.00111 q -4.89621,0 -8.23996,-2.41825 -3.34375,-2.41825 -3.34375,-7.07561 0,-21.07757 7.40402,-21.07757 0.35826,0 2.59738,1.2539 2.23911,1.25391 5.8217,2.53767 3.58259,1.28376 7.10547,1.28376 4.00056,0 7.94141,-1.37332 -0.29855,2.20926 -0.29855,3.94085 0,8.29966 4.83649,15.28571 z m 63.94922,38.03516 q 0,7.16517 -4.35881,11.31501 Q 365.31808,275.5 358.09319,275.5 h -52.18638 q -7.22489,0 -11.58371,-4.14983 -4.35882,-4.14984 -4.35882,-11.31501 0,-3.16462 0.20899,-6.17997 0.20898,-3.01535 0.83594,-6.50837 0.62695,-3.49303 1.58231,-6.47852 0.95535,-2.98549 2.56752,-5.8217 1.61216,-2.83622 3.70201,-4.8365 2.08984,-2.00028 5.10519,-3.19448 3.01534,-1.19419 6.65764,-1.19419 0.5971,0 2.56752,1.28376 1.97043,1.28376 4.35882,2.86607 2.38839,1.58231 6.38895,2.86607 4.00056,1.28376 8.06083,1.28376 4.06027,0 8.06082,-1.28376 4.00056,-1.28376 6.38896,-2.86607 2.38839,-1.58231 4.35881,-2.86607 1.97043,-1.28376 2.56752,-1.28376 3.6423,0 6.65765,1.19419 3.01535,1.1942 5.10519,3.19448 2.08984,2.00028 3.70201,4.8365 1.61216,2.83621 2.56752,5.8217 0.95536,2.98549 1.58231,6.47852 0.62695,3.49302 0.83594,6.50837 0.20898,3.01535 0.20898,6.17997 z m -61.14285,-76.24945 q 0,6.32925 -4.47824,10.80748 -4.47824,4.47824 -10.80748,4.47824 -6.32924,0 -10.80748,-4.47824 -4.47823,-4.47823 -4.47823,-10.80748 0,-6.32924 4.47823,-10.80747 4.47824,-4.47824 10.80748,-4.47824 6.32924,0 10.80748,4.47824 4.47824,4.47823 4.47824,10.80747 z m 42.03571,22.92858 q 0,9.49386 -6.71735,16.21121 -6.71736,6.71736 -16.21122,6.71736 -9.49386,0 -16.21122,-6.71736 -6.71735,-6.71735 -6.71735,-16.21121 0,-9.49387 6.71735,-16.21122 6.71736,-6.71736 16.21122,-6.71736 9.49386,0 16.21122,6.71736 6.71735,6.71735 6.71735,16.21122 z m 34.39286,13.43471 q 0,4.65736 -3.34375,7.07561 -3.34375,2.41825 -8.23996,2.41825 h -8.00111 Q 363.58649,222.29855 353.9135,222 q 4.8365,-6.98605 4.8365,-15.28571 0,-1.73159 -0.29855,-3.94085 3.94085,1.37332 7.94141,1.37332 3.52288,0 7.10546,-1.28376 3.58259,-1.28376 5.82171,-2.53767 2.23912,-1.2539 2.59738,-1.2539 7.40402,0 7.40402,21.07757 z m -7.64286,-36.36329 q 0,6.32925 -4.47824,10.80748 -4.47823,4.47824 -10.80747,4.47824 -6.32925,0 -10.80748,-4.47824 -4.47824,-4.47823 -4.47824,-10.80748 0,-6.32924 4.47824,-10.80747 4.47823,-4.47824 10.80748,-4.47824 6.32924,0 10.80747,4.47824 4.47824,4.47823 4.47824,10.80747 z");
    team.attr({id: 'team',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'team');

    var fromteamtoupdateestimate = paper.path("m 444.81791,198.0625 0,12.625 -41.96875,0 0,18.46875 41.96875,0 0,12.78125 L 482.84916,220 444.81791,198.0625 z");
    fromteamtoupdateestimate.attr({id: 'from-team-to-update-estimate',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'fromteamtoupdateestimate');

    var updateestimate = paper.path("m 561.16916,257.44 h 41.6 v -8.32 h -41.6 v 8.32 z m -24.96,-33.28 h 66.56 v -8.32 h -66.56 v 8.32 z m 41.6,-33.28 h 24.96 v -8.32 h -24.96 v 8.32 z m 33.28,54.08 v 16.64 q 0,1.69 -1.235,2.925 -1.235,1.235 -2.925,1.235 h -108.16 q -1.69,0 -2.925,-1.235 -1.235,-1.235 -1.235,-2.925 v -16.64 q 0,-1.69 1.235,-2.925 1.235,-1.235 2.925,-1.235 h 108.16 q 1.69,0 2.925,1.235 1.235,1.235 1.235,2.925 z m 0,-33.28 v 16.64 q 0,1.69 -1.235,2.925 -1.235,1.235 -2.925,1.235 h -108.16 q -1.69,0 -2.925,-1.235 -1.235,-1.235 -1.235,-2.925 v -16.64 q 0,-1.69 1.235,-2.925 1.235,-1.235 2.925,-1.235 h 108.16 q 1.69,0 2.925,1.235 1.235,1.235 1.235,2.925 z m 0,-33.28 v 16.64 q 0,1.69 -1.235,2.925 -1.235,1.235 -2.925,1.235 h -108.16 q -1.69,0 -2.925,-1.235 -1.235,-1.235 -1.235,-2.925 V 178.4 q 0,-1.69 1.235,-2.925 1.235,-1.235 2.925,-1.235 h 108.16 q 1.69,0 2.925,1.235 1.235,1.235 1.235,2.925 z");
    updateestimate.attr({id: 'update-estimate',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'updateestimate');

    var fromupdateestimatecode = paper.path("m 543.5866,165.13166 -0.0303,-74.446921 c 0,0 0.97177,-20.40718 19.43541,-20.40718 18.46364,0 22.54632,0 22.54632,0 l 0,-12.633017 38.01827,21.949867 -38.01827,21.949861 0,-12.803071 -18.27053,0 c 0,0 -4.85885,-0.19435 -4.85885,5.83062 0,6.024981 0.0303,70.564351 0.0303,70.564351 z");
    fromupdateestimatecode.attr({id: 'from-update-estimate-code',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'fromupdateestimatecode');

    var code = paper.path("m 693.369,79.965 q 0,-7.42 -5.25,-12.67 -5.25,-5.25 -12.67,-5.25 -7.42,0 -12.67,5.25 -5.25,5.25 -5.25,12.67 0,7.42 5.25,12.67 5.25,5.25 12.67,5.25 7.42,0 12.67,-5.25 5.25,-5.25 5.25,-12.67 z m 53.76,35.84 q 0,-3.64 -2.66,-6.3 -2.66,-2.66 -6.3,-2.66 -3.64,0 -6.3,2.66 -2.66,2.66 -2.66,6.3 0,3.71 2.625,6.335 2.625,2.625 6.335,2.625 3.71,0 6.335,-2.625 2.625,-2.625 2.625,-6.335 z m 0,-71.68 q 0,-3.64 -2.66,-6.3 -2.66,-2.66 -6.3,-2.66 -3.64,0 -6.3,2.66 -2.66,2.66 -2.66,6.3 0,3.71 2.625,6.335 2.625,2.625 6.335,2.625 3.71,0 6.335,-2.625 2.625,-2.625 2.625,-6.335 z m -26.88,29.47 v 12.95 q 0,0.7 -0.49,1.365 -0.49,0.665 -1.12,0.735 l -10.85,1.68 q -0.77,2.45 -2.24,5.32 2.38,3.36 6.3,8.05 0.49,0.7 0.49,1.4 0,0.84 -0.49,1.33 -1.61,2.1 -5.775,6.265 -4.165,4.165 -5.495,4.165 -0.77,0 -1.47,-0.49 l -8.05,-6.3 q -2.59,1.33 -5.39,2.17 -0.77,7.56 -1.61,10.85 -0.49,1.68 -2.1,1.68 h -13.02 q -0.77,0 -1.4,-0.525 -0.63,-0.525 -0.7,-1.225 l -1.61,-10.71 q -2.38,-0.7 -5.25,-2.17 l -8.26,6.23 q -0.49,0.49 -1.4,0.49 -0.77,0 -1.47,-0.56 -10.08,-9.31 -10.08,-11.2 0,-0.63 0.49,-1.33 0.7,-0.98 2.87,-3.71 2.17,-2.73 3.29,-4.27 -1.61,-3.08 -2.45,-5.74 l -10.64,-1.68 q -0.7,-0.07 -1.19,-0.665 -0.49,-0.595 -0.49,-1.365 v -12.95 q 0,-0.7 0.49,-1.365 0.49,-0.665 1.12,-0.735 l 10.85,-1.68 q 0.77,-2.45 2.24,-5.32 -2.38,-3.36 -6.3,-8.05 -0.49,-0.77 -0.49,-1.4 0,-0.84 0.49,-1.4 1.54,-2.1 5.74,-6.23 4.2,-4.13 5.53,-4.13 0.77,0 1.47,0.49 l 8.05,6.3 q 2.38,-1.26 5.39,-2.24 0.77,-7.56 1.61,-10.78 0.49,-1.68 2.1,-1.68 h 13.02 q 0.77,0 1.4,0.525 0.63,0.525 0.7,1.225 l 1.61,10.71 q 2.38,0.7 5.25,2.17 l 8.26,-6.23 q 0.56,-0.49 1.4,-0.49 0.77,0 1.47,0.56 10.08,9.31 10.08,11.2 0,0.63 -0.49,1.33 -0.84,1.12 -2.94,3.78 -2.1,2.66 -3.15,4.2 1.61,3.36 2.38,5.74 l 10.64,1.61 q 0.7,0.14 1.19,0.735 0.49,0.595 0.49,1.365 z m 44.8,37.31 v 9.8 q 0,1.12 -10.43,2.17 -0.84,1.89 -2.1,3.64 3.57,7.91 3.57,9.66 0,0.28 -0.28,0.49 -8.54,4.97 -8.68,4.97 -0.56,0 -3.22,-3.29 -2.66,-3.29 -3.64,-4.76 -1.4,0.14 -2.1,0.14 -0.7,0 -2.1,-0.14 -0.98,1.47 -3.64,4.76 -2.66,3.29 -3.22,3.29 -0.14,0 -8.68,-4.97 -0.28,-0.21 -0.28,-0.49 0,-1.75 3.57,-9.66 -1.26,-1.75 -2.1,-3.64 -10.43,-1.05 -10.43,-2.17 v -9.8 q 0,-1.12 10.43,-2.17 0.91,-2.03 2.1,-3.64 -3.57,-7.91 -3.57,-9.66 0,-0.28 0.28,-0.49 0.28,-0.14 2.45,-1.4 2.17,-1.26 4.13,-2.38 1.96,-1.12 2.1,-1.12 0.56,0 3.22,3.255 2.66,3.255 3.64,4.725 1.4,-0.14 2.1,-0.14 0.7,0 2.1,0.14 3.57,-4.97 6.44,-7.84 l 0.42,-0.14 q 0.28,0 8.68,4.9 0.28,0.21 0.28,0.49 0,1.75 -3.57,9.66 1.19,1.61 2.1,3.64 10.43,1.05 10.43,2.17 z m 0,-71.68 v 9.8 q 0,1.12 -10.43,2.17 -0.84,1.89 -2.1,3.64 3.57,7.91 3.57,9.66 0,0.28 -0.28,0.49 -8.54,4.97 -8.68,4.97 -0.56,0 -3.22,-3.29 -2.66,-3.29 -3.64,-4.76 -1.4,0.14 -2.1,0.14 -0.7,0 -2.1,-0.14 -0.98,1.47 -3.64,4.76 -2.66,3.29 -3.22,3.29 -0.14,0 -8.68,-4.97 -0.28,-0.21 -0.28,-0.49 0,-1.75 3.57,-9.66 -1.26,-1.75 -2.1,-3.64 -10.43,-1.05 -10.43,-2.17 v -9.8 q 0,-1.12 10.43,-2.17 0.91,-2.03 2.1,-3.64 -3.57,-7.91 -3.57,-9.66 0,-0.28 0.28,-0.49 0.28,-0.14 2.45,-1.4 2.17,-1.26 4.13,-2.38 1.96,-1.12 2.1,-1.12 0.56,0 3.22,3.255 2.66,3.255 3.64,4.725 1.4,-0.14 2.1,-0.14 0.7,0 2.1,0.14 3.57,-4.97 6.44,-7.84 l 0.42,-0.14 q 0.28,0 8.68,4.9 0.28,0.21 0.28,0.49 0,1.75 -3.57,9.66 1.19,1.61 2.1,3.64 10.43,1.05 10.43,2.17 z");
    code.attr({id: 'code',fill: '#0774ad',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'});

    var fromcodetobuild = paper.path("m 772.95965,70.352903 49.15099,6.47e-4 c 0,0 20.40718,0.97177 20.40718,19.43541 0,18.46364 0,26.03813 0,26.03813 l 12.63302,0 -21.94987,38.01827 -21.94986,-38.01827 12.80307,0 0,-21.76234 c 0,0 0.12806,-4.85885 -5.89691,-4.85885 -6.02498,0 -45.18004,0.14645 -45.18004,0.14645 z");
    fromcodetobuild.attr({id: 'from-code-to-build',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'fromcodetobuild');

    var build = paper.path("m 811.16916,251.84 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m 0,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m 17.92,0 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 V 216 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m 53.76,35.84 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 V 216 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m 53.76,35.84 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 V 216 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m 53.76,35.84 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 V 216 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m 35.84,17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,-17.92 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m 17.92,0 v 4.48 q 0,0.91 -0.665,1.575 -0.665,0.665 -1.575,0.665 h -4.48 q -0.91,0 -1.575,-0.665 -0.665,-0.665 -0.665,-1.575 v -4.48 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 4.48 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 z m -17.92,96.32 h 26.88 V 168.96 h -80.64 v 107.52 h 26.88 V 260.8 q 0,-0.91 0.665,-1.575 0.665,-0.665 1.575,-0.665 h 22.4 q 0.91,0 1.575,0.665 0.665,0.665 0.665,1.575 v 15.68 z m 35.84,-112 v 116.48 q 0,1.82 -1.33,3.15 -1.33,1.33 -3.15,1.33 h -89.6 q -1.82,0 -3.15,-1.33 -1.33,-1.33 -1.33,-3.15 V 164.48 q 0,-1.82 1.33,-3.15 1.33,-1.33 3.15,-1.33 h 89.6 q 1.82,0 3.15,1.33 1.33,1.33 1.33,3.15 z");
    build.attr({id: 'build',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'build');

    var frombuildtoapprove = paper.path("m 843.55627,294.46963 0,54.03445 c 0,0 -0.97177,20.40718 -19.43542,20.40718 -18.46364,0 -26.78895,0 -26.78895,0 l 0,12.63302 -38.01827,-21.94987 38.01827,-21.94986 0,12.80307 22.51316,0 c 0,0 4.85885,0.19435 4.85885,-5.83062 0,-6.02498 0,-50.14051 0,-50.14051 z");
    frombuildtoapprove.attr({id: 'from-build-to-approve',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'frombuildtoapprove');

    var approve = paper.path("m 727.31916,351.04 q 0,1.89 -1.26,3.15 l -22.4,22.4 -7.14,7.14 q -1.26,1.26 -3.15,1.26 -1.89,0 -3.15,-1.26 l -7.14,-7.14 -13.44,-13.44 q -1.26,-1.26 -1.26,-3.15 0,-1.89 1.26,-3.15 l 7.14,-7.14 q 1.26,-1.26 3.15,-1.26 1.89,0 3.15,1.26 l 10.29,10.29 19.25,-19.25 q 1.26,-1.26 3.15,-1.26 1.89,0 3.15,1.26 l 7.14,7.14 q 1.26,1.26 1.26,3.15 z m 6.37,8.96 q 0,-7.28 -2.835,-13.895 -2.835,-6.615 -7.665,-11.445 -4.83,-4.83 -11.445,-7.665 -6.615,-2.835 -13.895,-2.835 -7.28,0 -13.895,2.835 -6.615,2.835 -11.445,7.665 -4.83,4.83 -7.665,11.445 -2.835,6.615 -2.835,13.895 0,7.28 2.835,13.895 2.835,6.615 7.665,11.445 4.83,4.83 11.445,7.665 6.615,2.835 13.895,2.835 7.28,0 13.895,-2.835 6.615,-2.835 11.445,-7.665 4.83,-4.83 7.665,-11.445 2.835,-6.615 2.835,-13.895 z m 17.92,0 q 0,14.63 -7.21,26.985 -7.21,12.355 -19.565,19.565 -12.355,7.21 -26.985,7.21 -14.63,0 -26.985,-7.21 -12.355,-7.21 -19.565,-19.565 -7.21,-12.355 -7.21,-26.985 0,-14.63 7.21,-26.985 7.21,-12.355 19.565,-19.565 12.355,-7.21 26.985,-7.21 14.63,0 26.985,7.21 12.355,7.21 19.565,19.565 7.21,12.355 7.21,26.985 z");
    approve.attr({id: 'approve',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'approve');

    var fromapprovetoestimate = paper.path("m 634.12442,368.82275 -70.602,0.0296 c 0,0 -20.40718,-0.97177 -20.40718,-19.43541 0,-18.46364 -0.29003,-39.89866 -0.29003,-39.89866 l -12.63302,0 21.94986,-38.01828 21.94986,38.01828 -12.80307,0 0.29004,35.62287 c 0,0 -0.19436,4.85885 5.83062,4.85885 6.02498,0 66.70806,-0.014 66.70806,-0.014 z");
    fromapprovetoestimate.attr({id: 'from-approve-to-estimate',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'fromapprovetoestimate');

    var buildtoship = paper.path("m 936.81792,198.0625 0,12.625 -41.96875,0 0,18.46875 41.96875,0 0,12.78125 L 974.84916,220 936.81792,198.0625 z");
    buildtoship.attr({id: 'build-to-ship',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'buildtoship');

    var ship = paper.path("m 1065.4892,256.16 q 0,-3.64 2.66,-6.3 2.66,-2.66 6.3,-2.66 3.64,0 6.3,2.66 2.66,2.66 2.66,6.3 0,3.64 -2.66,6.3 -2.66,2.66 -6.3,2.66 -3.64,0 -6.3,-2.66 -2.66,-2.66 -2.66,-6.3 z m 26.88,-35.84 h -26.88 V 202.4 h 11.06 q 0.91,0 1.54,0.63 l 13.65,13.65 q 0.63,0.63 0.63,1.54 v 2.1 z m -89.6,35.84 q 0,-3.64 2.66,-6.3 2.66,-2.66 6.3,-2.66 3.64,0 6.3,2.66 2.66,2.66 2.66,6.3 0,3.64 -2.66,6.3 -2.66,2.66 -6.3,2.66 -3.64,0 -6.3,-2.66 -2.66,-2.66 -2.66,-6.3 z M 984.84916,180 v 71.68 q 0,1.05 0.28,1.855 0.28,0.805 0.945,1.295 0.665,0.49 1.155,0.805 0.49,0.315 1.645,0.42 1.155,0.105 1.575,0.14 0.42,0.035 1.785,0 1.365,-0.035 1.575,-0.035 0,7.42 5.25004,12.67 5.25,5.25 12.67,5.25 7.42,0 12.67,-5.25 5.25,-5.25 5.25,-12.67 h 26.88 q 0,7.42 5.25,12.67 5.25,5.25 12.67,5.25 7.42,0 12.67,-5.25 5.25,-5.25 5.25,-12.67 h 4.48 q 0.21,0 1.575,0.035 1.365,0.035 1.785,0 0.42,-0.035 1.575,-0.14 1.155,-0.105 1.645,-0.42 0.49,-0.315 1.155,-0.805 0.665,-0.49 0.945,-1.295 0.28,-0.805 0.28,-1.855 0,-1.82 -1.33,-3.15 -1.33,-1.33 -3.15,-1.33 v -22.4 q 0,-0.56 0.035,-2.45 0.035,-1.89 0,-2.66 -0.035,-0.77 -0.175,-2.415 -0.14,-1.645 -0.455,-2.59 -0.315,-0.945 -0.98,-2.135 -0.665,-1.19 -1.575,-2.1 l -13.86,-13.86 q -1.33,-1.33 -3.535,-2.24 -2.205,-0.91 -4.095,-0.91 h -11.2 V 180 q 0,-1.82 -1.33,-3.15 -1.33,-1.33 -3.15,-1.33 h -71.68004 q -1.82,0 -3.15,1.33 -1.33,1.33 -1.33,3.15 z");
    ship.attr({id: 'ship',fill: '#0774ad',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).data('id', 'ship');

    var all = paper.setFinish();

    resizePaper();

});