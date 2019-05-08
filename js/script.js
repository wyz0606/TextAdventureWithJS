window.onload = function(){

	var yesBtn = document.getElementById("yes");
	var noBtn = document.getElementById("no");
	var ending = document.getElementById("ending");
	var texts = document.getElementsByClassName('text');
	var covers = document.getElementsByClassName('anim');
	var button = document.getElementsByClassName('btn');

	yesBtn.onclick = function(){
		ending.innerHTML = ("Yes<br>It's suddenly raining when I was going home! I'm glad to bring my umbrella!")
		hide(texts);
		hide(covers);
		hide(button);
	}

	noBtn.onclick = function(){
		ending.innerHTML = ("No<br>I should have brought my umbrella. It's raining outside. I want to go home:(");
		hide(texts);
		hide(covers);
		hide(button);
	}


	

	function hide(element){
		for (var i = 0; i < element.length; i++){
			element[i].style.display = "none";
		}
	}


}







