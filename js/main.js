/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/action-btns/action-btns.js":
/*!**********************************************************!*\
  !*** ./src/blocks/components/action-btns/action-btns.js ***!
  \**********************************************************/
/***/ (function() {

var btnUp = document.querySelector('.action-btns-up');
if (btnUp) {
  btnUpOffset();
}
function btnUpOffset() {
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 400) {
      btnUp.style.display = 'block';
      btnUp.style.opacity = '1';
    } else {
      btnUp.style.opacity = '';
      btnUp.style.display = '';
    }
  });
}

/***/ }),

/***/ "./src/blocks/components/burger/burger.js":
/*!************************************************!*\
  !*** ./src/blocks/components/burger/burger.js ***!
  \************************************************/
/***/ (function() {

var burger = document.querySelector('.burger');
var secondaryMenu = document.querySelector('.secondary-menu');
var productMenu = document.querySelector('.product-menu');
var headerItem = document.querySelectorAll('.header-menu__item');
var search = document.querySelector('.search');
if (burger) {
  burgerScripts();
}
function burgerScripts() {
  var headerMenu = document.querySelector('.header-menu'),
    burgerInner = burger.querySelector('.burger__inner'),
    menuItem = document.querySelectorAll('.header-menu__item');

  // const dropDown = document.querySelector('.dropdown'),
  //     dropItems = document.querySelector('.dropdown__items'),
  //     dropItem = document.querySelectorAll('.dropdown__item');

  burgerListener();
  burgerCloseKeyDown();
  menuItemIteration();

  // dropdownInBurger(dropItem, dropItems);

  function overflowMenu(header) {
    if (burgerInner.classList.contains('burger__inner--active')) {
      document.body.style.overflow = 'hidden';
      secondaryMenu.classList.add('active');
      productMenu.classList.add('active');
      setTimeout(function () {
        secondaryMenu.classList.add('active');
        productMenu.classList.add('active');
      }, 200);
      header.forEach(function (el) {
        el.style.opacity = '0';
      });
    } else {
      document.body.style.overflow = '';
      secondaryMenu.classList.remove('active');
      productMenu.classList.remove('active');
      setTimeout(function () {
        header.forEach(function (el) {
          el.style.opacity = '1';
        });
      }, 200);
    }
  }
  function removeMenuActive() {
    burgerInner.classList.remove('burger__inner--active');
    headerMenu.classList.remove('header-menu--active');
    overflowMenu(headerItem);
  }
  function burgerListener() {
    burger.addEventListener('click', function () {
      headerMenu.classList.toggle('header-menu--active');
      burgerInner.classList.toggle('burger__inner--active');

      // dropDown.classList.add('dropdown-burger');

      overflowMenu(headerItem);
    });
  }
  function burgerCloseKeyDown() {
    document.addEventListener('keydown', function (event) {
      if (event.code === 'Escape' && burgerInner.classList.contains('burger__inner--active')) {
        removeMenuActive();
      }
    });
  }
  function menuItemIteration() {
    menuItem.forEach(function (item, i) {
      item.addEventListener('click', function () {
        if (!menuItem[i].querySelector('.dropdown')) {
          removeMenuActive();
        }
      });
    });
  }

  // function dropdownInBurger(dropdownItem, dropDownItems) {
  //     dropdownItem.forEach((item) => {
  //         item.addEventListener('click', () => {
  //             removeMenuActive();
  //             dropDownItems.style.display = 'none';
  //         });
  //     });
  // }
}

/***/ }),

/***/ "./src/blocks/components/expert-tabs/expert-tabs.js":
/*!**********************************************************!*\
  !*** ./src/blocks/components/expert-tabs/expert-tabs.js ***!
  \**********************************************************/
