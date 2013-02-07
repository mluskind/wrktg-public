
<div class="container">
  <div class="navbar navbar-inverse">
    <div class="navbar-inner">
      <a class="brand" href="#">WRKTG</a>
      <ul class="nav">
        <li class="active"><a href="#primary">Home</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</div>
<script type="text/javascript">
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
</script>