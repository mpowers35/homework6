var video = document.querySelector("#myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
	console.log("Play Video");
});


document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .90;
	console.log("New Speed is: " + video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.10;
	console.log("New Speed is: " + video.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 5;
	video.loop = true;
	console.log("Current location is: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	video.volume = this.value/100;
	document.getElementById("volume").innerHTML = this.value + "%";
	console.log(video.volume)
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});


