// JavaScript Document

$(document).ready(function(e) {
    	/*加盟优势部分效果*/
		
		$('.tab_list_L li').click(function(e) {
            	$(this).addClass('current').siblings().removeClass('current');
				var index=$(this).index();
				$('.tab_list_R li').eq(index).show().siblings().hide();
        });
	
    	/*特别支持部分效果*/
		$('.j_list2_con i').click(function(e) {
            $(this).closest('li').addClass('current').siblings().removeClass('current')
        });
	
			/*在线报名人员*/ 
			
			var num=0;
			var time=null;
			time=setInterval(slid,50);
			function slid(){
				num-=1
				if(num<-1120){ num=0}
				$('.j_list5_con .slid_B_in ul').css('top',num)
			}
			$('.slid_B_in').mouseover(function(){
					clearInterval(time);
			}).mouseout(function(e) {
					clearInterval(time);
					time=setInterval(slid,50);
            });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});