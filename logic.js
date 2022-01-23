let contactNav = document.getElementById('conatctHeadIcon');
contactNav.addEventListener('click', ()=>{
    let upperHead = document.getElementById('upperHeader');
    upperHead.classList.toggle('active');
});
let headIcon2 = document.getElementById('headIcon2');
headIcon2.addEventListener('click', ()=>{
    let lowerHeader = document.getElementById('lowerHeader');
    lowerHeader.classList.toggle('active');
})

function ScrollTop(){
    let scrollTop = document.getElementById('scrollTop');
    window.addEventListener('scroll', ()=>{
        let scroll = document.documentElement.scrollTop;
        scrollTop.classList.toggle('active', scroll >= 200)
    })
}
ScrollTop()

function toTop(){
 document.documentElement.scrollTop = 0;
}