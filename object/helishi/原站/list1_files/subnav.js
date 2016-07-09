// JavaScript Document
$(".SubNavDiv").hover(function(){if($(this).find(".SubNav li").size()==0){$(this).find(".SubNav").hide();}else{$(this).find(".SubNav").show();}},function(){$(this).find(".SubNav").hide();});


 {
	var lis = document.getElementById("NavTable").getElementsByTagName("td");
	for(var i=0; i<lis.length; i++){
		lis[i].onmouseover=function(){
			this.className+=(this.className.length>0?" ":"") + "show";
		}
		lis[i].onmouseout=function(){
			this.className=this.className.replace(new RegExp("( ?|^)show\\b"), "");
		}
	}
}