/***/ (function() {

var expertTabs = document.querySelector('.expert-tabs'),
  expertTabsHeading = document.querySelectorAll('.expert-tabs__heading'),
  expertTabsIcon = document.querySelectorAll('.expert-tabs__icon'),
  expertTabsContent = document.querySelectorAll('.expert-tabs__content');
if (expertTabs) {
  expertTabsForEach();
  window.addEventListener('resize', function () {
    return resizeContent();
  });
}
function expertTabsForEach() {
  expertTabsHeading.forEach(function (header, i) {
    header.addEventListener('click', function () {
      expertTabsBasic(i, expertTabsHeading, expertTabsIcon, expertTabsContent, 'expert-tabs__heading--active', 'expert-tabs__icon--active', 'expert-tabs__content--active');
    });
  });
}
function expertTabsSetTimeout(item, value) {
  setTimeout(function () {
    item.style.display = value;
  }, 1000);
}
function expertTabsBasic(i, heading, icon, content, headingActive, iconActive, contentActive) {
  if (!heading[i].classList.contains(headingActive)) {
    content.forEach(function (item) {
      item.classList.remove(contentActive);
      item.style.maxHeight = '';
      expertTabsSetTimeout(item, '');
    });
    content.forEach(function (item) {
      item.classList.remove(contentActive);
      item.style.maxHeight = '';
    });
    icon.forEach(function (item) {
      item.classList.remove(iconActive);
    });
    heading.forEach(function (item) {
      item.classList.remove(headingActive);
    });
    heading[i].classList.add(headingActive);
    icon[i].classList.add(iconActive);
    content[i].classList.add(contentActive);
    expertTabsSetTimeout(content[i], 'block');
    content[i].style.display = 'block';
    content[i].style.maxHeight = "".concat(content[i].scrollHeight, "px");
  } else {
    icon[i].classList.remove(iconActive);
    content[i].style.maxHeight = '';
    expertTabsSetTimeout(content[i], '');
    content[i].classList.remove(contentActive);
    heading[i].classList.remove(headingActive);
  }
}
function resizeContent() {
  var expertTabsContentActive = document.querySelector('.expert-tabs__content--active');
  if (expertTabsContentActive && parseInt(expertTabsContentActive.style.maxHeight) !== expertTabsContentActive.scrollHeight) {
    expertTabsContentActive.style.maxHeight = "".concat(expertTabsContentActive.scrollHeight, "px");
  }
}

/***/ }),

/***/ "./src/blocks/components/img/img.js":
/*!******************************************!*\
  !*** ./src/blocks/components/img/img.js ***!
  \******************************************/
/***/ (function() {

var imageObserver = new IntersectionObserver(function (entries, options) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (entry.target.dataset.src !== undefined && entry.target.dataset.src !== null) {
        entry.target.src = entry.target.dataset.src;
      }
      if (entry.target.dataset.srcset !== undefined && entry.target.dataset.srcset !== null) {
        entry.target.srcset = entry.target.dataset.srcset;
      }
      if (entry.target.dataset.alt !== undefined && entry.target.dataset.alt !== null) {
        entry.target.alt = entry.target.dataset.alt;
      }
      imageObserver.unobserve(entry.target);
    }
  });
}, {});
document.querySelectorAll('img, source').forEach(function (el) {
  return imageObserver.observe(el);
});

/***/ }),

/***/ "./src/blocks/components/range/range.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/range/range.js ***!
  \**********************************************/
/***/ (function() {

function generateInputRange(start, end, numPoints, range) {
  var inputRange = document.getElementById(range);
  if (inputRange) {
    var step = (end - start) / (numPoints - 1);
    inputRange.setAttribute('min', start);
    inputRange.setAttribute('max', end);
    inputRange.setAttribute('step', step);
    inputRange.setAttribute('value', start); // Добавляем начальное значение

    return inputRange;
  }
}
var startValue = 0; // Начальное значение
var endValue = 10; // Конечное значение
var numPoints = 3; // Количество опорных точек

var delay = generateInputRange(startValue, endValue, numPoints, 'rangeDelay');
var intensity = generateInputRange(startValue, endValue, numPoints, 'rangeIntensity');

/***/ }),

/***/ "./src/blocks/components/show-more/show-more.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/show-more/show-more.js ***!
  \******************************************************/
