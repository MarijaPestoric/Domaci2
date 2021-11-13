const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelectorAll(".slider-container__img");
const container = document.querySelector(".container")
let index=0;

prev.addEventListener('click', ()=>{
    changeImg('prev', images);
})

next.addEventListener('click', ()=>{
    changeImg('next', images);
});
container.addEventListener('mouseenter',()=>{
    document.addEventListener('keydown', keyPress);
})

container.addEventListener('mouseleave', ()=>{
    document.removeEventListener('keydown', keyPress);
})
 function keyPress(e){
    if(e.key === "ArrowLeft"){
        changeImg('prev', images);
    } else if (e.key === "ArrowRight"){
        changeImg('next', images)
    }
 }

function changeImg(direction, arr){
    if(direction === 'next'){
        index++;
        if(index == arr.length){
            index = 0;
        }
    } else {
        if(index === 0){
            index = arr.length - 1;
        } else {
            index--;
        }
    }
    for(let i=0; i<arr.length; i++){
        arr[i].classList.remove('main')
    }
    arr[index].classList.add('main')
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
    // const fullImages = document.querySelectorAll('.full-image');
    // console.log(fullImages);
    // fullview.addEventListener('mouseenter',()=>{
    //     console.log('here');
    //     document.addEventListener('keydown', (e)=>{
    //         if(e.key === "ArrowLeft"){
    //             changeImg('prev', fullImages);
    //         } else if (e.key === "ArrowRight"){
    //             changeImg('next', fullImages)
    //         }
    //     });
    // })
}