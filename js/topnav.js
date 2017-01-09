var search = document.getElementById('search'),
	searchinput = document.getElementById('searchinput'),
	searchsubmit = document.getElementById('searchsubmit'),
	searchul = document.getElementById('searchul'),
	searchli = searchul.getElementsByTagName('li'),
	schLen = searchli.length
	freq = 0;
searchinput.onfocus = function(){
	this.value = "";
	searchul.style.display = "block";
}
searchinput.ondblclick = function(){
	freq^=1;
	searchul.style.display = freq ? "none":"block";
}
search.onblur=function(){
	searchul.style.display = "none";
}
for(var i = 0;i < schLen;i++){
	searchli[i].onclick = function(){
		searchinput.value = this.innerText.slice(1,5);
		searchul.style.display = "none";
	}
}
searchsubmit.onclick = function(){
	if(searchinput.value=="主食食系列"){
		this.href = "mainfood.html";
	}else if(searchinput.value=="甜饮系列"){
		this.href = "drink.html";
	}else if(searchinput.value=="水果系列"){
		this.href = "fruit.html";
	}else{
		this.href = "chief.html";
	}
}
