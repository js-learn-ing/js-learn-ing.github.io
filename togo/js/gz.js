

window.onload = function()
{
	var content = document.getElementsByClassName("content")[0];
	var aBtn = content.getElementsByTagName("input");
	var selector = document.getElementsByClassName("selector")[0];
	var aInput = selector.getElementsByTagName("input");
	var index = 0;

	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index = i;
		
		aBtn[i].addEventListener("click",function()
		{
			index = this;
			selector.style.display = "block";
				
				aInput[0].onclick = function(){
					
					index.parentNode.parentNode.remove(index.parentNode);
					selector.style.display = "none";

				}

				aInput[1].onclick = function(){
					selector.style.display = "none";
				}
				
			
			
			event.preventDefault();

		})
	}

}

