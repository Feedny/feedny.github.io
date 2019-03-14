jQuery(document).ready(function() {

    pictos = $('#pictos');

    pictoBefore = pictos.find('.picto-before');
    pictoBefore.click(function(e){
        var id = "#"+$(this).attr("id");
        $(id).hide();
        $("#snd").addClass('nul-bottom');
        $("#thd").addClass('nul-bottom');
        $("#fth").addClass('nul-bottom');
        $("#fiv").addClass('nul-bottom');
        $("#six").addClass('nul-bottom');
        $(id+"-after").show();
    });

    pictoAfter = pictos.find('.picto-after');
    pictoAfter.click(function(e){
        var id = "#"+$(this).attr("id");
        $(id).hide();
        $(id.split('-')[0]).show();
    });

    // Fade Effect
    setTimeout(function(){$('.fadeRight').addClass('animated fadeInRight')},100);
    setTimeout(function(){$('.fadeLeft').addClass('animated fadeInLeft')},100);

    setTimeout(function(){$('.fadeRight2').addClass('animated fadeInRight')},200);
    setTimeout(function(){$('.fadeLeft2').addClass('animated fadeInLeft')},200);

});