console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementsByClassName('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));







let songs = [
    {songName: "Raatan Lambiyaan", filePath: "song/1.mp3",coverPath: "covers/1.jpeg"},
    {songName: "Meri Jaan", filePath: "song/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Chaand Baaliyan", filePath: "song/3.mp3",coverPath: "covers/3.1.jpeg"},
    {songName: "Ek Tu Hi Toh Hai", filePath: "song/4.mp3",coverPath: "covers/4.jpeg"},
    {songName: "Rait Zara Si", filePath: "song/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "Friends", filePath: "song/6.mp3",coverPath: "covers/1.1.jpg"},
    {songName: "Call Out My Name", filePath: "song/7.mp3",coverPath: "covers/2.1.jpg"},
    {songName: "Sia - Unstoppable", filePath: "song/8.mp3",coverPath: "covers/3.11.jpg"},
    {songName: "Believers", filePath: "song/9.mp3",coverPath: "covers/4.1.jpg"},
    {songName: "On My Way", filePath: "song/10.mp3",coverPath: "covers/5.1.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//audioElement.play();


//handle play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})
//listen//
audioElement.addEventListener('timeupdate',()=>{
//update
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
    gif.style.opacity=1;
    })
    }
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
    })
    
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
    songIndex = 0
    }
    else{
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
    })
    
    document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
    songIndex = 0
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })  
