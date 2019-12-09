$(document).ready(function(){
	var newsall = $(".newscarusel").find("div");
	var newsimg = $(".newsimgpreview");
	var newsimgepreview = $(".newsimg:eq(0)");
	newsimg.css("background","url("+newsimgepreview.text()+")no-repeat 0 0 / 100% 100%");
	var i = 1;
	newsall.eq(0).css("background","#f7f7f7");
	setInterval (function(){
	if(i == 0){
	newsall.eq(-1).css("background","#ffffff");
	}
	if(i > 0){
	var one = i - 1;
	}
	var newsimge = $(".newsimg:eq("+ i +")");
	newsall.eq(one).css("background","#ffffff");
	newsall.eq(i).css("background","#f7f7f7");
	newsimg.css("background","url("+newsimge.text()+")no-repeat 0 0 / 100% 100%");
	i++
	if(i == 3){
		i = 0;
	}
	}, 2000);
});