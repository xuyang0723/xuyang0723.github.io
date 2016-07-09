// JavaScript Document

$(function(){
		/*var wh=$(window).width();
		$(' .f1400x713 img').width(wh);
		var vhei = wh * 713/1400;
		$(' .f1400x713 img').height(vhei);*/
		/*$(window).resize(function(e) {
		   var wh=$(window).width();
           $(' .f1400x713 img').width(wh); 
		  
        });	*/
	
//nav	
	$('.nav_main li').mouseenter(function(e) {
		
        $(this).children().eq(1).slideDown();
    }); 
	$('.nav_main li').mouseleave(function(e) {
        $(this).children().eq(1).stop(true,true).hide();
    }); 
	$('.nav_main').children().eq(4).children().eq(1).removeClass('menu').addClass('menur')
		
	
//产品行业
	fn();
	function fn(){
		$('.r_con .dl').each(function(index, element) {
        	var lgh= $(element).find('dd').length;
		   
			var shuzi=7-lgh;
			var topNum=parseInt(shuzi/2);
			
			$(element).find('dd').each(function(index0, element0) {
                var classNam='dd'+(topNum+index0);
				$(element0).addClass(classNam);
            });
        });
	};
	
	$('.ul02 li').mouseenter(function(e) {
		if($(this).hasClass('center')){
			
		}else{
			$(this).siblings().removeClass('curt01');
			$(this).addClass('curt01');
			var index=$(this).index();
			$('#div01 .r_con').hide().eq(index).show();	
		}
        
    });
	
	$('.r_con .dl dd').mouseenter(function(e) {
        $(this).siblings().removeClass('currt');
		$(this).addClass('currt');
    });
	
	
//搜索..
	$('.search .input').focus(function(){
		var text = $(this).val();
		if(text == '站内搜索'){
			$(this).val("");
		}
	});
	
	$('.search .input').blur(function(){
		var text = $(this).val();
		if(text == ''){
			$(this).val("站内搜索");
		}
	});
});