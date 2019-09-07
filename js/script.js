/*
var slider = document.querySelector('.promo__slider');
console.log(slider);
var slides = slider.querySelectorAll('.slider__item');
var slidesDots = slider.querySelectorAll('.slider__dot');
var sliderPrev = slider.querySelector('.slider__control--prev');
var sliderNext = slider.querySelector('.slider__control--next');
console.log(sliderNext);

var slideIndex = 0;
var slideActive = slides[slideIndex];
var slideDotActive = slidesDots[slideIndex];
slideActive.classList.add("slider__item--show");

function dotClick(dotItem, slideItem){
  dotItem.addEventListener("click", function(){
    changeSlide(slideItem);
  });
}

for(var i = 0; i < slidesDots.length; i++){
  dotClick(slidesDots[i], i);
}
function changeSlide(itemIndex){
  slideActive.classList.toggle('slider__item--show');
  slides[itemIndex].classList.add("slider__item--show");
  slideActive = slides[itemIndex];

  slideDotActive.classList.toggle('slider__dot--active');
  slidesDots[itemIndex].classList.add("slider__dot--active");
  slideDotActive = slidesDots[itemIndex];
};

sliderPrev.addEventListener("click", function(){
  slideIndex =(slideIndex-1)%(slides.length);
  if(slideIndex < 0){
    slideIndex =slides.length-1;
  }
  changeSlide(slideIndex);
});

sliderNext.addEventListener("click", function(){
  slideIndex =(slideIndex+1)%(slides.length);
  changeSlide(slideIndex);
});
*/