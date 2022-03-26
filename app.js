// this is the javascript file

function keydownFunction(e) {
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	let key = document.querySelector(`div[data-key="${e.keyCode}"]`);

	if(!audio) return;

	key.classList.add("playing");
	audio.currentTime = 0;
	audio.play();
}

function removeTransFunction(e){
	if(e.propertyName !== "transform") return;
	e.target.classList.remove('playing');
}

let keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransFunction));
window.addEventListener('keydown', keydownFunction);