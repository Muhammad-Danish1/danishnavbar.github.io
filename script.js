// *******************sleact toggle btn and links***********
const navToggle = document.querySelector(".open-menu");
const links = document.querySelector('.links');


navToggle.addEventListener('click', (e)=>{
    // if(links.classList.contains('show')){
    //     links.classList.remove('show')
    // }else {
    //     links.classList.add('show')
    // }

    // ***********toggle btn show and hide************
    links.classList.toggle('show');
    navToggle.classList.toggle('rotate')
})