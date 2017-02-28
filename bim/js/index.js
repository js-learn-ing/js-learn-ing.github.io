var desc = document.getElementById("index_desc");
var str1 = desc.innerHTML;
window.onload = function(){

}
window.onresize = function(){
	descFn()
}

function descFn(){
	str = desc.innerHTML;
	if (str.length >= 141 && window.innerWidth <= 850) {
		desc.innerHTML = str.substring(0,131) + "<a href='#'>&nbsp;显示全部</a>";
	}
	if(window.innerWidth > 850){
		desc.innerHTML = str1;
	}
}