// Audio Masih bermasalah

// Awal Menu Toggle
const toggleButton = document.querySelectorAll('.toggle-button');
const headerMobile = document.querySelector('header').classList

toggleButton.forEach(element =>{
    element.addEventListener('click', () =>{
        for(let i = 0; i < headerMobile.length; i++){
            if(headerMobile[i] == '-right-0'){
                headerMobile.remove('-right-0')
                headerMobile.add('-right-full')
            }else if(headerMobile[i] == '-right-full'){
                headerMobile.remove('-right-full')
                headerMobile.add('-right-0')
            }
        }
    })
})
// Akhir Menu Toggle
// Awal Typedjs
let typingEffect = new Typed('.typed', {
    strings : ['Rosadi', 'Man'],
    loop : true,
    typeSpeed: 100,
    backSpeed: 80,
    startDelay: 80,
    backDelay: 1500
})
// Akhir Typedjs
// Awal Audio custom
let range = document.querySelector('.range')
let music = document.querySelector('.music')
let play_pause = document.querySelector('.play_music')

music.onloadedmetadata = () =>{
    range.max = music.duration
    range.value = music.currentTime
}

function playMusic(){
    if(play_pause.classList.contains('fa-pause')){
        music.pause()
        play_pause.classList.remove('fa-pause')
        play_pause.classList.add('fa-play')
    }else{
        music.play()
        play_pause.classList.add('fa-pause')
        play_pause.classList.remove('fa-play')
    }
}

if(music.play()){
    setInterval(() => {
        range.value = music.currentTime
    }, 500);
}

range.onchange = function(){
    music.play()
    music.currentTime = range.value
    play_pause.classList.add('fa-pause')
    play_pause.classList.remove('fa-play')
}
// Akhir Audio custom
