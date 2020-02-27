var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector("#volume")
	console.log(volume);
	volume.innerHTML = (video.volume * 100) + "%";
	var button = document.querySelector(".play");
	var photo = '<img src="images/playbutton.png" height=25 alt="play" />';
	button.innerHTML = photo + "Play Video";
	// https://stackoverflow.com/questions/36859062/how-to-set-image-via-innerhtml
	// https://stackoverflow.com/questions/5451445/how-to-display-image-with-javascript

}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
	var button = document.querySelector(".pause");
	var photo = '<img src="images/pausebutton.jpg" height=25 alt="pause" />';
	button.innerHTML = photo + "Pause Video";
}

function decreaseSpeed() {
		video.playbackRate *= .8
  	console.log("Speed is "+ video.playbackRate);
}
//
function increaseSpeed() {
	video.playbackRate *= 1.25
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60
	console.log("Current location is "+ video.currentTime);
	if (video.ended){
		video.currentTime = 0;
		video.play();
		video.playbackRate=1
		console.log("Current location is "+ video.currentTime);
	}
}

function mute() {
	if (video.muted){
			video.muted=false;
  		console.log("Changing to Unmuted");
			var button = document.querySelector("#mute");
			button.innerHTML="Unmuted"
			}
	else{
			video.muted = true;
      console.log("Changing to Muted");
			var button = document.querySelector("#mute");
			button.innerHTML="Muted"
			}

}
//
function changeVolume() {
		let slider = document.querySelector("#volumeSlider")
		console.log(slider.value)
		video.volume = slider.value/100;
		console.log("Volume is " + video.volume);
		volume.innerHTML = (video.volume * 100) + "%";

}
//
//
function gray() {
	video.classList.add("grayscale")
	console.log("In grayscale")
}
//
function color() {
	video.classList.remove("grayscale")
	console.log("In color")
}
