const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelectorAll(".slider-container__img");
const container = document.querySelector(".container")
let index=0;

prev.addEventListener('click', ()=>{
    changeImg('prev');
})

next.addEventListener('click', ()=>{
    changeImg('next');
});
container.addEventListener('mouseenter',()=>{
    document.addEventListener('keydown', keyPress);
})

container.addEventListener('mouseleave', ()=>{
    document.removeEventListener('keydown', keyPress);
})
 function keyPress(e){
    if(e.key === "ArrowLeft"){
        changeImg('prev');
    } else if (e.key === "ArrowRight"){
        changeImg('next')
    }
 }

function changeImg(direction){
    if(direction === 'next'){
        index++;
        if(index == images.length){
            index = 0;
        }
    } else {
        if(index === 0){
            index = images.length - 1;
        } else {
            index--;
        }
    }
    for(let i=0; i<images.length; i++){
        images[i].classList.remove('main')
    }
    images[index].classList.add('main')
}
const img = document.querySelectorAll(".slider-image")
const fullview = document.querySelector(".fullScreen")
const exit = document.querySelector("#button-exit");

img.forEach(el=>{
    el.addEventListener("click", fullImage);
})
exit.addEventListener('click', ()=>{
    fullview.classList.remove('show')
})
function fullImage(){
    fullview.firstElementChild.src = img[index].src;
    fullview.classList.add('show');
}