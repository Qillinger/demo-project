const sky = document.querySelector('.image-parallax-sky');
const moon = document.querySelector('.images-parallax-moon')
const mountains = document.querySelector('.images-parallax-mountains')
const girl = document.querySelector('.images-parallax-girl')
const mountainOne = document.querySelector('.images-parallax-mountain-one')

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    sky.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    moon.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    mountains.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    girl.style.transform = 'translate(-' + x * 35 + 'px, -' + y * 25 + 'px)';
    mountainOne.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 30 + 'px)';
    
});

const arrow = document.querySelector('.come-back')