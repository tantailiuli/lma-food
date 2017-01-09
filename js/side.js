var totop = document.getElementById('totop');
onscroll = function(){
	totop.style.display = document.documentElement.scrollTop || document.body.scrollTop?"block":"none";
}
totop.onclick = function(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	var timer = setInterval(function(){
		var	speed = scroll/24;
			speed = Math.ceil(speed);
			scroll -=speed;
			if(scroll==0){clearInterval(timer)}
			scrollTo(0,scroll);
	},10)
}
totop.onmouseover = function(){
	this.innerText = "返回顶部"
}
totop.onmouseout = function(){
	this.innerText = "▲"
}