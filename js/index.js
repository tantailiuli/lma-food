//主体轮播图
function dg(){
		return document.getElementById(arguments[0]) || document.getElementsByTagName(arguments[0])
	}
var mainbanner_box = dg('mainbanner_box'),
	mainbanner = dg('mainbanner'),
	SlideBox = dg('bannerul'),
	bannerli = SlideBox.getElementsByTagName('a'),
	Len = bannerli.length,
	Prev = dg('prev'),
	Next = dg('next'),
	wd = bannerli[0].clientWidth+20;
function slide(cb){
	SlideBox.style.transition = "all 1s";
	SlideBox.style.marginLeft = -wd + "px";
	setTimeout(function(){
		SlideBox.style.transition = "";
		var dom1 = bannerli[0];
		dom1.remove();
		SlideBox.appendChild(dom1);
		SlideBox.style.marginLeft = 0;
		var bg = bannerli[0]; 
		mainbanner_box.style.backgroundImage = "url(" + bg.getElementsByTagName("img")[0].src + ")";
		if(cb){cb();}
	},1000);
	
}
function rig(){
	Next.onclick = function slideLeft(){
		Next.onclick = function(){};
		slide(rig);
	};
}
rig();
	Prev.onclick = function slideRight(){
		Prev.onclick = function(){};
		var dom1 = bannerli[0];
		var dom2 = bannerli[Len-1];
			dom2.remove();
			SlideBox.insertBefore(dom2,dom1);
		SlideBox.style.marginLeft = -wd + "px";
		setTimeout(function(){
			SlideBox.style.transition = "all 1s";
			SlideBox.style.marginLeft = 0;
			setTimeout(function(){
				SlideBox.style.transition = "";
				var bg = bannerli[0]; 
				mainbanner_box.style.backgroundImage = "url(" + bg.getElementsByTagName("img")[0].src + ")";
				Prev.onclick = slideRight;
			},1000);
		}, 0)
	};
	var timer = setInterval(slide,3000);
	mainbanner.onmouseover = function(){
		clearInterval(timer);
	}
	mainbanner.onmouseout = function(){
		clearInterval(timer);
		timer = setInterval(slide,3000);
	}