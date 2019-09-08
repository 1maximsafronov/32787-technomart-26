/*
var slider = document.querySelector('.promo__slider');
var slides = slider.querySelectorAll('.slider__item');
var slidesDots = slider.querySelectorAll('.slider__dot');

var slideIndex = 0;
var slideActive = slides[slideIndex];
var slideDotActive = slidesDots[slideIndex];
slideActive.classList.add("slider__item--show");
slideActive.classList.add("slider__dot--active");

// Функция смены слайда по классу
function changeSlide(itemIndex){
  slideActive.classList.remove('slider__item--show');
  slides[itemIndex].classList.add("slider__item--show");
  slideActive = slides[itemIndex];

  slideDotActive.classList.remove('slider__dot--active');
  slidesDots[itemIndex].classList.add("slider__dot--active");
  slideDotActive = slidesDots[itemIndex];
};

// Обработчик клика
slider.addEventListener("click", function(event){
  var indexTmp = slideIndex;
  var targetClick = event.target;
  var isTargetPrev = targetClick.classList.contains("slider__control--prev");
  var isTargetNext = targetClick.classList.contains("slider__control--next");
  var isTargetDot = targetClick.classList.contains("slider__dot");

//   Проверка клика по левой стрелке
 if(isTargetPrev){
    slideIndex =(slideIndex-1)%(slides.length);
 }
//   Проверка клика по правой стрелке
 if(isTargetNext){
    slideIndex =(slideIndex+1)%(slides.length);
 }
//   Проверка клика по точкам
 if(isTargetDot){
   for(var i = 0; i < slidesDots.length; i++){
     if(targetClick === slidesDots[i])
       {
         slideIndex = i;
       }
   }
 }
//  Проверка на выход за пределы массива слайдов
  if(slideIndex < 0){
      slideIndex =slides.length-1;
    }
//   Вызов функции смены слайда c проверкой чтобы не вызывать функцию смены при любом обычном клике
  if(slideIndex != indexTmp){
    changeSlide(slideIndex);
  }
});
*/