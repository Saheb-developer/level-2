var song = [
    { image: "img/aam.webp", url: "song/Aam Jahe Munde_320(PagalWorld.com.sb).mp3", songName: "Aam Jahe Munde", duration: "3:27" },
    { image: "img/O-mahi.webp", url: "song/O Mahi O Mahi_320(PagalWorld.com.sb).mp3", songName: "O Mahi O Mahi", duration: "3:53" },
    { image: "img/tu hai kahan.webp", url: "song/_Tu Hai Kahan_320(PagalWorld.com.sb).mp3", songName: "Tu Hai Kahan", duration: "4:23" },
    { image: "img/Anjaan.webp", url: "song/JANI - Anjaan ft. Nabeel Akbar & Talhah Yunus.mp3", songName: "Anjaan ft. Nabeel Akbar & Talhah Yunus", duration: "5:03" },
    { image: "img/SinceTum.webp", url: "song/JANI - Since Tum.mp3", songName: "Jani - Since Tums", duration: "4:23" },
    { image: "img/dekhu.webp", url: "song/Dekha Tenu Pehli Pehli Baar Ve_320(PagalWorld.com.sb).mp3", songName: "Dekha Tenu Pehli Pehli Baar Ve", duration: "4:41" },
]
var songContainer = document.querySelector(".song-container");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");
var audio = new Audio();
var selectedSong = 0;
var flag = 1;
function mainFunction() {
    var clutter = "";
    song.forEach(function (elem, index) {
        clutter += `<div class="all-song" id="${index}">
                    <div>
                        <img src="${elem.image}" alt="song-image">
                        <h2>${elem.songName}</h2>
                        </div>
                    <h4>${elem.duration}</h4>
                    </div>
                    `
                    audio.src = song[selectedSong].url
                    let posterClutter = `<img src="${song[selectedSong].image}" alt="" srcset="">`
                    document.querySelector('#left').innerHTML = posterClutter
    })
    songContainer.innerHTML = clutter;
    
};
mainFunction()
songContainer.addEventListener("click", function (dets) {
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    selectedSong = dets.target.id
    mainFunction()
    audio.play()
})

play.addEventListener('click', function(){
  if(flag == 0){
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    audio.play();
    flag = 1;
    // mainFunction()
  }else{
    play.innerHTML = `<i class="ri-play-fill"></i>`
    audio.pause();
    flag = 0;
    // mainFunction()
  }
})
forward.addEventListener('click', function(){
    if(selectedSong < song.length - 1){
        selectedSong++
        mainFunction()
        audio.play()
        backward.style.opacity ='1'
    }
    else{
        forward.style.opacity = '0.5'
    }
})
backward.addEventListener('click', function(){
    if(selectedSong < song.length && selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
        forward.style.opacity = '1'
    }
    else{
        backward.style.opacity ='0.5'
    }
})

