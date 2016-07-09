var flag = 0;
	
$(document).ready(function() {
	$("img.lazy").lazyload({
		effect: "fadeIn"
	});
	
	  document.createElement('video');
	  document.createElement('audio');
	  document.createElement('track');
	  
	  videojs.options.flash.swf = "video/video-js.swf";

	//判断使用设备
	var isMobile = 
	{
		Android: function() {
			return navigator.userAgent.match(/Android/i) ? true: false;
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i) ? true: false;
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true: false;
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i) ? true: false;
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
		}
	};

	var Sony = 
	{
		//加载轮播图
		showLunBo: function(jqueryEl) 
		{

			//var ob = jqueryEl;
			$(jqueryEl + ' .swiper-slide img').each(function(i) {

				//闭包结构
				var url = $(this).attr('url');
				$(this).removeAttr('url'); //移除url属性
				$(this).attr('src', url);

			});
			$(jqueryEl).show();
			$('.black').show();
		},
		//加载单张图片
		showImage: function(jqueryEl) 
		{
			var ob = $(jqueryEl + ' > img:eq(0)');
			var url = $(ob).attr('url'); //获取url属性
			$(ob).removeAttr('url'); //移除url属性
			$(ob).attr('src', url);
			$(jqueryEl).show();
			$('.black').show();
		},
		//特殊处理
		showImageByPhotos: function() 
		{
			$('.photo-big > li > img').each(function(i) {
				//闭包结构
				var url = $(this).attr('url');
				$(this).removeAttr('url'); //移除url属性
				$(this).attr('src', url);
			});
			$('.photo-big').show();
			$('.black').show();
		}
	};

	
	function bgFunction(className)
	{
			if(className == '.shouji')
			{
				$('.shouji').css('display','block');
				$('.bg').css('background','');
				$('.bg').css('background-size','');
			}
			else
			{
				$('.shouji').css('display','none');
				$('.section1 .bg').css('background','url(./images/page01_bg.png) left bottom no-repeat');
				$('.section1 .bg').css('background-size','100% auto');
				$('.section2 .bg').css('background','url(./images/page02_bg.png) left bottom no-repeat');
				$('.section2 .bg').css('background-size','100% auto');
				$('.section3 .bg').css('background','url(./images/page03_bg.png) left bottom no-repeat');
				$('.section3 .bg').css('background-size','100% auto');
				$('.section4 .bg').css('background','url(./images/page04_bg.png) left bottom no-repeat');
				$('.section4 .bg').css('background-size','100% auto');
				$('.section5 .bg').css('background','url(./images/page05_bg.png) left bottom no-repeat');
				$('.section5 .bg').css('background-size','100% auto');
				$('.section6 .bg').css('background','url(./images/page06_bg.png) left bottom no-repeat');
				$('.section6 .bg').css('background-size','100% auto');
				$('.section7 .bg').css('background','url(./images/page07_bg.png) left bottom no-repeat');
				$('.section7 .bg').css('background-size','100% auto');
			}
	}
	
	
	$('#gotoshaonao2,.logo').click(function() 
	{
		
		flag = 1;
		
		$.fn.fullpage.setAutoScrolling(true);

		$.fn.fullpage.moveTo(8);
		
		//alert('滚动')
		
	});

	if (!isMobile.any()) 
	{
		$('.section-in').removeClass('nomove');
		$('.tanchuang').removeClass('phone');
		$('.arrow').show();
		
		bgFunction('.bg'); //切换背景图
		//debugger
		$('#mySony').fullpage({
			verticalCentered: false,
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
			navigation: true,
			fitToSection: false,

			//切入页面触发事件
			afterLoad: function(anchorLink, index) {

				if (index == 8) 
				{
				
					$.fn.fullpage.setAutoScrolling(false);

					$("#tips-01").fadeIn();
					
					video1 = videojs("video-1", {
						"autoplay": false,
						"controls": true,
						"preload": "none",
						"width": "100%",
						"height": "100%"
					});
					video1.src({
						type: "video/mp4",
						src: "video/car.mp4"
					});
					
					
				}
				if (index != 8) 
				{
					$("#tips-01,#tips-02").fadeOut();
					$('#tips-03').fadeIn();
					
					$.fn.fullpage.setAutoScrolling(true);
				}
				

				if (index >= 2 && index <= 7) 
				{
					$("#tips-03").fadeIn(1000);
				} 
				else 
				{
					
					$("#tips-03").fadeOut(100);
				};
				fadeIn(index);
				
				//alert('进入页面编号'+index);
				if(flag == 1)
				{
					$("html,body").animate({
						"scrollTop": $(".LLpage3").offset().top
					},300,function(){ });
					
					flag = 2;
				}
			},
			//离开当前页触发的事件
			onLeave: function(index, nextIndex, direction) {
				//alert(index + " "+ flag);
				
				if (index == 8) {
					flag = 0;
					$.fn.fullpage.setAutoScrolling(true);
					$("#tips-02,#tips-01").fadeOut();
				}
				//debugger
				fadeOut(index);
			}
		});
	} 
	else 
	{
		
		bgFunction('.shouji'); // //切换背景图
		
		video1 = videojs("video-1", 
		{
			"autoplay": false,
			"controls": true,
			"preload": "none",
			"width": "100%",
			"height": "100%"
		});
		video1.src({
			type: "video/mp4",
			src: "video/car.mp4"
		});
	}

	function eachSony() 
	{
		var name = $('#mySony').find('.active').attr('data-anchor');

		if (name == "page2" || name == "page3" || name == "page4" || name == "page5" || name == "page6" || name == "page7") {
			$("#tips-02,#tips-01").fadeOut();
			$("#tips-03").fadeIn();
		}

	}

	setInterval(eachSony, 500);

	//淡入
	function fadeIn(index) 
	{
		if (index == 2) {
			$('.su-vs').css('display', 'none').fadeIn(200).animate({
				top: '+20%'
			},
			300);

			$('.su-cha').css('display', 'none').fadeIn(600).animate({
				left: '+6%'
			},
			500);

			$('.su-hao').css('display', 'none').fadeIn(1100).animate({
				right: '+2%'
			},
			500);
		}
		if (index == 3) {
			$('.cheng-vs').css('display', 'none').fadeIn(200).animate({
				top: '+7%'
			},
			300);

			$('.cheng-cha').css('display', 'none').fadeIn(600).animate({
				left: '+4%'
			},
			500);

			$('.cheng-hao').css('display', 'none').fadeIn(1100).animate({
				right: '+0%'
			},
			500);
		}
		if (index == 4) {
			$('.gan-vs').css('display', 'none').fadeIn(200).animate({
				top: '+9%'
			},
			300);

			$('.gan-cha').css('display', 'none').fadeIn(600).animate({
				left: '+4%'
			},
			500);

			$('.gan-hao').css('display', 'none').fadeIn(1100).animate({
				right: '+8%'
			},
			500);
		}
		if (index == 5) {
			$('.xiao-vs').css('display', 'none').fadeIn(200).animate({
				top: '+13%'
			},
			300);

			$('.xiao-cha').css('display', 'none').fadeIn(600).animate({
				left: '+9%'
			},
			500);

			$('.xiao-hao').css('display', 'none').fadeIn(1100).animate({
				right: '+3%'
			},
			500);
		}
	}
	//淡出
	function fadeOut(index) 
	{
		if (index == 2) {
			$('.su-vs').animate({
				top: '-11%'
			},
			300).fadeOut(200);

			$('.su-cha').animate({
				left: '-35%'
			},
			500).fadeOut(700);

			$('.su-hao').animate({
				right: '-60%'
			},
			500).fadeOut(1200);
		}
		if (index == 3) {
			$('.cheng-vs').animate({
				top: '-11%'
			},
			300).fadeOut(200);

			$('.cheng-cha').animate({
				left: '-35%'
			},
			500).fadeOut(700);

			$('.cheng-hao').animate({
				right: '-60%'
			},
			500).fadeOut(1200);
		}
		if (index == 4) {
			$('.gan-vs').animate({
				top: '-11%'
			},
			300).fadeOut(200);

			$('.gan-cha').animate({
				left: '-35%'
			},
			500).fadeOut(700);

			$('.gan-hao').animate({
				right: '-60%'
			},
			500).fadeOut(1200);
		}
		if (index == 5) {
			$('.xiao-vs').animate({
				top: '-11%'
			},
			300).fadeOut(200);

			$('.xiao-cha').animate({
				left: '-35%'
			},
			500).fadeOut(700);

			$('.xiao-hao').animate({
				right: '-60%'
			},
			500).fadeOut(1200);
		}
	}

	$(window).resize(function() 
	{
		autoScrolling();
	});

	var video1, video2, video3, video4, video5, video6;

	//tips01
	$("#gotoone,#gototwo,.shijian").click(function() {
		$.fn.fullpage.setAutoScrolling(true);
		$.fn.fullpage.moveTo(2); //侧边导航点击滑动效果
	});
	//tips02
	$("#gotoeight").click(function() {

		$.fn.fullpage.setAutoScrolling(false);

		$("html,body").animate({
			"scrollTop": $(".LLpage3").offset().top
		},
		600);
	});
	
	
	
	

	//烧脑派
	$('.shaonao,#gotoshaonao,#gotoeight2').click(function() {
		$.fn.fullpage.setAutoScrolling(true);
		$.fn.fullpage.moveTo(8);
	});

	function autoScrolling() {

		var w = $(".LLwrap").width();
		var sw = $(window).width(); //屏幕的宽度赋值
		var sh = $('.section').height(); //每屏幕的高度赋值
		var kuan = $('.LLpage3-b').width();
		var tv02w = $('.tv-big-in').width();
		var tv03w = $('.tv-big-intv03').width();
		var shipin01 = $('.shipin-01').width();
		var shipin02 = $('.shipin-02').width();
		var shipin03 = $('.shipin-03').width();
		var shipin03 = $('.shipin-03').width();
		/*$('.section .bg').height(1 * sh);*/
		$('.LLwrap').width(1 * sw);
		$('.lunbo01 .swiper-container').width(0.6 * sw); //第三屏幕弹出轮播的内容宽度相当于屏幕的60%
		$('.phone .lunbo01 .swiper-container').width(0.8 * sw); //第三屏幕 手机设备下  弹出轮播的内容宽度相当于屏幕的80%
		$('.photo-lunbo .swiper-container04').width(0.6 * sw); //第六屏幕弹出轮播的内容宽度相当于屏幕的60%
		$('.phone .photo-lunbo .swiper-container04').width(0.8 * sw); //第六屏幕  手机设备下  弹出轮播的内容宽度相当于屏幕的60%
		$('.lunbo02 .swiper-container02').width(0.6 * sw); //第五屏幕弹出轮播的内容宽度相当于屏幕的60%
		$('.phone .lunbo02 .swiper-container02').width(0.8 * sw); //第五屏幕  手机设备下  弹出轮播的内容宽度相当于屏幕的60%
		$('.lunbo03 .swiper-container03').width(0.5 * sw); //最后一屏幕弹出轮播的内容宽度相当于屏幕的60%
		$('.phone  .lunbo03 .swiper-container03').width(0.8 * sw); //最后一屏幕弹出轮播的内容宽度相当于屏幕的60%
		if (sw >= 1024) {
			$('body').css('font-size', '1em')
		} else {
			$('body').css('font-size', '0.75em')
		}
		if (tv02w >= 853) {
			$(".tv-big-in").css("height", "480px");
		} else {
			var h = 480 * tv02w / 853;
			$(".tv-big-in").css("height", h + "px");
		}
		if (shipin01 >= 853) {
			$(".shipin-01").css("height", "480px");
		} else {
			var h = 480 * shipin01 / 853;
			$(".shipin-01").css("height", h + "px");
		}
		if (shipin02 >= 853) {
			$(".shipin-02").css("height", "480px");
		} else {
			var h = 480 * shipin02 / 853;
			$(".shipin-02").css("height", h + "px");
		}
		if (shipin03 >= 853) {
			$(".shipin-03").css("height", "480px");
		} else {
			var h = 480 * shipin03 / 853;
			$(".shipin-03").css("height", h + "px");
		}
		if (tv03w >= 853) {
			$(".tv-big-intv03").css("height", "480px");
		} else {
			var h = 480 * tv03w / 853;
			$(".tv-big-intv03").css("height", h + "px");
		}
	}
	
	autoScrolling();
	
	
	$(".section").not(":last-child").find(".arrow").click(function() {
		$.fn.fullpage.moveSectionDown(); //点击向下的三角，屏幕滑到下一张页面
	});
	//鼠标滚轮开启或关闭
	function mouseEvent(flag) {
		if (flag) {
			$('body').unbind('mousewheel'); //恢复滚轮滑动
		} else {
			$('body').bind('mousewheel',
			function() {
				return false;
			}) //禁止滚轮
		}
	}

	//第二屏（对焦速度）弹窗大图效果
	$('.su-hao .s-h-btn').click(function(e) {

		//$('.s-big').show();
		//$('.black').show();
		Sony.showImage('.s-big');
		mouseEvent(false); //关闭滚轮
	});
	
	$('.s-big .close').click(function(e) {
		$('.s-big').hide();
		$('.black').hide();
		mouseEvent(true); //开启滚轮
	});
	//第三屏（抓拍成功率）弹窗及轮播效果
	$('.cheng-hao .cheng-h-btn').click(function(e) {
		Sony.showLunBo('.lunbo01');
		//$('.lunbo01').show();
		//$('.black').show();//大黑底
		mouseEvent(false); //关闭滚轮
	});
	$('.lunbo01 .close').click(function(e) {
		$('.lunbo01').hide();
		$('.black').hide(); //大黑底
		mouseEvent(true); //开启滚轮
	});

	//第四屏（抗干扰能力）弹窗及轮播效果
	$('.gan-hao .gan-h-btn').click(function(e) {
		//$('.gan-big').show();
		//$('.black').show();
		Sony.showImage('.gan-big');
		mouseEvent(false); //关闭滚轮
	});
	$('.gan-big .close').click(function(e) {
		$('.gan-big').hide();
		$('.black').hide();
		mouseEvent(true); //关闭滚轮
	});

	//第五屏（快速小物体对焦）弹窗及轮播效果
	$('.xiao-hao .xiao-h-btn').click(function(e) {
		//$('.black').show();//大黑底
		//$('.lunbo02').show();
		Sony.showLunBo('.lunbo02');
		mouseEvent(false); //关闭滚轮
	});
	$('.lunbo02 .close').click(function(e) {
		$('.lunbo02').hide();
		$('.black').hide(); //大黑底
		mouseEvent(true); //关闭滚轮
	});
	//第六屏（样照欣赏）弹窗及轮播效果
	$('.photo li').click(function(e) {
		//$('.black').show();//大黑底
		//$('.photo-big').show();
		Sony.showLunBo('.photo-lunbo');
		var index = $(this).index();
		mySwiper04.swipeTo(index);
		mouseEvent(false); //关闭滚轮
	});
	$('.photo-lunbo .close').click(function(e) {
		$('.photo-lunbo').hide();
		$('.black').hide(); //大黑底
		mouseEvent(true); //关闭滚轮
	});

	//第七屏幕视频弹出播放效果
	//第一个视频
	$('.shipin li').eq(0).click(function(e) {
		$('.black').show(); //大黑底
		$('.shipin-01').show();
		video4 = videojs("video-4", {
			"autoplay": false,
			"controls": true,
			"preload": "none",
			"width": "100%",
			"height": "100%"
		});
		video4.src({
			type: "video/mp4",
			src: "video/bianse.mp4"
		});
		video4.play();
		mouseEvent(false);
	});
	$('.shipin-01 .close').click(function(e) {
		$('.shipin-01').hide();
		$('.black').hide(); //大黑底
		videojs('video-4').pause();
		mouseEvent(true);
	});
	//第二个视频
	$('.shipin li').eq(1).click(function(e) {
		$('.black').show(); //大黑底
		$('.shipin-02').show();
		video5 = videojs("video-5", {
			"autoplay": false,
			"controls": true,
			"preload": "none",
			"width": "100%",
			"height": "100%"
		});
		video5.src({
			type: "video/mp4",
			src: "video/gou.mp4"
		});
		video5.play();
		mouseEvent(false);
	});
	$('.shipin-02 .close').click(function(e) {
		$('.shipin-02').hide();
		$('.black').hide(); //大黑底
		videojs('video-5').pause();
		mouseEvent(true);
	});
	//第三个视频
	$('.shipin li').eq(2).click(function(e) {
		$('.black').show(); //大黑底
		$('.shipin-03').show();
		video6 = videojs("video-6", {
			"autoplay": false,
			"controls": true,
			"preload": "none",
			"width": "100%",
			"height": "100%"
		});
		video6.src({
			type: "video/mp4",
			src: "video/hunli.mp4"
		});
		video6.play();
		mouseEvent(false);
	});
	$('.shipin-03 .close').click(function(e) {
		$('.shipin-03').hide();
		$('.black').hide(); //大黑底
		videojs('video-6').pause();
		mouseEvent(true);
	});

	//TV02弹层
	$('.LL-tv02').click(function(e) {
		$('.black').show();
		$('.tv-big-in').show();
		//video.js必加
		video2 = videojs("video-2", {
			"autoplay": false,
			"controls": true,
			"preload": "none",
			"width": "100%",
			"height": "100%"
		});
		video2.src({
			type: "video/mp4",
			src: "video/smdog.mp4"
		});
		video2.play();
		mouseEvent(false);
	});
	
	$('.tv-big-in .llclose').click(function() {
		mouseEvent(true);
	});
	
	$('.tv-big-intv03 .llclose').click(function(e) {
		$('.tv-big-intv03').hide();
		$('.black').hide();
		videojs('video-3').pause();
		mouseEvent(true);
	});
	
	$('.tv-big-intv03 > .llclose').click(function(e) {
		$('.black').hide();
		$('.tv-big-intv03').hide();
		videojs('video-3').pause();
		mouseEvent(true);
	});    
	
	$('.tv-big-in > .llclose').click(function(){
			$('.black').hide();
			$('.tv-big-in').hide();
			videojs('video-2').pause();
			mouseEvent(true);
	});
	
	//TV03弹层
	$('.LL-tv03').click(function(e) {
        $('.black').show();
        $('.tv-big-intv03').show();
		video3 = videojs("video-3", { "autoplay":false,"controls":true,"preload": "none", "width":"100%", "height":"100%" });
		video3.src({ type: "video/mp4", src: "video/dance.mp4" });
		video3.play();
		mouseEvent(false);
    });
