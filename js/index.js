$(document).ready(function() {

	// 导航滑动
	
	/*var workT=0;*/
	 var aboutTop=$("#about").offset().top-80;
	 var skillTop=$("#skill").offset().top-100;
	 var workTop=$("#work").offset().top-100;
	 var resumeTop=$("#resume").offset().top-100;
	 var selfTop=$("#self").offset().top-100;

			 $("#nav ul li a").eq(0).click(function(event) {
		 	$("html,body").stop().animate({scrollTop: aboutTop},700)
		 	
		 });

		 $("#nav ul li a").eq(1).click(function(event) {
		 	$("html,body").stop().animate({scrollTop: skillTop},700)
		 	
		 });

		 $("#nav ul li a").eq(2).click(function(event) {
		 	$("html,body").stop().animate({scrollTop: workTop},700)
		 	
		 });

		 $("#nav ul li a").eq(3).click(function(event) {
		 	$("html,body").stop().animate({scrollTop: resumeTop},700)
		 	
		 });

		 $("#nav ul li a").eq(4).click(function(event) {
		 	$("html,body").stop().animate({scrollTop: selfTop},700)
		 	
		 });

	$(window).scroll(function(event){
		 var numTop=$(window).scrollTop();

		 // about特效
		 if(numTop>=aboutTop){
		 	$(".skill_mid1").addClass('skill_mid1_r');
		 	$(".skill_bor").addClass('skill_borp');
		 }else{
		 	$(".skill_mid1").removeClass('skill_mid1_r');
		 	$(".skill_bor").removeClass('skill_borp');
		 }

		 // 技能特效
		 if(numTop>=skillTop+280){
		 	$(".skill_mid1").addClass('skill_mid1_rF');
		 	$(".skill_bor").addClass('skill_borpF');			
		 }else{
		 	$(".skill_mid1").removeClass('skill_mid1_rF');
		 	$(".skill_bor").removeClass('skill_borpF');
		 }

		 // 作品特效
		 if(numTop>=skillTop+100){
		 	$(".work_con1").addClass('work_con1x');
		 }else{
		 	$(".work_con1").removeClass('work_con1x');
		 }

		 if(numTop>=resumeTop){
				$(".work_con1").addClass('work_con1s');
		
			 }else{
				$(".work_con1").removeClass('work_con1s');
			 }

		 workT=workTop;

		 // 自我评价
		  if(numTop>=selfTop){
		  	$(".self_con").addClass('self_conh');
		  }else{
		  	$(".self_con").removeClass('self_conh')
		  }
	});

	
	$(".resume_ul li").mouseover(function() {
		var widths=$(this).index()+1;
		if(widths==1){
			$(".yuandian").stop().animate({left:249},200)
		}else if(widths==2){
			$(".yuandian").stop().animate({left:413},200)
		}else if(widths==3){
			$(".yuandian").stop().animate({left:574},200)
		}else{
			$(".yuandian").stop().animate({left:738},200)
		}

		$(".resume_xqcon").eq($(this).index()).show().siblings().hide();
	});

	//浏览作品
	$(".work_img a").click(function(event) {
		var lujing=$(this).children('img').attr("src"); 
		
		$(".work_imgshow").stop().fadeIn(500);
		
		$(".work_imgshow img").attr("src",lujing);
		$("html,body").stop().animate({scrollTop: 1500}, 0);
	});
	$(".work_imgshow").click(function(event){
		$(this).stop().fadeOut(500);
	})
	


	$(window).scroll(function(e){
		var bTop=$(document).scrollTop();
		if (bTop>=1000) {
			$("#goback").fadeIn();
		}else{
			$("#goback").fadeOut();
		}
	});
	$("#goback").click(function(event) {
		$("html,body").stop().animate({scrollTop: 0}, 500)
	});
});