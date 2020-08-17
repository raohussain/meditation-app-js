const app = () => {
	const slider = document.querySelector(".slider");
	const outputText = document.querySelector('.demo');
	const startNow = document.querySelector('.start');
	const skip = document.querySelector('.skip');
	const app2 = document.querySelector('.test2');
	const app = document.querySelector('.test');
	const song = document.querySelector('.song');
	const timeDisplay = document.querySelector('.time-left');
	let timeDuration = 500;
	let started = false;
	// outputText.innerHTML = slider.value;
	if(slider){
		let temp = (slider.value/100)*10;
		outputText.textContent = `${temp}`;
	}
	
	
	//start playing sound and start session
	if(startNow){
		startNow.addEventListener('click', () => {
			// const song = document.querySelector('.song');
			started = true;
			checkPlaying(song);
			// song.play();
			console.log(started);
		})	
	}
	
	//function to update time 
	song.ontimeupdate = () => {
		//animate the circle
		let currentTime = song.currentTime;
		let elapsedTime = timeDuration - currentTime;
		let seconds = Math.floor(elapsedTime % 60);
		let minutes = Math.floor(elapsedTime / 60);

		// let progress = outlineLenght - (currentTime / fakeDuration) * outlineLenght;
		// outline.style.strokeDashoffset = progress;
		//update time
		timeDisplay.textContent = `${minutes}:${seconds}`;

		if(currentTime >= timeDuration){
			// song.pause();
			song.currentTime =0;
			// play.src ='./svg/play.svg';
		}
	};
	//create function to play and the stop the sound
	const checkPlaying = (song) =>{
		// if(song.paused){
			song.play();
			// video.play();
			// play.src ='./svg/pause.svg';
		// }else{
		// 	song.pause();
			// video.pause();
			// play.src ='./svg/play.svg';
		// }
		// app2.style.zIndex =-"-1";
		// app2.style.zIndex ="1";
		// console.log("done")
	}
	// if(started === false){
	// 	checkPlaying(song);
	// 	console.log("start now");
	// }
	// getting slider value on change
	if(slider){
		slider.oninput = function() {
			let temp = Math.floor((this.value/100)*10);
			// outputText.textContent = this.value;
			outputText.textContent = temp;
			timeDuration = temp;
			// console.log(timeDuration);
		}	
	}
		
};
app();
