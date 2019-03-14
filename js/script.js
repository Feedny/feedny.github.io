/*~~~~~ metropoleHD js script ~~~~~*/

/*===== MAIN JS =====*/
$(document).ready(function($) {
/*=== Scroll NavBar Event ===*/
    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 700, function(){
            window.location.hash = hash;
          });
        } 
    });
  $(function() {
      if ($(window).scroll(function() {
          if ($(window).scrollTop()>250) {
              $("#sticky").fadeIn().css("display","block");
          }else {
              $("#sticky").fadeOut();
          }
      }));
  });

  $('body').scrollspy({
    target: "#sticky",
    offset: 50  
  });

  $('#mobile-button-open').on('click touchstart', function(event){
      $('#mobile-header').css('visibility', 'visible');
  });
});
/*====================*/