//Tips按问题数字顺序对应弹层显示
	$('.tips-dw .tip01').click(function(e) {
        //$('.lunbo03').show();
        //$('.black').show();//大黑底
		
		Sony.showLunBo('.lunbo03');
		mySwiper03.swipeTo(0);
		mouseEvent(false);
    });
	$('.tips-dw .tip02').click(function(e) {
        //$('.lunbo03').show();
        //$('.black').show();//大黑底
		
		Sony.showLunBo('.lunbo03');
		mySwiper03.swipeTo(1);
		mouseEvent(false);
    });
	$('.tips-dw .tip03').click(function(e) {
        //('.lunbo03').show();
        //$('.black').show();//大黑底
		Sony.showLunBo('.lunbo03');
		mySwiper03.swipeTo(2);
		mouseEvent(false);
    });
	$('.tips-dw .tip04').click(function(e) {
        //$('.lunbo03').show();
        //$('.black').show();//大黑底
		Sony.showLunBo('.lunbo03');
		mySwiper03.swipeTo(3);
		mouseEvent(false);
    });
	$('.tips-dw .tip05').click(function(e) {
        //$('.lunbo03').show();
        //$('.black').show();//大黑底
		Sony.showLunBo('.lunbo03');
		mySwiper03.swipeTo(4);
		mouseEvent(false);
    });
	$('.lunbo03 .close').click(function(e) {
        $('.lunbo03').hide();
        $('.black').hide();//大黑底
		mouseEvent(true);
    });
	
	
	//屏幕三的弹窗手指滑动轮播的jq
	  var mySwiper = new Swiper('.swiper-container',{
		pagination: '.pagination',
		loop:true,
		grabCursor: true,
		paginationClickable: true
	  });
	  $('.arrow-left').on('click', function(e){
		e.preventDefault();
		mySwiper.swipePrev();
	  });
	  $('.arrow-right').on('click', function(e){
		e.preventDefault();
		mySwiper.swipeNext();
	  });
	  //屏幕五的弹窗手指滑动轮播的jq
	  var mySwiper02 = new Swiper('.swiper-container02',{
		pagination: '.pagination02',
		loop:true,
		grabCursor: true,
		paginationClickable: true
	  });
	  $('.arrow-left02').on('click', function(e){
		e.preventDefault();
		mySwiper02.swipePrev();
	  });
	  $('.arrow-right02').on('click', function(e){
		e.preventDefault()
		mySwiper02.swipeNext()
	  });
	  //屏幕6的弹窗手指滑动轮播的jq
	  var mySwiper04 = new Swiper('.swiper-container04',{
		pagination: '.pagination04',
		loop:true,
		grabCursor: true,
		paginationClickable: true
	  });
	  $('.arrow-left04').on('click', function(e){
		e.preventDefault();
		mySwiper04.swipePrev();
	  });
	  $('.arrow-right04').on('click', function(e){
		e.preventDefault();
		mySwiper04.swipeNext();
	  });

	  //屏幕8的弹窗手指滑动轮播的jq
	  var mySwiper03 = new Swiper('.swiper-container03',{
		pagination: '.pagination03',
		loop:true,
		grabCursor: true,
		paginationClickable: true
	  });
	  
	  $('.arrow-left03').on('click', function(e){
		e.preventDefault();
		mySwiper03.swipePrev();
	  });
	  
	  $('.arrow-right03,.lunbo03-next').on('click', function(e){
		e.preventDefault();
		mySwiper03.swipeNext();
	  });
	
	

	if (!isMobile.any()) 
	{
		$(window).bind('scroll',
		function() {

			if ($(window).scrollTop() > 4975) 
			{
				if ($(window).scrollTop() > $(".LLpage3").offset().top) {

					$("#tips-02").fadeIn();
					$("#tips-01").fadeOut();
				} else {
					$("#tips-02").fadeOut();
					$("#tips-01").fadeIn();
				}
			}

		});
	}
	var l = document.location.href.split("/");
	l.splice( - 1, 1);
	var l_1 = l.join("/");
	$(".section5 .bg")[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='" + l_1 + "/images/page05_bg.png')";
	for (var i = 1; i <= 7; i++) {
		$(".section" + i + " .bg")[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='" + l_1 + "/images/page0" + i + "_bg.png')";
	}
});