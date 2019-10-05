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

// Слайдер блока сервисов
var services = document.querySelector('.services');
if (services) {
  var servicesMenu = services.querySelectorAll('.menu-services__item');
  var servicesSlides = services.querySelectorAll('.menu-services__desc-item');
  var activeSevicesMenu = servicesMenu[0];
  var activeServicesSlide = servicesSlides[0];
  activeSevicesMenu.classList.add("menu-services__item--active");
  activeServicesSlide.classList.add("menu-services__desc-item--show");
  function changeServicesSlide(menuItem, servicesSlideItem) {
    menuItem.addEventListener("click", function(event) {
      event.preventDefault();
      activeSevicesMenu.classList.remove("menu-services__item--active");
      activeSevicesMenu = menuItem;
      activeSevicesMenu.classList.add("menu-services__item--active");
      activeServicesSlide.classList.remove("menu-services__desc-item--show");
      activeServicesSlide = servicesSlideItem;
      activeServicesSlide.classList.add("menu-services__desc-item--show");
    });
  };
  if (servicesMenu.length <= servicesSlides.length) {
    for (var i = 0; i < servicesMenu.length; i++) {
      changeServicesSlide(servicesMenu[i], servicesSlides[i]);
    }
  }

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
    var nameInput = writeUsModal.querySelector('[name = "name"]');
    nameInput.focus();
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

if (writeUsModal) {
  var writeUsForm = writeUsModal.querySelector('.modal-write-us__form');
  writeUsForm.addEventListener("submit", function(evt) {

    var name = writeUsForm.querySelector('[name = "name"]');
    var email = writeUsForm.querySelector('[email = "email"]');
    var message = writeUsForm.querySelector('[name = "wrtie-us-text"]');
    if (!name.value || !email.value || !message.value) {
      evt.preventDefault();
      writeUsModal.classList.remove("modal-write-us--error");
      writeUsModal.offsetWidth = writeUsModal.offsetWidth;
      writeUsModal.classList.add("modal-write-us--error");
    }
  });
}
// Добавление товара в корзину при нажатии "Купить"
var products = document.querySelector('.products');
if (products) {
  var productsArr = products.querySelectorAll('.products__item');
  var addToCartModal = document.querySelector('.modal-add-in-cart');
  function addToCart(productItem) {
    var addToCartButton = productItem.querySelector('.products__buy');
    addToCartButton.addEventListener('click', function(evnt) {
      evnt.preventDefault();
      addToCartModal.classList.add("modal--show");
    });
  };
  if (addToCartModal) {
    for (var i = 0; i < productsArr.length; i++) {
      addToCart(productsArr[i]);
    }
  }
};

// Двигающиеся слайдеры цены
var rangeControls = document.querySelector('.range-controls');
if (rangeControls) {
  var rangeToggleMin = rangeControls.querySelector('.range-controls__toggle--min');
  var rangeToggleMax = rangeControls.querySelector('.range-controls__toggle--max');
  var rangeBar = rangeControls.querySelector('.range-controls__bar');
  var inputMinPrice = document.querySelector('#filter-min-price');
  var inputMaxPrice = document.querySelector('#filter-max-price');
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
        inputMinPrice.value = Math.round(40000 / 180 * (rangeToggleMin.offsetLeft - newPoint - 20));
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
        inputMaxPrice.value = Math.round(40000 / 180 * (rangeToggleMax.offsetLeft - newPoint - 20));
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
