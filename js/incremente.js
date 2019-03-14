$(function() {
      function count($this){
          var current = parseInt($this.html(), 10);
          $this.html(++current);
          if(current !== $this.data('count')){
              setTimeout(function(){count($this)}, 20);
          }
      } 
      var i = 0;
      $('#begin-count').waypoint(function() {
          $('.numbers').css('display', 'block');
          $('.init').css('display', 'none');
          if (i == 0){
              $(".numbers").each(function() {
                  $(this).data('count', parseInt($(this).html(), 10));
                  $(this).html('0');
                  count($(this));
              });
              i = 1;
          }
      });
});