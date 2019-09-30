var slider = document.querySelector('.promo__slider');
if (slider) {
  sliderAnimation(slider);
}

function sliderAnimation(slider) {

  var slides = slider.querySelectorAll('.slider__item');
  var slidesDots = slider.querySelectorAll('.slider__dot');

  var slideIndex = 0;
  var slideActive = slides[slideIndex];
  var slideDotActive = slidesDots[slideIndex];
  slideActive.classList.add("slider__item--show");
  slideActive.classList.add("slider__dot--active");

  // Функция смены слайда по классу
  function changeSlide(itemIndex) {
    slideActive.classList.remove('slider__item--show');
    slides[itemIndex].classList.add("slider__item--show");
    slideActive = slides[itemIndex];

    slideDotActive.classList.remove('slider__dot--active');
    slidesDots[itemIndex].classList.add("slider__dot--active");
    slideDotActive = slidesDots[itemIndex];
  };

  // Обработчик клика на слайдер
  slider.addEventListener("click", function(event) {
    var indexTmp = slideIndex;
    var targetClick = event.target;
    var isTargetPrev = targetClick.classList.contains("slider__control--prev");
    var isTargetNext = targetClick.classList.contains("slider__control--next");
    var isTargetDot = targetClick.classList.contains("slider__dot");

    //   Проверка клика по левой стрелке
    if (isTargetPrev) {
      slideIndex = (slideIndex - 1) % (slides.length);
    }
    //   Проверка клика по правой стрелке
    if (isTargetNext) {
      slideIndex = (slideIndex + 1) % (slides.length);
    }
    //   Проверка клика по точкам
    if (isTargetDot) {
      for (var i = 0; i < slidesDots.length; i++) {
        if (targetClick === slidesDots[i]) {
          slideIndex = i;
        }
      }
    }
    //  Проверка на выход за пределы массива слайдов
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    //   Вызов функции смены слайда c проверкой чтобы не вызывать функцию смены при любом обычном клике
    if (slideIndex != indexTmp) {
      changeSlide(slideIndex);
    }
  });
};

var modals = document.querySelectorAll('.modal');
var mapLink = document.querySelector('.contacts__map-link');
var writeUsLink = document.querySelector('.contacts__write-us');
var mapModal = document.querySelector('.modal-map');
var writeUsModal = document.querySelector('.modal-write-us');

if (mapLink) {
  // Открытие блока с картой
  mapLink.addEventListener("click", function(event) {
    event.preventDefault();
    mapModal.classList.add("modal--show");
  });
}
if (writeUsLink) {
  // Открытие окна с формой обратной связи
  writeUsLink.addEventListener("click", function(event) {
    event.preventDefault();
    writeUsModal.classList.add("modal--show");
  });
}

// Функция закрытия модальных блоков по клику
function closeModal(modalElement) {
  var modalCloseBtn = modalElement.querySelector('.modal__close');
  modalElement.addEventListener("click", function(event) {
    if (event.target == modalCloseBtn) {
      event.preventDefault();
      modalElement.classList.remove('modal--show');
    }
  });
}
for (var i = 0; i < modals.length; i++) {
  closeModal(modals[i]);
}
// Закрытие всех модалок по esc
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.remove('modal--show');
    }
  }
});


var rangeControls = document.querySelector('.range-controls');
if (rangeControls) {

  var rangeToggleMin = rangeControls.querySelector('.range-controls__toggle--min');
  var rangeToggleMax = rangeControls.querySelector('.range-controls__toggle--max');
  var rangeBar = rangeControls.querySelector('.range-controls__bar');
  var startPointMin;
  var startPointMax;
  rangeToggleMin.addEventListener('mousedown', function(evnt) {
    evnt.preventDefault();
    startPointMin = evnt.clientX;

    function onMouseMove(moveEvnt) {
      moveEvnt.preventDefault();
      console.log('works');
      var newPoint = startPointMin - moveEvnt.clientX;
      startPointMin = moveEvnt.clientX;
      if ((rangeToggleMin.offsetLeft - newPoint) >= 20 && (rangeToggleMin.offsetLeft - newPoint) <= 180) {
        rangeToggleMin.style.left = (rangeToggleMin.offsetLeft - newPoint) + 'px';
        rangeBar.style.marginLeft = rangeToggleMin.style.left;
      };
    };

    function onMouseUp(upEvnt) {
      upEvnt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  rangeToggleMax.addEventListener('mousedown', function(evnt) {
    evnt.preventDefault();
    startPointMax = evnt.clientX;

    function onMouseMove(moveEvnt) {
      moveEvnt.preventDefault();
      console.log('works');
      var newPoint = startPointMax - moveEvnt.clientX;
      startPointMax = moveEvnt.clientX;
      if ((rangeToggleMax.offsetLeft - newPoint) >= 20 && (rangeToggleMax.offsetLeft - newPoint) <= 180) {
        rangeToggleMax.style.left = (rangeToggleMax.offsetLeft - newPoint) + 'px';
        rangeBar.style.marginRight = 200 - (rangeToggleMax.offsetLeft - newPoint) + 'px';
      };

    };

    function onMouseUp(upEvnt) {
      upEvnt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
};
