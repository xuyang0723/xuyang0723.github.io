// JavaScript Document

$(document).ready(function(e) {
	
	//第二屏（对焦速度）弹窗大图效果
	$('.su-hao .s-h-btn').click(function(e) {
        $('.s-big').show();
        $('.black').show();
    });
	$('.s-big .close').click(function(e) {
        $('.s-big').hide();
        $('.black').hide();
    });
	
	//第三屏（抓拍成功率）弹窗及轮播效果
	$('.cheng-hao .cheng-h-btn').click(function(e) {
        $('.lunbo01').show();
        $('.black').show();//大黑底
    });
	$('.lunbo01 .close').click(function(e) {
        $('.lunbo01').hide();
        $('.black').hide();//大黑底
    });
	
	//第四屏（抗干扰能力）弹窗及轮播效果
	$('.gan-hao .gan-h-btn').click(function(e) {
        $('.gan-big').show();
        $('.black').show();
    });
	$('.gan-big .close').click(function(e) {
        $('.gan-big').hide();
        $('.black').hide();
    });

	//第五屏（快速小物体对焦）弹窗及轮播效果
	$('.xiao-hao .xiao-h-btn').click(function(e) {
        $('.black').show();//大黑底
		$('.lunbo02').show();
    });
	$('.lunbo02 .close').click(function(e) {
        $('.lunbo02').hide();
        $('.black').hide();//大黑底
    });
	//第六屏（样照欣赏）弹窗及轮播效果
	$('.photo li').click(function(e) {
        $('.black').show();//大黑底
		$('.photo-big').show();
		var index=$(this).index();
		$('.photo-big li').eq(index).addClass('cur').siblings().removeClass('cur')
    });
	$('.photo-big li .close').click(function(e) {
        $('.photo-big').hide();
        $('.black').hide();//大黑底
    });
	
	//第七屏幕视频弹出播放效果
	//第一个视频
	$('.shipin li').eq(0).click(function(e) {
		$('.black').show();//大黑底
		$('.shipin-01').show();
		video4.play();
	});
	$('.shipin-01 .close').click(function(e) {
        $('.shipin-01').hide();
        $('.black').hide();//大黑底
		video4.currentTime(0);
		
		
    });
	//第二个视频
	$('.shipin li').eq(1).click(function(e) {
		$('.black').show();//大黑底
		$('.shipin-02').show();
	});
	$('.shipin-02 .close').click(function(e) {
        $('.shipin-02').hide();
        $('.black').hide();//大黑底
    });
	//第三个视频
	$('.shipin li').eq(2).click(function(e) {
		$('.black').show();//大黑底
		$('.shipin-03').show();
	});
	$('.shipin-03 .close').click(function(e) {
        $('.shipin-03').hide();
        $('.black').hide();//大黑底
    });
	
//TV02弹层
	$('.LL-tv02').click(function(e) {
        $('.black').show();
        $('.tv-big-in').show();
    });
	$('.LLclose').click(function(e) {
        $('.black').hide();
        $('.tv-big-in').hide();
    });
//TV03弹层
	$('.LL-tv03').click(function(e) {
        $('.black').show();
        $('.tv-big-intv03').show();
    });
	$('.LLclose').click(function(e) {
        $('.black').hide();
        $('.tv-big-intv03').hide();
    });
//Tips按问题数字顺序对应弹层显示
	$('.tips-dw div').click(function(e) {
        $('.lunbo03').show();
        $('.black').show();//大黑底
    });
	$('.lunbo03 .close').click(function(e) {
        $('.lunbo03').hide();
        $('.black').hide();//大黑底
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	});

