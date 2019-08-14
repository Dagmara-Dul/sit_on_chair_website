document.addEventListener('DOMContentLoaded', function() {
console.log('DOM');

//carousel below

var slider = document.querySelector('section.slider');
//console.log(slider);

var slider__button__prev = slider.querySelector('.prev__button');
// console.log(slider__button__prev);

var slider__button__next = slider.querySelector('.next__button');
// console.log(slider__button__next);

var slides = slider.querySelectorAll('.slides');
// console.log(slides);

var index=0;

slides[index].classList.add("visible");



slider__button__next.addEventListener('click',function(){
    // console.log('click');
    slides[index].classList.remove("visible");
    index++;
    if (index == slides.length){
        index = 0;
    }
    slides[index].classList.add('visible');
})


slider__button__prev.addEventListener('click',function(){
    // console.log('click_prev');
    slides[index].classList.remove("visible");
    index--;
    if (index == -1){
        index = slides.length-1;
    }
    slides[index].classList.add('visible');
})



//menu

var header = document.querySelector('header');
// console.log(header);

var o__firmie = header.querySelector('#o__firmie');
// console.log(o__firmie);

var down__menu = document.querySelector('#do__menu');
// console.log(down__menu);

o__firmie.addEventListener('click', function(){
    // console.log('click');
    down__menu.classList.toggle('visible');
})

console.log(window);
var count = 0;
window.addEventListener('click',function(){
    count++;
    if(count % 2==0){

    
    if(down__menu.classList.contains('visible')){
        // console.log('mam');
        down__menu.classList.remove('visible');
    }
    }
})

});