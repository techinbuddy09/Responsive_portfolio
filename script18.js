let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick= () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
}   

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-content', {
    strings: ['Sophomore at Banasthali Vidyapith', 'Enthusiastic Photographer' ,' Beginner Frontend Developer','Student Representative At Wappers','Content-Writer'],
    typeSpeed: 80,
    backspeed:80,
    backDelay:1200,
    loop:true,


  });