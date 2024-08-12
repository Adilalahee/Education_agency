burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav_list = document.querySelector('.nav_list')
r_nav = document.querySelector('.r_nav')


burger.addEventListener('click', ()=>{
    r_nav.classList.toggle('v_class');
    nav_list.classList.toggle('v_class');
    navbar.classList.toggle('h_nav');


}

 )