// JavaScript Document

//TV02弹层
$(document).ready(function(){
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






















})