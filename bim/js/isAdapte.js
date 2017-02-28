function isAdater(){
	var Agents = ["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];
	var userAgentInfo = navigator.userAgent;
	var flag = false;
	for (var i = 0; i < Agents.length; i++) {
		if (userAgentInfo.indexOf(Agents[i]) > 0) {
			flag = true;
			break;
		}
	}
	return flag;
}