/***/ (function() {

var showMore = document.querySelectorAll('.show-more'),
  showMoreButtons = document.querySelectorAll('.show-more__button'),
  showMoreContent = document.querySelectorAll('.show-more__content');
if (showMore) {
  showMoreHideContent();
  clickShowMore();
  window.addEventListener('resize', function () {
    return resizeContent(showMoreContent);
  });
}
function showMoreHideContent() {
  showMoreContent.forEach(function (item) {
    item.style.maxHeight = '';
    if (item.classList.contains('show-more__content--active')) {
      setTimeout(function () {
        item.style.display = 'none';
      }, 900);
    }
    item.classList.remove('show-more__content--active');
  });
  showMoreButtons.forEach(function (item) {
    item.classList.remove('show-more__button--active');
  });
}
function showMoreShowContent(i) {
  showMoreContent[i].style.display = 'block';
  showMoreButtons[i].classList.add('show-more__button--active');
  showMoreContent[i].classList.add('show-more__content--active');
  showMoreContent[i].style.maxHeight = "".concat(showMoreContent[i].scrollHeight, "px");
}
function clickShowMore() {
  showMore.forEach(function (item) {
    item.addEventListener('click', function (event) {
      var target = event.target;
      if (target && target.classList.contains('show-more__button') && !target.classList.contains('show-more__button--active')) {
        console.log('Нажал');
        showMoreButtons.forEach(function (item, i) {
          if (target === item) {
            showMoreHideContent();
            showMoreShowContent(i);
          }
        });
      } else {
        showMoreButtons.forEach(function (item) {
          if (target === item) {
            showMoreHideContent();
          }
        });
      }
    });
  });
}
function resizeContent(content) {
  content.forEach(function (item, i) {
    if (parseInt(content[i].style.maxHeight) !== content[i].scrollHeight) {
      content[i].style.maxHeight = "".concat(content[i].scrollHeight, "px");
    }
  });
}

/***/ }),

/***/ "./src/blocks/components/slider/slider.js":
/*!************************************************!*\
  !*** ./src/blocks/components/slider/slider.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 200,
  preloadImages: false,
  lazy: true,
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel],
  pagination: {
    el: '.slider-pagination.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.slider-button-next.swiper-button-next',
    prevEl: '.slider-button-prev.swiper-button-prev'
  }
  // mousewheel: {
  //     invert: true,
  // },
  // breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //         slidesPerView: 2,
  //         spaceBetween: 20
  //     },
  //     // when window width is >= 480px
  //     480: {
  //         slidesPerView: 3,
  //         spaceBetween: 30
  //     },
  //     // when window width is >= 640px
  //     640: {
  //         slidesPerView: 4,
  //         spaceBetween: 40
  //     }
  // }
});

var slideBeyond = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slide-beyond.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel],
  scrollbar: {
    el: '.slide-beyond-scrollbar.swiper-scrollbar',
    // hide: true,
    draggable: true
  },
  mousewheel: {
    invert: false
  },
  breakpoints: {
    250: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1300: {
      slidesPerView: 4
    }
  }
});
var productSliders = document.querySelectorAll('.line-products-product-slider');
productSliders.forEach(function (slider) {
  var productSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 200,
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel],
    navigation: {
      nextEl: '.slider-button-next.swiper-button-next',
      prevEl: '.slider-button-prev.swiper-button-prev'
    }
    // mousewheel: {
    //     invert: true,
    // },
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //         slidesPerView: 4,
    //         spaceBetween: 40
    //     }
    // }
  });
});

var byOffline = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.by-offline-slider', {
  initialSlide: 0,
  direction: 'vertical',
  slidesPerView: 1,
  autoHeight: true,
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
  loop: true,
  pagination: {
    el: '.slider-pagination.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.slider-button-next.swiper-button-next',
    prevEl: '.slider-button-prev.swiper-button-prev'
  }
});
byOffline.update();

/***/ }),

/***/ "./src/blocks/modules/by-online/by-online.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/by-online/by-online.js ***!
  \***************************************************/
/***/ (function() {

var byOnline = document.querySelector('.by-online');
if (byOnline) {
  var sliderContainer = document.querySelector('.slider-container');
  var slides = document.querySelectorAll('.slide');
  var arrowLeft = document.querySelector('.slider-arrow.left');
  var arrowRight = document.querySelector('.slider-arrow.right');
  var currentPage = document.querySelector('.current-page');
  var totalPages = document.querySelector('.total-pages');
  var currentIndex = 0;
  var navigateToSlide = function navigateToSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    sliderContainer.style.transform = "translateX(-".concat(currentIndex * 100, "%)");
    currentPage.textContent = currentIndex + 1;
  };
  arrowLeft.addEventListener('click', function () {
    navigateToSlide(currentIndex - 1);
  });
  arrowRight.addEventListener('click', function () {
    navigateToSlide(currentIndex + 1);
  });
  totalPages.textContent = slides.length;
}

/***/ }),

