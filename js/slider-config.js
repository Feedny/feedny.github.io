/*~~~~~ metropoleHD js script ~~~~~*/

/*===== SLIDER JS =====*/
$(document).ready(function($) {
  $('.owl-carousel').owlCarousel({
      items:1,
      singleItem  : true,
      center: true,
      merge: true,
      margin: 10,
      loop:true,
      autoPlay:false,
      autoHeight : false,
      autoWidth:true,
      navigation:true,
      navigationText: ["<img src='img/arrow_left-b.png'>","<img src='img/arrow_right-b.png'>"]
  });
});
/*====================*/
