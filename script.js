const musicContainer = document.getElementById('music-container');
const title = document.getElementById('title');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');

const songlist = ['Classical', 'Summer', 'Earth', 'Mystery'];

let index = 1;

LoadSongs(songlist[index]);

function LoadSongs(song) {
    title.innerText = song;
    audio.src = `Audio/${song}.mp3`;
    cover.src = `Images/${song}.png`;
}

function playSong(song) {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong(song) {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

playBtn.addEventListener('click', function () {
    let playing = musicContainer.classList.contains('play');
    if (playing) {
        pauseSong(songlist[index]);
    } else {
        playSong(songlist[index]);
    }
})

prevBtn.addEventListener('click', function() {
    let playing = musicContainer.classList.contains('play');
    if (playing) {
        pauseSong(songlist[index]);
    }
    index = index-1;
    if (index < 0) {
        index = songlist.length -1;
    }
    LoadSongs(songlist[index]);
    console.log(index);
})

nextBtn.addEventListener('click', function() {
    let playing = musicContainer.classList.contains('play');
    if (playing) {
        pauseSong(songlist[index]);
    }
    index = index+1;
    if (index > songlist.length -1) {
        index = 0;
    }
    LoadSongs(songlist[index]);
    console.log(index);
})

