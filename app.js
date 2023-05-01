const controlBtn = document.querySelector('.controlBtn');
const switchBtn = document.querySelector('.switchBtn');
const video = document.querySelector('.video');
const preloader = document.querySelector('.preloader')


controlBtn.addEventListener('click', () => {
    if(!switchBtn.classList.contains("btnPosition")){
        switchBtn.classList.add('btnPosition');
        video.pause();
    } else {
        switchBtn.classList.remove('btnPosition');
        video.play();
    }
})

window.addEventListener('load', () => {
    preloader.style.display = 'none';
})