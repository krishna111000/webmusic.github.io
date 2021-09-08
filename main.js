var songs=["audio/linkin.mp3","audio/pekey.mp3","audio/song.mp3","audio/song1.mp3", "audio/song3.mp3"];
var poster =["ios/linkin.png","ios/pekey.png","ios/okka.jpg","ios/s.jpg","ios/c.jpg"];

var songtitle= document.getElementById('songtitle');
var fillbar = document.getElementById('fill');


var song = new Audio();
var currentSong=0;

window.onload=playSong();

function playSong(){
  song.src =songs[currentSong];
  songtitle.textContent= songs[currentSong];
  song.play();
}

function playorpausesong(){
  if(song.paused){
    song.play();
    document.getElementById('con').src="img/pause.png";
  }
  else{
    song.pause();
    document.getElementById('con').src="img/stop.png";
  }
}

function next(){
  currentSong++;
  if(currentSong>4){
    currentSong=0;
  }
  document.getElementById('poster').src=poster[currentSong];
  playSong();
}


function pre(){
  currentSong--;
  if(currentSong<0){
    currentSong=2;
  }
  document.getElementById('poster').src=poster[currentSong];
  playSong();
}

song.addEventListener('timeupdate',function(){
  var position= song.currentTime/song.duration;
  fill.style.width=position*100+'%';
});
