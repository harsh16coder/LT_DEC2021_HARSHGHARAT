burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-nav');
    navlist.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
})

$(document).ready(function(){
    $('#search').click(function(){
        $('.menu-item').toggleClass('hide-item')
    })
})