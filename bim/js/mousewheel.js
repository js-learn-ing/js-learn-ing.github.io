function wheelFn(obj,succFn){
	
	if (window.navigator.userAgent.indexOf("Firefox")>0) {
		obj.addEventListener("DOMMouseScroll",Fn,false);
	}else{
		obj.onmousewheel = Fn;
	}

	function Fn(e) {
		var e = e || window.event;
		var down;
		if (e.detail) {
			down = e.detail>0;
		}else{
			down = e.wheelDelta<0;
		}
		
		succFn.call(obj,down);

		if (e.preventDefault) {
			e.preventDefault();
		};
		return false;
	}
}