/***/ "./src/blocks/modules/find-solution/find-solution.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/find-solution/find-solution.js ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/my-slider/my-slider.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/my-slider/my-slider.js ***!
  \***************************************************/
/***/ (function() {

// Описание переменных.
var sliderItems = document.querySelectorAll('.slider-item');
var paginationItems = document.querySelectorAll('.pagination li');
var navItems = document.querySelectorAll('.nav li');

// Функция для смены слайда.
function changeSlide(index) {
  // Убрать активный класс.
  sliderItems.forEach(function (item) {
    return item.classList.remove('active');
  });
  paginationItems.forEach(function (item) {
    return item.classList.remove('active');
  });
  navItems.forEach(function (item) {
    return item.classList.remove('active');
  });

  // Добавить активный класс.
  sliderItems[index].classList.add('active');
  paginationItems[index].classList.add('active');
  navItems[index].classList.add('active');
}

// Добавить обработчики событий для пагинации и навигации.
paginationItems.forEach(function (item, index) {
  item.addEventListener('click', function () {
    return changeSlide(index);
  });
});
navItems.forEach(function (item, index) {
  item.addEventListener('click', function () {
    return changeSlide(index);
  });
});

/***/ }),

/***/ "./src/blocks/modules/product-selection/product-selection.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/product-selection/product-selection.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var titles = ['FAMILY', 'BABY', 'EXTREME', 'NATURAL', 'THERAPY'];
var selection = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product-selection-slider', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade],
  // effect: 'fade',
  pagination: {
    el: '.pagination',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<div class="' + className + '">' + titles[index] + '</div>';
    }
  }
});
document.getElementById('family').addEventListener('click', function (event) {
  event.preventDefault();
  selection.slideTo(0, 1000, false);
});
document.getElementById('extreme').addEventListener('click', function (event) {
  event.preventDefault();
  selection.slideTo(2, 1000, false);
});
document.getElementById('natural').addEventListener('click', function (event) {
  event.preventDefault();
  selection.slideTo(3, 1000, false);
});
document.getElementById('baby').addEventListener('click', function (event) {
  event.preventDefault();
  selection.slideTo(1, 1000, false);
});
document.getElementById('therapy').addEventListener('click', function (event) {
  event.preventDefault();
  selection.slideTo(4, 1000, false);
});
var extreme = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product-selection-extreme-slider', {
  nested: true,
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar],
  slidesPerView: 5,
  spaceBetween: 73,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_action_btns_action_btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/action-btns/action-btns */ "./src/blocks/components/action-btns/action-btns.js");
/* harmony import */ var _components_action_btns_action_btns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_action_btns_action_btns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/burger/burger */ "./src/blocks/components/burger/burger.js");
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_burger_burger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_img_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/img/img */ "./src/blocks/components/img/img.js");
/* harmony import */ var _components_img_img__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_img_img__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_expert_tabs_expert_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %components%/expert-tabs/expert-tabs */ "./src/blocks/components/expert-tabs/expert-tabs.js");
/* harmony import */ var _components_expert_tabs_expert_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_expert_tabs_expert_tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_range_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %components%/range/range */ "./src/blocks/components/range/range.js");
/* harmony import */ var _components_range_range__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_range_range__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_show_more_show_more__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %components%/show-more/show-more */ "./src/blocks/components/show-more/show-more.js");
/* harmony import */ var _components_show_more_show_more__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_show_more_show_more__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %components%/slider/slider */ "./src/blocks/components/slider/slider.js");
//! Basic





//! Other






/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_by_online_by_online__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/by-online/by-online */ "./src/blocks/modules/by-online/by-online.js");
/* harmony import */ var _modules_by_online_by_online__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_by_online_by_online__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_find_solution_find_solution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/find-solution/find-solution */ "./src/blocks/modules/find-solution/find-solution.js");
/* harmony import */ var _modules_find_solution_find_solution__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_find_solution_find_solution__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/main/main */ "./src/blocks/modules/main/main.js");
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_main_main__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_my_slider_my_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/my-slider/my-slider */ "./src/blocks/modules/my-slider/my-slider.js");
/* harmony import */ var _modules_my_slider_my_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_my_slider_my_slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_product_selection_product_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/product-selection/product-selection */ "./src/blocks/modules/product-selection/product-selection.js");








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug_starter"] = self["webpackChunkgulp_pug_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map