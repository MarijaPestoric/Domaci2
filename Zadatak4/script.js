const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelectorAll(".slider-container__img");
let index= 0;
console.log(images[index]);
prev.addEventListener('click',()=>{
    changeImg('prev');
})
next.addEventListener('click',()=>{
    changeImg('next');
})
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