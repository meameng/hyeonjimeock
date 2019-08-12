$(function(){
    $('.three li').eq(0).find('a').animate({'right':'0', 'opacity':'1'}, 300, 'swing')
    $('.three li').eq(1).find('a').delay(500).animate({'left':'0', 'opacity':'1'}, 300, 'swing')
    $('.three li').eq(2).find('a').delay(1000).animate({'right':'0', 'opacity':'1'}, 300, 'swing')

    // $('.p').hide();

    $('u').click(function(){
        $('.p').stop().fadeOut(200);
    });
    $('.boxx span').click(function(){
        var idx = $(this).parent('.boxx').index();
        // console.log(idx);
        $('.p').eq(idx).stop().fadeIn(200);
    });

    $(' .gallery-thumbs1 .swiper-slide').click(function(){
        var th = $(this)
        var idx = th.attr('data-swiper-slide-index');
        $(".joong .txtul li").removeClass("on");
        $(".joong .txtul li").eq(idx).addClass('on');
        // $('.txtul > li').fadeOut(300);
        // $('.txtul > li').eq(idx).fadeIn(300);
        $('.joong .gallery-top > li').stop().fadeOut(300);
        $('.joong .gallery-top > li').eq(idx).stop().fadeIn(300);
    });
    $(' .gallery-thumbs2 .swiper-slide').click(function(){
        var th = $(this)
        var idx = th.attr('data-swiper-slide-index');
        console.log(idx)
        $('.pu .txtul > li').removeClass("on");
        $('.pu .txtul > li').eq(idx).addClass('on');
        $('.pu .gallery-top > li').stop().fadeOut(300);
        $('.pu .gallery-top > li').eq(idx).stop().fadeIn(300);
    });
    $(' .gallery-thumbs3 .swiper-slide').click(function(){
        var th = $(this)
        var idx = th.attr('data-swiper-slide-index');
        console.log(idx)
        $('.han .txtul > li').removeClass("on");
        $('.han .txtul > li').eq(idx).addClass('on');
        $('.han .gallery-top > li').stop().fadeOut(300);
        $('.han .gallery-top > li').eq(idx).stop().fadeIn(300);
    });
    $(' .gallery-thumbs4 .swiper-slide').click(function(){
        var th = $(this)
        var idx = th.attr('data-swiper-slide-index');
        console.log(idx)
        $('.fry .txtul > li').removeClass("on");
        $('.fry .txtul > li').eq(idx).addClass('on');
        $('.fry .gallery-top > li').stop().fadeOut(300);
        $('.fry .gallery-top > li').eq(idx).stop().fadeIn(300);
    });


    $('.level1 > a').on("mouseenter",function(){
        $('.headerwrap').removeClass('over').addClass('over');
        $(".level2").hide();
		$(this).next().show();
    });
    $(".headerwrap").on("mouseleave", function() {
        $(".headerwrap").removeClass("over");
        $(".level2").hide();
	});

    var galleryThumbs = new Swiper('.gallery-thumbs', {
      slidesPerView: 3,
      spaceBetween: 18,
      loop: true,
      freeMode: true,
      observer: true,
      observeParents: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      grabCursor: true,
    });
    $(".truckicon li").on({
        mouseenter:function(){
            $(this).stop().animate({"scale":"1.8"});
        },
        mouseout:function(){
            var imi= $(this).hasClass("on");

            if(!imi){
                $(this).stop().animate({"scale":"1"});
            }
        }
    })
    $(".truckicon li").click(function(){
        var icon = $(this).index();

        $(".truckicon li").removeClass("on").stop().animate({"scale":"1"});
        $(this).addClass("on").stop().animate({"scale":"1.8"});

        $(".maptextbus").fadeIn();

        $(".placetext li").removeClass("on")
        $(".placetext li").fadeOut(300);
        $(".placetext li").eq(icon).fadeIn();

        $(".placebtn li").removeClass("on")
        $(".placebtn li").eq(icon).addClass("on");
    });
    $(".placebtn li").click(function(){
        var btn = $(this).index();

        $(".placebtn li").removeClass("on")
        $(this).addClass("on");

        $(".placetext li").removeClass("on")
        $(".placetext li").fadeOut(300);
        $(".placetext li").eq(btn).fadeIn();

        $(".truckicon li").removeClass("on").stop().animate({"scale":"1"});
        $(".truckicon li").eq(btn).addClass("on").stop().animate({"scale":"1.8"});
    });
    $(".placebtn li").on({
        mouseenter:function(){
            var btn=$(this).index();
            $(".truckicon li").eq(btn).stop().animate({"scale":"1.8"});
        },
        mouseout:function(){
            var btn=$(this).index();
            var imi= $(".truckicon li").eq(btn).hasClass("on");

            if(!imi){
                $(".truckicon li").eq(btn).stop().animate({"scale":"1"});
            }
        }
    });
    $(' .slide_nav li').click(function(){
        var idx = $(this).index();
        $(' .slide > li').stop().fadeOut(300);
        $(' .slide > li').eq(idx).stop().fadeIn(300);
    });
   

    $('u').click(function(){
        $('.pop').stop().fadeOut();
    })

    $('.menu > li:nth-child(1) a').click(function(e){
        e.preventDefault()
        $('.menu1').stop().fadeIn();
    });
    $('.menu > li:nth-child(5) a').click(function(e){
        e.preventDefault()
        $('.menu2').stop().fadeIn();
    });
    $('.menu > li:nth-child(6) a').click(function(e){
        e.preventDefault()
        $('.menu3').stop().fadeIn();
    });
    $('.menu > li:nth-child(7) a').click(function(e){
        e.preventDefault()
        $('.menu4').stop().fadeIn();
    });

    $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );
});