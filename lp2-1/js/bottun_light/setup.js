    //画像保護
    $(function(){
        $('img').attr('onmousedown', 'return false');
        $('img').attr('onselectstart', 'return false');
        $('img').attr('oncontextmenu', 'return false');
    });


   //スクロールの制御
    $(function(){
        $('a[href^="#"]').click(function(){
            var speed = 500;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    });


    //inview
    $(function() {
        $('.my1').on('inview', function(event, isInView) {if (isInView) {$(".my1").addClass('marker_y');}});
        $('.my2').on('inview', function(event, isInView) {if (isInView) {$(".my2").addClass('marker_y');}});
        $('.my3').on('inview', function(event, isInView) {if (isInView) {$(".my3").addClass('marker_y');}});
        $('.my4').on('inview', function(event, isInView) {if (isInView) {$(".my4").addClass('marker_y');}});
        $('.my5').on('inview', function(event, isInView) {if (isInView) {$(".my5").addClass('marker_y');}});
        $('.my6').on('inview', function(event, isInView) {if (isInView) {$(".my6").addClass('marker_y');}});
        $('.my7').on('inview', function(event, isInView) {if (isInView) {$(".my7").addClass('marker_y');}});
        $('.my8').on('inview', function(event, isInView) {if (isInView) {$(".my8").addClass('marker_y');}});
        $('.my9').on('inview', function(event, isInView) {if (isInView) {$(".my9").addClass('marker_y');}});
        $('.my10').on('inview', function(event, isInView) {if (isInView) {$(".my10").addClass('marker_y');}});
        $('.my11').on('inview', function(event, isInView) {if (isInView) {$(".my11").addClass('marker_y');}});
    });// JavaScript Document