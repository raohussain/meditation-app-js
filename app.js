const app = () => {
	const song = document.querySelector('.song');
	const play = document.querySelector('.play');
	const outline = document.querySelector('.moving-outline circle');
	const video = document.querySelector('.vid-container video');

	//sounds
	const sounds = document.querySelectorAll('.sound-picker button');
	//Time display
	const timeDisplay = document.querySelector('.time-display');
	const timeSelect = document.querySelectorAll('.time-select button');
	//get the lenght of the outline circle
	const outlineLenght = outline.getTotalLength();
	//duration
	let fakeDuration = 600; //default

	outline.style.strokeDasharray = outlineLenght;
	outline.style.strokeDashoffset = outlineLenght;

	//play differetn sound and video
	sounds.forEach(sound =>{
		sound.addEventListener('click',function(){
			song.src = this.getAttribute('data-sound');
			video.src = this.getAttribute('data-video');
			checkPlaying(song);
		});
	});
	//play sound
	play.addEventListener("click", () => {
		checkPlaying(song);
	});
	//select time of the song
	timeSelect.forEach(button => {
		button.addEventListener("click",function(){
			fakeDuration =this.getAttribute("data-time");
			timeDisplay.textContent =`${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
		});
	});
	//create function to play and the stop the sound
	const checkPlaying = (song) =>{
		if(song.paused){
			song.play();
			video.play();
			play.src ='./svg/pause.svg';
		}else{
			song.pause();
			video.pause();
			play.src ='./svg/play.svg';
		}
	}
	song.ontimeupdate = () => {
		//animate the circle
		let currentTime = song.currentTime;
		let elapsedTime = fakeDuration - currentTime;
		let seconds = Math.floor(elapsedTime % 60);
		let minutes = Math.floor(elapsedTime / 60);

		let progress = outlineLenght - (currentTime / fakeDuration) * outlineLenght;
		outline.style.strokeDashoffset = progress;
		//update time
		timeDisplay.textContent = `${minutes}:${seconds}`;

		if(currentTime >= fakeDuration){
			song.pause();
			video.pause();
			song.currentTime =0;
			play.src ='./svg/play.svg';
		}
	};
};
app();