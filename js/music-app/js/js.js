 const play = document.getElementById("play");
 const music = document.querySelector("audio");
 const img = document.querySelector("img");
 const title = document.getElementById("title") ;
 const artist = document.getElementById("artist");
 const prev = document.getElementById("prev");
 const next = document.getElementById("next");
 const songs = [
{
    name:"muki-1",
    title:"Ram Khani",
    artist:"Ravinder Jain"
},
{
    name:"muki-2",
    title:"Muki  Song",
    artist:"Artist1"
},
{
    name:"muki-3",
    title:"Himanshi  Song",
    artist:"Artist3"
}
 ]

 let isPlay = false;
 //play functiom
 const playMusic= ()=>{
    isPlay = true;
     music.play();
     play.classList.replace("fa-play","fa-pause");
     img.classList.add("anime");
 };
 //pause function
 const pauseMusic= ()=>{
    isPlay = false;
     music.pause();
     play.classList.replace("fa-pause","fa-play");
     img.classList.remove("anime");
 };
 play.addEventListener("click",()=>{
     isPlay ? pauseMusic() : playMusic();
 });

 const loadSong = (songs)=>{
     title.textContent = songs.title;
     artist.textContent = songs.artist;
     music.src= `music/${songs.name}.mp3`;
     img.src=`music-img/${songs.name}.jpg`;


 }
 loadSong(songs[1]);
 let songIndex=0;
 loadSong(songs[songIndex]);
 const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
 }
 const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
 }
 next.addEventListener("click",nextSong);
 prev.addEventListener("click",prevSong);