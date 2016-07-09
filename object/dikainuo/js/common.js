// JavaScript Document

$(document).ready(function(e) {
    	/*nav菜单效果*/
	$('.h_nav>li').hover(function(e) {
        	$(this).children('.nav_item_box').stop().slideDown(300)
    },function(){
        	$(this).children('.nav_item_box').stop().slideUp(300)
	});
	
    	/*nav里面的小图标鼠标放上效果*/
	
	$('.nav_brand01').hover(function(e) {
        	$(this).children('img').attr({src:'images/navBrandIco1_on.png'})
    },function(){
        	$(this).children('img').attr({src:'images/navBrandIco1.png'})
	});
	
	$('.nav_brand02').hover(function(e) {
        	$(this).children('img').attr({src:'images/navBrandIco2_on.png'})
    },function(){
        	$(this).children('img').attr({src:'images/navBrandIco2.png'})
	});
	
	$('.nav_brand03').hover(function(e) {
        	$(this).children('img').attr({src:'images/navBrandIco3_on.png'})
    },function(){
        	$(this).children('img').attr({src:'images/navBrandIco3.png'})
	});
	
	
	$('.nav_join01').hover(function(e) {
        	$(this).children('img').attr({src:'images/navJoin1_on.png'})
    },function(){
        	$(this).children('img').attr({src:'images/navJoinIco1.png'})
	});
	$('.nav_join02').hover(function(e) {
        	$(this).children('img').attr({src:'images/navJoin2_on.png'})
    },function(){
        	$(this).children('img').attr({src:'images/navJoinIco2.png'})
	});
	$('.nav_join03').hover(function(e) {
        	$(this).children('img').attr({src:'images/navJoin3_on.png'})
    },function(){
        	$(this).children('img').attr({src:'images/navJoinIco3.png'})
	});
	
		$('.nav_ser01').hover(function(e) {
        	$(this).children('img').attr({src:'images/navService1_on.png'})
    },function(){
        	$(this).children('img').attr({src:'images/navServiceIco1.png'})
	});
		$('.nav_ser02').hover(function(e) {
        	$(this).children('img').attr({src:'images/navService2_on.png'})
    },function(){
        	$(this).children('img').attr({src:'images/navServiceIco2.png'})
	});
		$('.nav_ser03').hover(function(e) {
        	$(this).children('img').attr({src:'images/navService3_on.png'})
    },function(){
        	$(this).children('img').attr({src:'images/navServiceIco3.png'})
	});
		$('.nav_ser04').hover(function(e) {
        	$(this).children('img').attr({src:'images/navService4_on.png'})
    },function(){
        	$(this).children('img').attr({src:'images/navServiceIco4.png'})
	});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});