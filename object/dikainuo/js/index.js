// JavaScript Document

$(document).ready(function(e) {
    	/*首页banner效果*/
		$('.circle li').mouseover(function(e) {
				var index=$(this).index();
				$(this).addClass('current').siblings().removeClass('current');
            	$('.banner ul li').eq(index).fadeIn().siblings().hide()
			     num=index;
        });
			/*定时器效果*/
				var num=0;
				var time=null;
				time=setInterval(slid,4000);
				function slid(){
						num++;
						if(num>4){num=0}
						$('.banner ul li').eq(num).fadeIn().siblings().hide()
						$('.circle li').eq(num).addClass('current').siblings().removeClass('current');
				}
				$('.banner_wrap').mouseover(function(e) {
					clearInterval(time)
				}).mouseout(function(e) {
					clearInterval(time)
					time=setInterval(slid,4000)
				});
	
    	/*首页channel部分效果*/
		$('.channel li').hover(function(e) {
            	$(this).fadeTo(100,0.9)
        },function(){
            	$(this).fadeTo(100,1)
		});
		
		
		
		
	
    	/*首页index索引部分效果*/
		
		$('.index_new_T>li').click(function(e) {
            	$(this).addClass('current').siblings().removeClass('current');
				var nub=$(this).index();
				$('.index_new_B>li').eq(nub).show().siblings().hide()
        });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});