var slider = [];
var slidecont = [];
async function define() {
	for (var i = 0; i < 2; i++) {
		slidecont[i] = document.getElementById("slidecontainer"+i);
		slider.push(slidecont[i]);
		console.log(slider);
	}
} 

define();

function mousedown(num) {
	timer = setInterval(function(i){
		console.log(slider[num])
		snd[num].volume = (slider[num].value) / 100;
	}, 50);
}

function mouseup(num) {
	clearInterval(timer);
	console.log("Mouse is Up, slider.value is "+slider[num].value);
}

var timer = null;
var snd = [(new Audio("rain.mp3")), (new Audio("conv.mp3"))]
snd[0].volume = 0.25;

var playsound = [1, 1];

function PlaySound(num) {
	//Playing the audio properties
	if (playsound[num] == 1) {
		playsound[num] = 0;
		console.log("snd["+num+"].volume = "+snd[0].volume);
	    console.log(playsound)
		console.log("playing");
	    // var snd = new Audio("https://docs.google.com/uc?export=download&id=1sFfe5_KsxriF82XveCyhdo3ewa1CFVKH");
	    snd[num].play();

		//Listener that repeats the audio when finished
		snd[0].addEventListener('ended', function() {
			console.log("repeat sound");
		    this.currentTime = 0;
		    this.play();
		}, false);

	} else {
		console.log("already playing");
	}

}

function period(num) {
	  let duration = snd[num].duration;
	  console.log("Audio lasts for: "+duration+" seconds")
	  let currenttimeaud = snd[num].currentTime;
	  console.log("Current Time in Audio: "+currenttimeaud+" seconds");

}

function pause(num) {
	if (playsound[num] == 0) {
		playsound[num] = 1;
		snd[num].pause();
	    console.log(playsound)
		console.log("audio is paused.")
	} else {
		console.log("audio is already paused.")
	}
}

