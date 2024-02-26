/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _js_communities_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/communities-modal */ \"./src/js/communities-modal.js\");\n/* harmony import */ var _js_communities_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_communities_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_modal_sign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modal-sign */ \"./src/js/modal-sign.js\");\n/* harmony import */ var _js_modal_sign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_modal_sign__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/slider */ \"./src/js/slider.js\");\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_slider__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/player */ \"./src/js/player.js\");\n/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_player__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_modal_burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/modal-burger */ \"./src/js/modal-burger.js\");\n/* harmony import */ var _js_modal_burger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_modal_burger__WEBPACK_IMPORTED_MODULE_6__);\n/* Для React\r\nimport React from 'react';\r\nimport ReactDOM from 'react-dom';\r\nimport App from './components/app';\r\n*/\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/js/communities-modal.js":
/*!*************************************!*\
  !*** ./src/js/communities-modal.js ***!
  \*************************************/
/***/ (() => {

eval("var communitiesItem = document.querySelectorAll('.communities__item');\nvar communitiesModal = document.querySelectorAll('.communities__modal');\ncommunitiesItem.forEach(function (item, index) {\n  item.addEventListener('mouseenter', function () {\n    communitiesModal[index].classList.add('communities__modal--active');\n  });\n  item.addEventListener('mouseleave', function () {\n    communitiesModal[index].classList.remove('communities__modal--active');\n  });\n});\n\n//# sourceURL=webpack://webpack/./src/js/communities-modal.js?");

/***/ }),

/***/ "./src/js/modal-burger.js":
/*!********************************!*\
  !*** ./src/js/modal-burger.js ***!
  \********************************/
/***/ (() => {

eval("var modalBurger = document.querySelector('.modal-burger');\nvar modalAside = document.querySelector('.modal-burger__aside');\nvar modalBtn = document.querySelector('.header__burger');\nmodalBtn.addEventListener('click', openBurger);\ndocument.addEventListener('click', closeBurger);\nfunction openBurger(event) {\n  modalBurger.classList.add('modal-burger--active');\n  modalAside.classList.add('modal-burger__aside--active');\n}\nfunction closeBurger(event) {\n  if (!modalAside.contains(event.target) && !modalBtn.contains(event.target)) {\n    modalBurger.classList.remove('modal-burger--active');\n    modalAside.classList.remove('modal-burger__aside--active');\n  }\n}\n\n//# sourceURL=webpack://webpack/./src/js/modal-burger.js?");

/***/ }),

/***/ "./src/js/modal-sign.js":
/*!******************************!*\
  !*** ./src/js/modal-sign.js ***!
  \******************************/
/***/ (() => {

eval("var btnModalSignOpen = document.querySelector('.header__btn-modal');\nvar btnModalSignClose = document.querySelector('.modal-sign__close');\nvar modalSign = document.querySelector('.modal-sign');\nvar signForm = document.querySelector('.modal-sign__form');\nvar modalSignBlock = document.querySelector('.modal-sign__block');\nvar inputName = document.querySelector('#input-name');\nvar inputPhone = document.querySelector('#input-phone');\nvar inputText = document.querySelector('#input-text');\nbtnModalSignOpen.addEventListener('click', modalSignOpen);\nbtnModalSignClose.addEventListener('click', modalSignClose);\nsignForm.addEventListener('submit', function (event) {\n  event.preventDefault();\n  modalSignClose();\n  inputDelete();\n  alert('Ваше повідомлення було відправлено!');\n});\nmodalSign.addEventListener('click', function (event) {\n  if (!modalSignBlock.contains(event.target)) {\n    modalSignClose();\n    inputDelete();\n  }\n});\nfunction modalSignOpen() {\n  modalSign.classList.add('modal-sign--active');\n}\nfunction modalSignClose() {\n  modalSign.classList.remove('modal-sign--active');\n  inputDelete();\n}\nfunction inputDelete() {\n  inputName.value = '';\n  inputPhone.value = '';\n  inputText.value = '';\n}\n\n//# sourceURL=webpack://webpack/./src/js/modal-sign.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ (() => {

eval("var videoPlayer = document.querySelector('.soft__subblock-video');\nvar previewPlayer = document.querySelector('.soft__subblock-bg');\nvar btnPlayer = document.querySelector('.soft__subblock-play');\nbtnPlayer.addEventListener('click', openPlayer);\nfunction openPlayer() {\n  videoPlayer.style.zIndex = '12';\n  videoPlayer.autoplay = true;\n}\n\n//# sourceURL=webpack://webpack/./src/js/player.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("// SLIDER\n\nvar slider = document.querySelector('.about__slider');\nvar sliderTransform = document.querySelector('.about__slider-transform');\nvar sliderSlide = document.querySelector('.about__slider-block');\nvar sliderImage = document.querySelectorAll('.about__slider-img');\nvar sliderNext = document.querySelector('.about__slider-next');\nvar sliderPreview = document.querySelector('.about__slider-preview');\nvar sliderSection = document.querySelectorAll('.about__slider-section');\nvar sliderWidth = slider.offsetWidth;\nvar sliderIndex = 0;\nsliderNext.addEventListener('click', nextSlide);\nsliderPreview.addEventListener('click', previewSlide);\nfunction nextSlide() {\n  sliderIndex++;\n  if (sliderIndex > sliderSection.length) {\n    sliderIndex = 0;\n  }\n  runSlide();\n}\nfunction previewSlide() {\n  sliderIndex--;\n  if (sliderIndex < 0) {\n    sliderIndex = sliderSection.length - 1;\n  }\n  runSlide();\n}\nfunction runSlide() {\n  sliderTransform.style.transform = \"translateX(\".concat(-sliderIndex * sliderWidth, \"px)\");\n}\n\n// CLICK IMAGE\n\nvar sliderImages = document.querySelectorAll('.about__slider-img');\nvar sliderImageActive = document.querySelector('.about__slider-slide');\nsliderImages.forEach(function (el) {\n  el.addEventListener('click', function () {\n    var srcImages = el.src;\n    sliderImageActive.src = srcImages;\n  });\n});\n\n//# sourceURL=webpack://webpack/./src/js/slider.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./scss/setup/fonts/CeraPro-Regular.woff */ \"./src/scss/setup/fonts/CeraPro-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./scss/setup/fonts/CeraPro-Medium.woff */ \"./src/scss/setup/fonts/CeraPro-Medium.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./scss/setup/fonts/CeraPro-Bold.woff */ \"./src/scss/setup/fonts/CeraPro-Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./scss/setup/fonts/CeraPro-Black.woff */ \"./src/scss/setup/fonts/CeraPro-Black.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! assets/telephone-icon.svg */ \"./src/assets/telephone-icon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! assets/right.svg */ \"./src/assets/right.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* Links */\na, a:link, a:visited {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\na:hover {\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\n/* Common */\naside, nav, footer, header, section, main {\n  display: block;\n}\n\nheader, section, article, footer {\n  width: 100%;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\nul, ul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nimg, svg {\n  max-width: 100%;\n  height: auto;\n}\n\naddress {\n  font-style: normal;\n}\n\n/* Form */\ninput, textarea, button, select {\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  background-color: transparent;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton, input[type=submit] {\n  display: inline-block;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: transparent;\n  background: none;\n  cursor: pointer;\n}\n\ninput:focus, input:active,\nbutton:focus, button:active {\n  outline: none;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\nlabel {\n  cursor: pointer;\n}\n\nlegend {\n  display: block;\n}\n\n@font-face {\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"woff\");\n  font-family: \"CeraPro\", sans-serif;\n  font-weight: 400;\n}\n@font-face {\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff\");\n  font-family: \"CeraPro\", sans-serif;\n  font-weight: 500;\n}\n@font-face {\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(\"woff\");\n  font-family: \"CeraPro\", sans-serif;\n  font-weight: 700;\n}\n@font-face {\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format(\"woff\");\n  font-family: \"CeraPro\", sans-serif;\n  font-weight: 900;\n}\n* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  background-color: rgb(47, 22, 52);\n}\n\n.container {\n  max-width: 1170px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.social {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 16px;\n}\n.social__svg {\n  width: 24px;\n  height: 24px;\n  fill: rgb(146, 115, 152);\n}\n.social__svg:hover {\n  fill: #fff;\n}\n\n.call {\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 170%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n}\n.call::before {\n  content: \"\";\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  width: 23px;\n  height: 24px;\n  margin-right: 21px;\n}\n.call:hover {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n.call--footer {\n  color: rgb(146, 115, 152);\n}\n\n.title-h3 {\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 40px;\n  font-weight: 900;\n  line-height: 100%;\n  text-transform: uppercase;\n  text-align: left;\n}\n.title-h3--center {\n  text-align: center;\n}\n\n.modal-sign {\n  visibility: hidden;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  background-color: rgb(43, 18, 48);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n}\n.modal-sign--active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  visibility: visible;\n}\n.modal-sign__block {\n  background-color: rgb(59, 35, 65);\n  position: absolute;\n  z-index: 1000;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 30px;\n  max-width: 400px;\n  position: relative;\n}\n.modal-sign__title {\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  line-height: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n.modal-sign__input {\n  background: rgb(80, 54, 85);\n  min-width: 340px;\n  padding: 17px 21px 15px 14px;\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n.modal-sign__input:nth-child(2) {\n  margin: 20px 0 20px 0;\n}\n.modal-sign__input:focus {\n  border: 1px solid #fff;\n}\n.modal-sign__input::-webkit-input-placeholder {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 100%;\n}\n.modal-sign__input::-moz-placeholder {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 100%;\n}\n.modal-sign__input:-ms-input-placeholder {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 100%;\n}\n.modal-sign__input::-ms-input-placeholder {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 100%;\n}\n.modal-sign__input::placeholder {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 100%;\n}\n.modal-sign__fieldset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.modal-sign__textarea {\n  background: rgb(80, 54, 85);\n  min-width: 340px;\n  padding: 12px 21px 0px 14px;\n  resize: none;\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n.modal-sign__textarea::-webkit-input-placeholder {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 100%;\n}\n.modal-sign__textarea::-moz-placeholder {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 100%;\n}\n.modal-sign__textarea:-ms-input-placeholder {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 100%;\n}\n.modal-sign__textarea::-ms-input-placeholder {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 100%;\n}\n.modal-sign__textarea::placeholder {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 100%;\n}\n.modal-sign__submit {\n  margin: 30px 0 20px 0;\n  background-color: rgb(242, 92, 58);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n.modal-sign__submit:hover {\n  background-color: rgb(255, 133, 45);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n}\n.modal-sign__submit:focus {\n  background-color: rgb(227, 67, 45);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n}\n.modal-sign__subtext {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 130%;\n}\n.modal-sign__close {\n  width: 50px;\n  fill: #fff;\n  position: absolute;\n  top: 0px;\n  right: -60px;\n}\n\n.cards {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  gap: 30px;\n}\n.cards__item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 calc((100% - 60px) / 3);\n          flex: 1 1 calc((100% - 60px) / 3);\n}\n.cards__block-1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: rgb(59, 35, 65);\n  min-height: 176px;\n}\n.cards__block-1-soft {\n  min-height: 182px;\n}\n.cards__block-2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: rgb(80, 54, 85);\n  min-height: 85px;\n  padding: 18px;\n}\n.cards__block-2-soft {\n  min-height: 131px;\n}\n.cards__img {\n  width: 100px;\n}\n.cards__subtext {\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 110%;\n}\n.cards__subtext-soft {\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 130%;\n}\n.cards__subtext--accent {\n  color: rgb(242, 92, 58);\n}\n\n.header {\n  padding: 20px 0;\n  border-bottom: 2px solid rgba(146, 115, 152, 0.2);\n}\n.header__container {\n  max-width: 1920px;\n  padding: 0 30px;\n  margin: 0 auto;\n}\n.header__wrapp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.header__burger {\n  display: none;\n}\n.header__call {\n  display: none;\n}\n.header__img-logo--adaptive {\n  display: none;\n}\n.header__left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 60px;\n}\n.header__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 50px;\n}\n.header__list--burger {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.header__link-nav {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.header__link-nav:hover {\n  color: #fff;\n  border-bottom: 2px solid rgb(242, 92, 58);\n  padding-bottom: 46px;\n}\n.header__link-nav--active {\n  padding-bottom: 46px;\n  color: #fff;\n  border-bottom: 2px solid rgb(242, 92, 58);\n}\n.header__link-nav--burger {\n  padding-left: 10px;\n  font-size: 18px;\n}\n.header__link-nav--burger:hover {\n  border-left: 2px solid rgb(242, 92, 58);\n}\n.header__link-nav--burger--active {\n  padding-bottom: 0px;\n  border-bottom: none;\n  border-left: 2px solid rgb(242, 92, 58);\n}\n.header__right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 40px;\n}\n.header__btn-modal {\n  background-color: rgba(225, 225, 225, 0);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 10px 30px;\n  border: 2px solid #fff;\n}\n.header__btn-modal:hover {\n  background-color: rgb(255, 255, 255);\n  color: #000;\n  text-transform: uppercase;\n  padding: 10px 30px;\n  border: 2px solid #fff;\n}\n.header__btn-img {\n  display: none;\n}\n\n.modal-burger {\n  visibility: hidden;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(43, 18, 48, 0.8);\n}\n.modal-burger__aside {\n  position: relative;\n  padding: 30px 0;\n  width: 60%;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  min-height: 100vh;\n  background: rgb(59, 35, 65);\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n}\n.modal-burger__aside--active {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.modal-burger--active {\n  visibility: visible;\n}\n\n.call__modal {\n  position: absolute;\n  z-index: 100;\n  bottom: 20px;\n  left: 10px;\n}\n\n.hero {\n  padding-top: 105px;\n  min-height: 100vh;\n}\n.hero__wrapp {\n  text-align: center;\n}\n.hero__title {\n  margin-bottom: 96px;\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 100px;\n  font-weight: 900;\n  line-height: 100%;\n  text-align: left;\n  text-transform: uppercase;\n}\n.hero__statics {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 30px;\n}\n.hero__static {\n  border: 2px solid rgba(146, 115, 152, 0.5);\n  padding: 30px 107px;\n}\n.hero__static-text {\n  display: block;\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n  text-transform: uppercase;\n}\n.hero__static-text--accent {\n  color: rgb(242, 92, 58);\n  font-size: 50px;\n  font-weight: 900;\n  line-height: 140%;\n  margin-bottom: 10px;\n}\n.hero__btn-scroll {\n  display: inline-block;\n  margin-top: 80px;\n  padding: 30px;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n}\n.hero__btn-scroll:hover {\n  -webkit-transform: translateY(15px);\n          transform: translateY(15px);\n}\n.hero__scroll-svg {\n  width: 50px;\n  height: 50px;\n  fill: rgba(146, 115, 152, 0.5);\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n}\n.hero__scroll-svg:hover {\n  fill: #fff;\n}\n\n.description__wrapp {\n  text-align: center;\n}\n.description__paragraphs {\n  margin: 50px 0 50px 0;\n}\n.description__paragraph {\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 130%;\n  margin-top: 25px;\n}\n.description__paragraph:first-child {\n  margin: 0;\n}\n.description__btn-link {\n  display: inline-block;\n  background-color: rgb(242, 92, 58);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n.description__btn-link:hover {\n  background-color: rgb(255, 133, 45);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n}\n.description__btn-link:focus {\n  background-color: rgb(227, 67, 45);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n}\n\n.communities {\n  padding-top: 120px;\n}\n.communities__wrapp {\n  text-align: center;\n}\n.communities__blocks {\n  margin: 50px 0 30px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  gap: 30px;\n}\n.communities__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: rgb(59, 35, 65);\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 2px solid rgb(80, 54, 85);\n  gap: 25px;\n  padding: 43px 0 37px 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 calc((100% - 60px) / 3);\n          flex: 1 1 calc((100% - 60px) / 3);\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  position: relative;\n}\n.communities__item:hover {\n  background-color: rgb(80, 54, 85);\n}\n.communities__img-item {\n  width: 100px;\n}\n.communities__subtitle {\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 100%;\n  text-transform: uppercase;\n}\n.communities__subtext {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 110%;\n  text-align: center;\n}\n.communities__modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  gap: 35px;\n  background-color: #fff;\n  padding: 12px 30px 12px 30px;\n  position: absolute;\n  z-index: 10;\n  bottom: -150px;\n  left: 0px;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.communities__modal--active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.communities__modal-link {\n  display: contents;\n}\n.communities__modal-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 11px;\n}\n\n.about {\n  padding-top: 120px;\n}\n.about__wrapp {\n  margin-top: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 30px;\n}\n.about__cards {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 20px;\n}\n.about__card {\n  padding: 12px 20px;\n  border: 2px solid rgb(80, 54, 85);\n  max-width: 370px;\n}\n.about__text {\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 130%;\n  text-align: center;\n  color: #fff;\n}\n.about__text--accent {\n  color: rgb(242, 92, 58);\n}\n.about__slider {\n  overflow-x: hidden;\n  max-width: 770px;\n  position: relative;\n}\n.about__slider-block {\n  width: 100%;\n}\n.about__slider-slide {\n  min-width: 770px;\n}\n.about__slider-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.about__slider-transform {\n  position: absolute;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 1552px;\n  -webkit-transition: 0.4s ease;\n  transition: 0.4s ease;\n}\n.about__slider-img {\n  width: 194px;\n}\n.about__slider-img:hover {\n  cursor: pointer;\n}\n.about__slider-next {\n  position: absolute;\n  z-index: 10;\n  right: 0;\n  bottom: 0;\n  min-height: 110px;\n  width: 17px;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n.about__slider-next:hover {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.about__slider-preview {\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  bottom: 0;\n  min-height: 110px;\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n  width: 17px;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n.about__slider-preview:hover {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.advertisement {\n  padding-top: 120px;\n}\n.advertisement__wrapp {\n  text-align: center;\n}\n.advertisement__text {\n  margin: 50px 0 50px 0;\n  text-align: left;\n  width: 100%;\n}\n.advertisement__paragraph {\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 130%;\n}\n.advertisement__btn {\n  margin-top: 99px;\n  display: inline-block;\n  background-color: rgb(242, 92, 58);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n}\n.advertisement__btn:hover {\n  background-color: rgb(255, 133, 45);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n}\n.advertisement__btn:focus {\n  background-color: rgb(227, 67, 45);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n}\n\n.soft {\n  padding-top: 120px;\n}\n.soft__wrapp {\n  text-align: center;\n}\n.soft__mini-title {\n  margin: 50px 0 30px 0;\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 130%;\n  text-align: left;\n}\n.soft__title {\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 110%;\n  text-align: left;\n}\n.soft__title--top {\n  margin-top: 40px;\n}\n.soft__title--bottom {\n  margin-bottom: 40px;\n}\n.soft__subblock {\n  margin-top: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 30px;\n}\n.soft__subblock-description {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 40px;\n}\n.soft__subblock-cards {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 10px;\n}\n.soft__subblock-card {\n  border: 2px solid rgb(80, 54, 85);\n  padding: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 16px;\n}\n.soft__subblock-text {\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 130%;\n}\n.soft__subblock-img {\n  width: 44px;\n  height: 44px;\n}\n.soft__subblock-btn {\n  background-color: rgb(242, 92, 58);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n}\n.soft__subblock-btn:hover {\n  background-color: rgb(255, 133, 45);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n}\n.soft__subblock-btn:focus {\n  background-color: rgb(227, 67, 45);\n  color: #fff;\n  text-transform: uppercase;\n  padding: 16px 60px;\n}\n.soft__subblock-player {\n  min-width: 770px;\n  position: relative;\n}\n.soft__subblock-video {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n}\n.soft__subblock-play {\n  position: absolute;\n  z-index: 11;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.soft__subblock-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n\n.helpful {\n  padding: 120px 0;\n}\n.helpful-email {\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 130%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.helpful-email::before {\n  content: \"\";\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n  width: 8px;\n  height: 16px;\n  margin-right: 17px;\n}\n.helpful-email--contact {\n  margin-bottom: 9px;\n}\n.helpful__subtitle {\n  display: inline-block;\n  margin: 30px 0;\n  color: #fff;\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 110%;\n}\n.helpful__wrapp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 35px;\n}\n.helpful__profiles {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 30px;\n}\n.helpful__profile-avatar {\n  width: 370px;\n}\n.helpful__profile-item {\n  border: 2px solid rgb(242, 92, 58);\n  margin-bottom: 25px;\n}\n.helpful__contacts {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 20px;\n}\n.helpful__contact-subtext {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 130%;\n}\n\n.footer {\n  background-color: rgb(59, 35, 65);\n}\n.footer__wrapp {\n  padding: 30px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.footer__credits {\n  color: rgb(146, 115, 152);\n  font-family: \"CeraPro\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 130%;\n}\n.footer__helpful {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 50px;\n}\n\n@media (max-width: 1470px) {\n  .header__img-logo {\n    width: 180px;\n  }\n  .header__link-nav {\n    padding-bottom: 35px;\n  }\n  .header__link-nav:hover {\n    padding-bottom: 35px;\n  }\n  .header__list {\n    gap: 30px;\n  }\n  .header__left {\n    gap: 40px;\n  }\n  .header__btn-modal {\n    padding: 10px 15px;\n  }\n}\n@media (max-width: 1230px) {\n  .social__header {\n    display: none;\n  }\n  .call::before {\n    margin-right: 10px;\n  }\n  .header__container {\n    padding: 0 20px;\n  }\n  .header__right {\n    gap: 20px;\n  }\n  .header__btn-modal {\n    padding: 8px 17px;\n    font-size: 0px;\n  }\n  .header__btn-img {\n    display: inline;\n    display: initial;\n  }\n  .hero__title {\n    font-size: 86px;\n  }\n  .hero__static {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0;\n    padding: 15px 22px 30px 22px;\n  }\n  .about__wrapp {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  .about__cards {\n    width: 100%;\n  }\n  .about__card {\n    max-width: 100%;\n  }\n  .about__slider {\n    width: 100%;\n    max-width: none;\n  }\n  .about__slider-slide {\n    min-width: 0;\n    min-width: initial;\n    width: 100%;\n  }\n  .about__slider-transform {\n    position: static;\n    position: initial;\n    margin-top: 50px;\n  }\n  .soft__subblock {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .soft__subblock-player {\n    max-width: 100%;\n    min-width: 0;\n    min-width: initial;\n    min-height: 500px;\n  }\n}\n@media (max-width: 900px) {\n  .call__header {\n    display: none;\n  }\n  .header__img-logo {\n    display: none;\n  }\n  .header__img-logo--adaptive {\n    width: 40px;\n    display: inline;\n    display: initial;\n  }\n  .hero__title {\n    font-size: 62px;\n  }\n  .hero__static {\n    padding: 16px 12px 26px 12px;\n  }\n  .hero__static-text {\n    font-size: 14px;\n  }\n  .hero__static-text--accent {\n    font-size: 35px;\n  }\n  .title-h3 {\n    font-size: 30px;\n  }\n  .communities__img-item {\n    width: 73px;\n  }\n  .communities__subtitle {\n    font-size: 26px;\n  }\n  .communities__blocks {\n    gap: 20px;\n  }\n  .communities__item {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 calc((100% - 40px) / 2);\n            flex: 1 1 calc((100% - 40px) / 2);\n  }\n  .cards__item {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 calc((100% - 60px) / 2);\n            flex: 1 1 calc((100% - 60px) / 2);\n  }\n  .helpful__wrapp {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 70px;\n  }\n  .footer__wrapp {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 30px;\n  }\n}\n@media (max-width: 600px) {\n  .header__left {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0;\n  }\n  .header__right {\n    display: none;\n  }\n  .header__nav--none {\n    display: none;\n  }\n  .header__list {\n    gap: 40px;\n  }\n  .header__link-nav {\n    padding-bottom: 0px;\n  }\n  .header__link-nav:hover {\n    color: none;\n    border-bottom: none;\n    padding-bottom: 0px;\n  }\n  .header__img-logo {\n    display: inline;\n    display: initial;\n  }\n  .header__img-logo--adaptive {\n    display: none;\n  }\n  .header__burger {\n    display: inline;\n    display: initial;\n  }\n  .header__call--adaptive {\n    display: inline;\n    display: initial;\n  }\n  .hero {\n    min-height: auto;\n    padding: 60px 0 80px 0;\n  }\n  .hero__title {\n    font-size: 30px;\n    margin-bottom: 70px;\n    text-align: center;\n  }\n  .hero__statics {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  .hero__btn-scroll {\n    margin-top: 15px;\n  }\n  .description__btn-link {\n    width: 100%;\n  }\n  .title-h3 {\n    font-size: 22px;\n  }\n  .communities__img-item {\n    width: 46px;\n  }\n  .communities__subtitle {\n    font-size: 18px;\n  }\n  .communities__item {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 100%;\n            flex: 1 1 100%;\n  }\n  .about__slider-img {\n    width: 100px;\n  }\n  .about__slider-preview {\n    width: 10px;\n    min-height: 55px;\n  }\n  .about__slider-next {\n    width: 10px;\n    min-height: 55px;\n  }\n  .cards__item {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 calc((100% - 60px) / 1);\n            flex: 1 1 calc((100% - 60px) / 1);\n  }\n  .soft__subblock-player {\n    min-height: 250px;\n  }\n  .helpful__profiles {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .footer__helpful {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 30px;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/burger.svg */ \"./src/assets/burger.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/logo-icon.svg */ \"./src/assets/logo-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/mini-logo.svg */ \"./src/assets/mini-logo.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/telephone-icon.svg */ \"./src/assets/telephone-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/email.svg */ \"./src/assets/email.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/chef-icon.svg */ \"./src/assets/chef-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/dog.png */ \"./src/assets/dog.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/woman.png */ \"./src/assets/woman.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/masks.png */ \"./src/assets/masks.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/laughing-icon.svg */ \"./src/assets/laughing-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/pawblack-icon.svg */ \"./src/assets/pawblack-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/airplane-icon.svg */ \"./src/assets/airplane-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/football-icon.svg */ \"./src/assets/football-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/highhell-icon.svg */ \"./src/assets/highhell-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/drawing-icon.svg */ \"./src/assets/drawing-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/brain-icon.svg */ \"./src/assets/brain-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/baby-icon.svg */ \"./src/assets/baby-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide-3.png */ \"./src/assets/slide-3.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide-1.png */ \"./src/assets/slide-1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide-2.png */ \"./src/assets/slide-2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/next-icon.svg */ \"./src/assets/next-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/book.svg */ \"./src/assets/book.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/oye.svg */ \"./src/assets/oye.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/oye-close.svg */ \"./src/assets/oye-close.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/chart-icon.svg */ \"./src/assets/chart-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/heart-icon.svg */ \"./src/assets/heart-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/stars-icon.svg */ \"./src/assets/stars-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/virus-icon.svg */ \"./src/assets/virus-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/start-icon.svg */ \"./src/assets/start-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/test.mp4 */ \"./src/assets/test.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/play-icon.svg */ \"./src/assets/play-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/player.png */ \"./src/assets/player.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/man-1.png */ \"./src/assets/man-1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/man-2.png */ \"./src/assets/man-2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/logo-footer.svg */ \"./src/assets/logo-footer.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);\nvar ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);\nvar ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);\nvar ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);\nvar ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);\nvar ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);\nvar ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);\nvar ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);\nvar ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);\nvar ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);\nvar ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);\nvar ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);\nvar ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>WolfMedia</title>\\r\\n</head>\\r\\n<body>\\r\\n    <header class=\\\"header\\\">\\r\\n        <div class=\\\"header__container\\\">\\r\\n            <div class=\\\"header__wrapp\\\">\\r\\n                <div class=\\\"header__left\\\">\\r\\n                    <div class=\\\"modal-burger\\\">\\r\\n                        <div class=\\\"modal-burger__aside\\\">\\r\\n                            <nav class=\\\"header__nav\\\">\\r\\n                                <ul class=\\\"header__list header__list--burger\\\">\\r\\n                                    <li class=\\\"header__item-nav\\\">\\r\\n                                        <a class=\\\"header__link-nav header__link-nav--active header__link-nav--burger header__link-nav--burger--active\\\" href=\\\"#!\\\">о нас</a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"header__item-nav\\\">\\r\\n                                        <a class=\\\"header__link-nav header__link-nav--burger\\\" href=\\\"#!\\\">портфолио</a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"header__item-nav\\\">\\r\\n                                        <a class=\\\"header__link-nav header__link-nav--burger\\\" href=\\\"#!\\\">услуги</a>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"header__item-nav\\\">\\r\\n                                        <a class=\\\"header__link-nav header__link-nav--burger\\\" href=\\\"#!\\\">контакты</a>\\r\\n                                    </li>\\r\\n                                </ul>\\r\\n                            </nav>\\r\\n                            <a class=\\\"call call__modal\\\" href=\\\"tel: 066 000 0000\\\">+380 66 000 0000</a>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <button class=\\\"header__burger\\\">\\r\\n                        <img class=\\\"header__burger-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"burger\\\">\\r\\n                    </button>\\r\\n                    <a class=\\\"header__link-logo\\\" href=\\\"#!\\\">\\r\\n                        <img class=\\\"header__img-logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"logo\\\">\\r\\n                        <img class=\\\"header__img-logo header__img-logo--adaptive\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"logo\\\">\\r\\n                    </a>\\r\\n                    <a class=\\\"header__call header__call--adaptive\\\" href=\\\"tel: 066 000 0000\\\">\\r\\n                        <img class=\\\"header__call-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"call\\\">\\r\\n                    </a>\\r\\n                    <nav class=\\\"header__nav header__nav--none\\\">\\r\\n                        <ul class=\\\"header__list\\\">\\r\\n                            <li class=\\\"header__item-nav\\\">\\r\\n                                <a class=\\\"header__link-nav header__link-nav--active\\\" href=\\\"#!\\\">о нас</a>\\r\\n                            </li>\\r\\n                            <li class=\\\"header__item-nav\\\">\\r\\n                                <a class=\\\"header__link-nav\\\" href=\\\"#!\\\">портфолио</a>\\r\\n                            </li>\\r\\n                            <li class=\\\"header__item-nav\\\">\\r\\n                                <a class=\\\"header__link-nav\\\" href=\\\"#!\\\">услуги</a>\\r\\n                            </li>\\r\\n                            <li class=\\\"header__item-nav\\\">\\r\\n                                <a class=\\\"header__link-nav\\\" href=\\\"#!\\\">контакты</a>\\r\\n                            </li>\\r\\n                        </ul>\\r\\n                    </nav>\\r\\n                </div>\\r\\n                <div class=\\\"header__right\\\">\\r\\n                    <div class=\\\"social social__header\\\">\\r\\n                        <a class=\\\"link__social\\\" href=\\\"#!\\\">\\r\\n                            <svg class=\\\"social__svg\\\" id=\\\"Layer_1\\\" viewBox=\\\"0 0 512 512\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" data-name=\\\"Layer 1\\\"><path d=\\\"m255.2079 8.2075c-136.171 0-247.0079 110.8379-247.0079 247.0098 0 137.751 110.8371 248.5889 247.0081 248.5889a248.0036 248.0036 0 0 0 248.5919-248.5889c0-136.1719-110.8371-247.01-248.5923-247.01zm126.6708 273.9225c11.0844 11.0879 23.7514 22.1689 33.2517 34.8359a70.3888 70.3888 0 0 1 12.667 17.418c4.75 9.5019 0 19.0039-7.9169 20.583h-50.6688c-12.667 0-23.7506-4.751-31.6675-14.2461-7.9169-6.3369-14.25-14.2529-20.5839-22.169-3.1667-3.165-6.3335-4.7509-9.5-7.916-6.3335-4.7509-12.667-3.1718-17.4171 4.751q-4.75 9.4952-4.75 23.7481c0 11.081-4.75 14.2529-15.8345 15.832-25.334 0-50.668-3.1651-72.8353-15.832-20.5838-12.667-34.835-28.4991-49.0854-45.917a629.6126 629.6126 0 0 1 -63.335-115.5889c-4.75-7.916-1.5833-12.667 7.9169-14.2529h50.668c6.3335 1.5859 11.0836 4.7509 12.667 11.0879a382.7254 382.7254 0 0 0 33.2517 61.749c4.75 6.3369 7.9168 11.0879 12.667 14.2529 6.3335 4.751 11.0836 3.165 14.25-3.165 1.5834-4.751 1.5834-9.502 3.1668-12.667 0-15.8389 1.5834-31.6709-1.5834-45.9239-1.5834-9.4951-6.3335-15.832-15.8337-17.4111-4.75-1.5859-4.75-3.1719-1.5834-6.3369 3.1667-4.751 7.9169-7.916 15.8337-7.916h57.0014c7.9177 1.5859 11.0845 6.33 12.6678 15.832v63.335c-1.5833 3.1719 1.5834 14.2529 7.9169 15.8388 4.75 1.5791 7.9169-1.5859 11.0836-4.7509 14.25-15.8389 23.7506-33.2569 31.6675-50.668 4.75-7.9229 7.9169-15.8389 11.0836-23.7549 1.5834-6.33 6.3335-9.5019 12.667-9.5019h55.4186c1.5833 0 3.1667 0 4.75 1.5859 9.5 1.5859 12.667 4.751 9.5 14.2529-4.75 14.2461-14.25 25.334-22.1672 38.001q-14.25 19-28.5016 38.001c-7.9169 11.081-7.9169 17.418 3.1668 26.9131z\\\" fill-rule=\\\"evenodd\\\"/></svg>\\r\\n                        </a>\\r\\n                        <a class=\\\"link__social\\\" href=\\\"#!\\\">\\r\\n                            <svg class=\\\"social__svg\\\" id=\\\"Capa_1\\\" enable-background=\\\"new 0 0 97.75 97.75\\\" viewBox=\\\"0 0 97.75 97.75\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><g><g><path d=\\\"m48.921 40.507c4.667-.017 8.384-3.766 8.367-8.443-.017-4.679-3.742-8.402-8.411-8.406-4.708-.005-8.468 3.787-8.432 8.508.035 4.66 3.794 8.358 8.476 8.341z\\\"/><path d=\\\"m48.875 0c-26.993 0-48.875 21.883-48.875 48.875s21.882 48.875 48.875 48.875 48.875-21.883 48.875-48.875-21.882-48.875-48.875-48.875zm.07 14.863c9.52.026 17.161 7.813 17.112 17.438-.048 9.403-7.814 17.024-17.318 16.992-9.407-.032-17.122-7.831-17.066-17.253.053-9.525 7.772-17.203 17.272-17.177zm19.282 41.194c-2.105 2.161-4.639 3.725-7.453 4.816-2.66 1.031-5.575 1.55-8.461 1.896.437.474.642.707.914.979 3.916 3.937 7.851 7.854 11.754 11.802 1.33 1.346 1.607 3.014.875 4.577-.799 1.71-2.592 2.834-4.351 2.713-1.114-.077-1.983-.63-2.754-1.407-2.956-2.974-5.968-5.895-8.862-8.925-.845-.882-1.249-.714-1.994.052-2.973 3.062-5.995 6.075-9.034 9.072-1.365 1.346-2.989 1.59-4.573.82-1.683-.814-2.753-2.533-2.671-4.262.058-1.166.632-2.06 1.434-2.858 3.877-3.869 7.742-7.75 11.608-11.628.257-.257.495-.53.868-.93-5.273-.551-10.028-1.849-14.099-5.032-.506-.396-1.027-.778-1.487-1.222-1.783-1.711-1.962-3.672-.553-5.69 1.207-1.728 3.231-2.19 5.336-1.197.408.191.796.433 1.168.689 7.586 5.213 18.008 5.356 25.624.233.754-.576 1.561-1.05 2.496-1.289 1.816-.468 3.512.201 4.486 1.791 1.115 1.817 1.102 3.589-.271 5z\\\"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>\\r\\n                            </svg>\\r\\n                        </a>\\r\\n                        <a class=\\\"link__social\\\" href=\\\"#!\\\">\\r\\n                            <svg class=\\\"social__svg\\\" id=\\\"Capa_1\\\" enable-background=\\\"new 0 0 97.75 97.75\\\" viewBox=\\\"0 0 97.75 97.75\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><g><path d=\\\"m48.875 0c-26.993 0-48.875 21.882-48.875 48.875s21.882 48.875 48.875 48.875 48.875-21.882 48.875-48.875-21.882-48.875-48.875-48.875zm18.646 24.89-6.76.003c-5.301 0-6.326 2.519-6.326 6.215v8.15h12.641l-.006 12.765h-12.634v32.758h-13.185v-32.758h-11.022v-12.765h11.022v-9.414c0-10.925 6.675-16.875 16.42-16.875l9.851.015v11.906z\\\"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>\\r\\n                        </a>\\r\\n                        <a class=\\\"link__social\\\" href=\\\"#!\\\">\\r\\n                            <svg class=\\\"social__svg\\\" viewBox=\\\"0 0 512 512\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0\\\"/></svg>\\r\\n                        </a>\\r\\n                    </div>\\r\\n                    <a class=\\\"call call__header\\\" href=\\\"tel: 066 000 0000\\\">+380 66 000 0000</a>\\r\\n                    <button class=\\\"header__btn-modal\\\">Написать нам\\r\\n                        <img class=\\\"header__btn-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"email\\\">\\r\\n                    </button>\\r\\n                    <div class=\\\"modal-sign\\\">\\r\\n                        <div class=\\\"modal-sign__block\\\">\\r\\n                            <h3 class=\\\"modal-sign__title\\\">Написать нам</h3>\\r\\n                            <form class=\\\"modal-sign__form\\\" method=\\\"get\\\" action=\\\"#\\\">\\r\\n                                <fieldset class=\\\"modal-sign__fieldset\\\">\\r\\n                                    <input class=\\\"modal-sign__input\\\" id=\\\"input-name\\\" type=\\\"text\\\" title=\\\"Використовуються лише латинські літери\\\" placeholder=\\\"Ваше имя\\\" pattern=\\\"[A-Za-z]+\\\" minlength=\\\"4\\\" required>\\r\\n                                    <input class=\\\"modal-sign__input\\\" id=\\\"input-phone\\\" type=\\\"text\\\" pattern=\\\"0\\\\d{9}\\\" title=\\\"Приклад: 066*******\\\" placeholder=\\\"Ваш телефон\\\" required>\\r\\n                                    <textarea class=\\\"modal-sign__textarea\\\" id=\\\"input-text\\\" name=\\\"message\\\" id=\\\"\\\" cols=\\\"30\\\" rows=\\\"10\\\" placeholder=\\\"Ваше сообщение\\\" minlength=\\\"30\\\" required></textarea>\\r\\n                                    <button class=\\\"modal-sign__submit\\\" type=\\\"submit\\\">отправить</button>\\r\\n                                </fieldset>\\r\\n                            </form>\\r\\n                            <p class=\\\"modal-sign__subtext\\\">\\r\\n                                Нажимая кнопку “Отправить” вы даёте своё согласие на обработку персональных данных\\r\\n                            </p>\\r\\n                            <button class=\\\"modal-sign__close\\\">\\r\\n                                <svg enable-background=\\\"new 0 0 512 512\\\" viewBox=\\\"0 0 512 512\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"m292.2 256 109.9-109.9c10-10 10-26.2 0-36.2s-26.2-10-36.2 0l-109.9 109.9-109.9-109.9c-10-10-26.2-10-36.2 0s-10 26.2 0 36.2l109.9 109.9-109.9 109.9c-10 10-10 26.2 0 36.2 5 5 11.55 7.5 18.1 7.5s13.1-2.5 18.1-7.5l109.9-109.9 109.9 109.9c5 5 11.55 7.5 18.1 7.5s13.1-2.5 18.1-7.5c10-10 10-26.2 0-36.2z\\\"></path>\\r\\n                                </svg>\\r\\n                            </button>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </header>\\r\\n    <main>\\r\\n        <div class=\\\"hero\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <div class=\\\"hero__wrapp\\\">\\r\\n                    <h1 class=\\\"hero__title\\\">Издательство<br>новых медиа</h1>\\r\\n                    <div class=\\\"hero__statics\\\">\\r\\n                        <div class=\\\"hero__static\\\">\\r\\n                            <span class=\\\"hero__static-text hero__static-text--accent\\\">100 000 000</span>\\r\\n                            <span class=\\\"hero__static-text\\\">наша аудитория</span>\\r\\n                        </div>\\r\\n                        <div class=\\\"hero__static\\\">\\r\\n                            <span class=\\\"hero__static-text hero__static-text--accent\\\">12 000 000</span>\\r\\n                            <span class=\\\"hero__static-text\\\">ежедневно нас читают</span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <a href=\\\"#hero-scroll\\\" class=\\\"hero__btn-scroll\\\">\\r\\n                        <svg class=\\\"hero__scroll-svg\\\" id=\\\"Layer_1\\\" enable-background=\\\"new 0 0 64 64\\\" viewBox=\\\"0 0 64 64\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"m48.5 20.8c-5.1 5.1-10.1 10.2-15.2 15.3-.3.3-.5.5-.8.8-4.6-4.6-9.2-9.2-13.9-13.9-.7-.7-1.5-1.5-2.2-2.2-1.8-1.8-4.7 1-2.8 2.8l15.3 15.3 2.2 2.2c.8.8 2.1.8 2.8 0 5.1-5.1 10.2-10.1 15.3-15.2.7-.7 1.5-1.5 2.2-2.2 1.8-1.8-1-4.7-2.9-2.9z\\\"/></svg>\\r\\n                    </a>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n        <section class=\\\"description\\\" id=\\\"hero-scroll\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <div class=\\\"description__wrapp\\\">\\r\\n                    <h3 class=\\\"title-h3 title-h3--center\\\">о нас</h3>\\r\\n                    <div class=\\\"description__paragraphs\\\">\\r\\n                        <p class=\\\"description__paragraph\\\">\\r\\n                            «Wolfmedia» – это редакция, где ежедневно авторы, иллюстраторы, дизайнеры, видеографы, создают уникальный контент и доносят его до огромной аудитории с помощью социальных сетей. \\r\\n                        </p>\\r\\n                        <p class=\\\"description__paragraph\\\">\\r\\n                            Социальные сети стали главным инструменом коммуникации в 21 веке. Сообщества, паблики,youtube-каналы, блоги получают внимание миллионной аудитории, зачастую их охват превышаетохват популярных телеканалов и журналов.\\r\\n                        </p>\\r\\n                        <p class=\\\"description__paragraph\\\">\\r\\n                            И пока традиционные СМИ занимаются перетаскивание аудитории с одной площадки надругую, мы идем прямо к читателю, в его новостнуюленту.\\r\\n                        </p>\\r\\n                    </div>\\r\\n                    <a class=\\\"description__btn-link\\\" href=\\\"#!\\\">подробнее</a>\\r\\n                </div>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"communities\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <div class=\\\"communities__wrapp\\\">\\r\\n                    <h3 class=\\\"title-h3\\\">Более 150 тематических сообществ</h3>\\r\\n                    <div class=\\\"communities__blocks\\\">\\r\\n                            <button class=\\\"communities__item\\\">\\r\\n                                <img class=\\\"communities__img-item\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"img\\\">\\r\\n                                <span class=\\\"communities__subtitle\\\">кулинария</span>\\r\\n                                    <div class=\\\"communities__modal\\\">\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"dog\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Дай лапу</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"woman\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Пушистие лапки</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"masks\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Мокрый нос</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                    </div>\\r\\n                            </button>\\r\\n                            <button class=\\\"communities__item\\\">\\r\\n                                <img class=\\\"communities__img-item\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"img\\\">\\r\\n                                <span class=\\\"communities__subtitle\\\">Юмор</span>\\r\\n                                 <div class=\\\"communities__modal\\\">\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"dog\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Дай лапу</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"woman\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Пушистие лапки</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"masks\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Мокрый нос</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                    </div>\\r\\n                                </button>\\r\\n                            <button class=\\\"communities__item\\\">\\r\\n                                <img class=\\\"communities__img-item\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"img\\\">\\r\\n                                <span class=\\\"communities__subtitle\\\">Животные</span>\\r\\n                                 <div class=\\\"communities__modal\\\">\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"dog\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Дай лапу</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"woman\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Пушистие лапки</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"masks\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Мокрый нос</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                    </div>\\r\\n                            </button>\\r\\n                            <button class=\\\"communities__item\\\">\\r\\n                                <img class=\\\"communities__img-item\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"img\\\">\\r\\n                                <span class=\\\"communities__subtitle\\\">Путешествия</span>\\r\\n                                 <div class=\\\"communities__modal\\\">\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"dog\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Дай лапу</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"woman\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Пушистие лапки</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"masks\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Мокрый нос</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                    </div>\\r\\n                            </button>\\r\\n                            <button class=\\\"communities__item\\\">\\r\\n                                <img class=\\\"communities__img-item\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"img\\\">\\r\\n                                <span class=\\\"communities__subtitle\\\">Спорт</span>\\r\\n                                 <div class=\\\"communities__modal\\\">\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"dog\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Дай лапу</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"woman\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Пушистие лапки</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"masks\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Мокрый нос</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                    </div>\\r\\n                            </button>\\r\\n                            <button class=\\\"communities__item\\\">\\r\\n                                <img class=\\\"communities__img-item\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"img\\\">\\r\\n                                <span class=\\\"communities__subtitle\\\">Для женщин</span>\\r\\n                                 <div class=\\\"communities__modal\\\">\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"dog\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Дай лапу</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"woman\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Пушистие лапки</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"masks\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Мокрый нос</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                    </div>\\r\\n                                </button>\\r\\n                            <button class=\\\"communities__item\\\">\\r\\n                                <img class=\\\"communities__img-item\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"img\\\">\\r\\n                                <span class=\\\"communities__subtitle\\\">Дизайн</span>\\r\\n                                 <div class=\\\"communities__modal\\\">\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"dog\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Дай лапу</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"woman\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Пушистие лапки</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"masks\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Мокрый нос</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                    </div>\\r\\n                            </button>\\r\\n                            <button class=\\\"communities__item\\\">\\r\\n                                <img class=\\\"communities__img-item\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"img\\\">\\r\\n                                <span class=\\\"communities__subtitle\\\">Познавательно</span>\\r\\n                                 <div class=\\\"communities__modal\\\">\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"dog\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Дай лапу</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"woman\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Пушистие лапки</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"masks\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Мокрый нос</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                    </div>\\r\\n                            </button>\\r\\n                            <button class=\\\"communities__item\\\">\\r\\n                                <img class=\\\"communities__img-item\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" alt=\\\"img\\\">\\r\\n                                <span class=\\\"communities__subtitle\\\">Материнство</span>\\r\\n                                 <div class=\\\"communities__modal\\\">\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"dog\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Дай лапу</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"woman\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Пушистие лапки</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                        <a class=\\\"communities__modal-link\\\" href=\\\"#!\\\">\\r\\n                                            <div class=\\\"communities__modal-item\\\">\\r\\n                                                <img class=\\\"communities__modal-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"masks\\\">\\r\\n                                                <span class=\\\"communities__modal-subtitle\\\">Мокрый нос</span>\\r\\n                                            </div>\\r\\n                                        </a>\\r\\n                                    </div>\\r\\n                            </button>\\r\\n                    </div>\\r\\n                    <p class=\\\"communities__subtext\\\">Присутствуем на всех популярных платформах</p>\\r\\n                </div>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"about\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <h3 class=\\\"title-h3\\\">Как мы работаем</h3>\\r\\n                <div class=\\\"about__wrapp\\\">\\r\\n                    <div class=\\\"about__cards\\\">\\r\\n                        <div class=\\\"about__card\\\">\\r\\n                            <p class=\\\"about__text\\\"><span class=\\\"about__text--accent\\\">50 штатных специалистов </span>по SSM</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"about__card\\\">\\r\\n                            <p class=\\\"about__text\\\">Производят <span class=\\\"about__text--accent\\\">контент</span> в соответствии с <span class=\\\"about__text--accent\\\">редполитикой</span></p>\\r\\n                        </div>\\r\\n                        <div class=\\\"about__card\\\">\\r\\n                            <p class=\\\"about__text\\\">Ежедневно выпускают <span class=\\\"about__text--accent\\\">2000 постов и 162 видео</span></p>\\r\\n                        </div>\\r\\n                        <div class=\\\"about__card\\\">\\r\\n                            <p class=\\\"about__text\\\">Все материалы проходят внешнюю <span class=\\\"about__text--accent\\\">проверку на уникальность</span></p>\\r\\n                        </div>\\r\\n                        <div class=\\\"about__card\\\">\\r\\n                            <p class=\\\"about__text\\\">Собственный софт собирает <span class=\\\"about__text--accent\\\">полную статистику</span> по активности сооществ и качеству контента</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"about__card\\\">\\r\\n                            <p class=\\\"about__text\\\">Арт-директор следит за соблюдением <span class=\\\"about__text--accent\\\">стилистики группы</span></p>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\\"about__slider\\\">\\r\\n                        <div class=\\\"about__slider-block\\\">\\r\\n                            <img class=\\\"about__slider-slide\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" alt=\\\"slide-active\\\">\\r\\n                        </div>\\r\\n                        <div class=\\\"about__slider-transform\\\">\\r\\n                            <div class=\\\"about__slider-section\\\">\\r\\n                                <img class=\\\"about__slider-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"slide\\\">\\r\\n                                <img class=\\\"about__slider-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"slide\\\">\\r\\n                                <img class=\\\"about__slider-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" alt=\\\"slide\\\">\\r\\n                                <img class=\\\"about__slider-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"slide\\\">\\r\\n                            </div>\\r\\n                            <div class=\\\"about__slider-section\\\">\\r\\n                                <img class=\\\"about__slider-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"slide\\\">\\r\\n                                <img class=\\\"about__slider-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"slide\\\">\\r\\n                                <img class=\\\"about__slider-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" alt=\\\"slide\\\">\\r\\n                                <img class=\\\"about__slider-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"slide\\\">\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <button class=\\\"about__slider-preview\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" alt=\\\"next\\\">\\r\\n                        </button>\\r\\n                        <button class=\\\"about__slider-next\\\">\\r\\n                             <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" alt=\\\"preview\\\">\\r\\n                        </button>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"advertisement\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <h3 class=\\\"title-h3\\\">Помогаем брендам наладить коммуникацию с аудиторией</h3>\\r\\n                <div class=\\\"advertisement__wrapp\\\">\\r\\n                    <div class=\\\"advertisement__text\\\">\\r\\n                        <p class=\\\"advertisement__paragraph\\\">Социальные сети - идеальная площадка для размещения нативной рекламы, она встраивается в ленту пользователя, вызывает большее доверие у аудитории, обходит блокировщики рекламы, и органически набирает огромные охваты.</p>\\r\\n                    </div>\\r\\n                    <div class=\\\"cards\\\">\\r\\n                        <div class=\\\"cards__item\\\">\\r\\n                            <div class=\\\"cards__block-1\\\">\\r\\n                                <img class=\\\"cards__img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\" alt=\\\"add\\\">\\r\\n                            </div>\\r\\n                            <div class=\\\"cards__block-2\\\">\\r\\n                                <span class=\\\"cards__subtext\\\">Создаем контент</span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <div class=\\\"cards__item\\\">\\r\\n                            <div class=\\\"cards__block-1\\\">\\r\\n                                <img class=\\\"cards__img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\" alt=\\\"add\\\">\\r\\n                            </div>\\r\\n                            <div class=\\\"cards__block-2\\\">\\r\\n                                <span class=\\\"cards__subtext\\\">Размещаем нативную рекламу</span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <div class=\\\"cards__item\\\">\\r\\n                            <div class=\\\"cards__block-1\\\">\\r\\n                                <img class=\\\"cards__img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\" alt=\\\"add\\\">\\r\\n                            </div>\\r\\n                            <div class=\\\"cards__block-2\\\">\\r\\n                                <span class=\\\"cards__subtext\\\">Разрабатываем спецпроекты</span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <a href=\\\"#!\\\" class=\\\"advertisement__btn\\\">Рекламное сотрудничество</a>\\r\\n                </div>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"soft\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <h3 class=\\\"title-h3\\\">Мы полностью автоматизировали работу по управлению сообществами</h3>\\r\\n                <div class=\\\"soft__wrapp\\\">\\r\\n                    <p class=\\\"soft__mini-title\\\">Чем больше сообществ в активе, тем больше времени требуется на планирование, ведение и сбор статистики.</p>\\r\\n                    <p class=\\\"soft__title soft__title--bottom\\\">Мы подошли к решению этой проблемы технологично - разработали собственный софт, который:</p>\\r\\n                    <div class=\\\"cards\\\">\\r\\n                        <div class=\\\"cards__item\\\">\\r\\n                            <div class=\\\"cards__block-1 cards__block-1-soft\\\">\\r\\n                                <img class=\\\"cards__img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" alt=\\\"add\\\">\\r\\n                            </div>\\r\\n                            <div class=\\\"cards__block-2 cards__block-2-soft\\\">\\r\\n                                <span class=\\\"cards__subtext cards__subtext-soft\\\">Даёт доступ к <span class=\\\"cards__subtext--accent\\\">детальной статистике</span>, как одной группы, так и всех сообществ вместе</span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <div class=\\\"cards__item\\\">\\r\\n                            <div class=\\\"cards__block-1 cards__block-1-soft\\\">\\r\\n                                <img class=\\\"cards__img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_25___ + \"\\\" alt=\\\"add\\\">\\r\\n                            </div>\\r\\n                            <div class=\\\"cards__block-2 cards__block-2-soft\\\">\\r\\n                                <span class=\\\"cards__subtext cards__subtext-soft\\\">Выявляет наиболее<span class=\\\"cards__subtext--accent\\\"> популярные посты</span></span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <div class=\\\"cards__item\\\">\\r\\n                            <div class=\\\"cards__block-1 cards__block-1-soft\\\">\\r\\n                                <img class=\\\"cards__img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_26___ + \"\\\" alt=\\\"add\\\">\\r\\n                            </div>\\r\\n                            <div class=\\\"cards__block-2 cards__block-2-soft\\\">\\r\\n                                <span class=\\\"cards__subtext cards__subtext-soft\\\">Позволяет оценивать<span class=\\\"cards__subtext--accent\\\"> качество контента</span> и следить за авторами постов</span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <div class=\\\"cards__item\\\">\\r\\n                            <div class=\\\"cards__block-1 cards__block-1-soft\\\">\\r\\n                                <img class=\\\"cards__img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_27___ + \"\\\" alt=\\\"add\\\">\\r\\n                            </div>\\r\\n                            <div class=\\\"cards__block-2 cards__block-2-soft\\\">\\r\\n                                <span class=\\\"cards__subtext cards__subtext-soft\\\">Сообщает об <span class=\\\"cards__subtext--accent\\\"> ошибках</span></span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\\"soft__subblock\\\">\\r\\n                        <div class=\\\"soft__subblock-description\\\">\\r\\n                            <p class=\\\"soft__title\\\">Услуги для администраторов</p>\\r\\n                            <div class=\\\"soft__subblock-cards\\\">\\r\\n                                <div class=\\\"soft__subblock-card\\\">\\r\\n                                    <img  class=\\\"soft__subblock-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_28___ + \"\\\" alt=\\\"icon\\\">\\r\\n                                    <span class=\\\"soft__subblock-text\\\">Контент и развитие</span>\\r\\n                                </div>\\r\\n                                <div class=\\\"soft__subblock-card\\\">\\r\\n                                    <img  class=\\\"soft__subblock-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_28___ + \"\\\" alt=\\\"icon\\\">\\r\\n                                    <span class=\\\"soft__subblock-text\\\">Контент и развитие</span>\\r\\n                                </div>\\r\\n                                <div class=\\\"soft__subblock-card\\\">\\r\\n                                    <img  class=\\\"soft__subblock-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_28___ + \"\\\" alt=\\\"icon\\\">\\r\\n                                    <span class=\\\"soft__subblock-text\\\">Контент и развитие</span>\\r\\n                                </div>\\r\\n                                <a class=\\\"soft__subblock-btn\\\" href=\\\"#!\\\">подробнее</a>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <div class=\\\"soft__subblock-player\\\">\\r\\n                            <video class=\\\"soft__subblock-video\\\" controls>\\r\\n                                <source class=\\\"soft__subblock-src\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_29___ + \"\\\" type=\\\"video/mp4\\\">\\r\\n                            </video>\\r\\n                            <button class=\\\"soft__subblock-play\\\">\\r\\n                                <img class=\\\"soft__subblock-img-play\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_30___ + \"\\\" alt=\\\"play\\\">\\r\\n                            </button>\\r\\n                            <img class=\\\"soft__subblock-bg\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_31___ + \"\\\" alt=\\\"bg-player\\\">\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"helpful\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <h3 class=\\\"title-h3\\\">Есть вопрос или предложение?</h3>\\r\\n                <span class=\\\"helpful__subtitle\\\">Напиши нам!</span>\\r\\n                <div class=\\\"helpful__wrapp\\\">\\r\\n                    <div class=\\\"helpful__profiles\\\">\\r\\n                        <div class=\\\"helpful__profile\\\">\\r\\n                            <div class=\\\"helpful__profile-item\\\">\\r\\n                                <img class=\\\"helpful__profile-avatar\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_32___ + \"\\\" alt=\\\"avatar\\\">\\r\\n                            </div>\\r\\n                            <a class=\\\"helpful-email\\\" href=\\\"mailto:aa@wolfmedia.team\\\">aa@wolfmedia.team</a>\\r\\n                        </div>\\r\\n                        <div class=\\\"helpful__profile\\\">\\r\\n                            <div class=\\\"helpful__profile-item\\\">\\r\\n                                <img class=\\\"helpful__profile-avatar\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_33___ + \"\\\" alt=\\\"avatar\\\">\\r\\n                            </div>\\r\\n                            <a class=\\\"helpful-email\\\" href=\\\"mailto:aa@wolfmedia.team\\\">aa@wolfmedia.team</a>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\\"helpful__contacts\\\">\\r\\n                        <div class=\\\"helpful__contact\\\">\\r\\n                            <a class=\\\"helpful-email helpful-email--contact\\\" href=\\\"mailto:aa@wolfmedia.team\\\">aa@wolfmedia.team</a>\\r\\n                            <span class=\\\"helpful__contact-subtext\\\">по вопросам размещения рекламы и рекламных спецпроектов</span>\\r\\n                        </div>\\r\\n                        <div class=\\\"helpful__contact\\\">\\r\\n                            <a class=\\\"helpful-email helpful-email--contact\\\" href=\\\"mailto:aa@wolfmedia.team\\\">aa@wolfmedia.team</a>\\r\\n                            <span class=\\\"helpful__contact-subtext\\\">по вопросам размещения рекламы и рекламных спецпроектов</span>\\r\\n                        </div>\\r\\n                        <div class=\\\"helpful__contact\\\">\\r\\n                            <a class=\\\"helpful-email helpful-email--contact\\\" href=\\\"mailto:aa@wolfmedia.team\\\">aa@wolfmedia.team</a>\\r\\n                            <span class=\\\"helpful__contact-subtext\\\">по вопросам размещения рекламы и рекламных спецпроектов</span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </section>\\r\\n    </main>\\r\\n    <footer class=\\\"footer\\\">\\r\\n        <div class=\\\"container\\\">\\r\\n            <div class=\\\"footer__wrapp\\\">\\r\\n                <a class=\\\"footer__link-logo\\\" href=\\\"#!\\\">\\r\\n                    <img class=\\\"footer__logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_34___ + \"\\\" alt=\\\"logo\\\">\\r\\n                </a>\\r\\n                <p class=\\\"footer__credits\\\">Copyright 2019 (c) All rights reserved.</p>\\r\\n                <div class=\\\"footer__helpful\\\">\\r\\n                    <div class=\\\"social\\\">\\r\\n                        <a class=\\\"link__social\\\" href=\\\"#!\\\">\\r\\n                            <svg class=\\\"social__svg\\\" id=\\\"Layer_1\\\" viewBox=\\\"0 0 512 512\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" data-name=\\\"Layer 1\\\"><path d=\\\"m255.2079 8.2075c-136.171 0-247.0079 110.8379-247.0079 247.0098 0 137.751 110.8371 248.5889 247.0081 248.5889a248.0036 248.0036 0 0 0 248.5919-248.5889c0-136.1719-110.8371-247.01-248.5923-247.01zm126.6708 273.9225c11.0844 11.0879 23.7514 22.1689 33.2517 34.8359a70.3888 70.3888 0 0 1 12.667 17.418c4.75 9.5019 0 19.0039-7.9169 20.583h-50.6688c-12.667 0-23.7506-4.751-31.6675-14.2461-7.9169-6.3369-14.25-14.2529-20.5839-22.169-3.1667-3.165-6.3335-4.7509-9.5-7.916-6.3335-4.7509-12.667-3.1718-17.4171 4.751q-4.75 9.4952-4.75 23.7481c0 11.081-4.75 14.2529-15.8345 15.832-25.334 0-50.668-3.1651-72.8353-15.832-20.5838-12.667-34.835-28.4991-49.0854-45.917a629.6126 629.6126 0 0 1 -63.335-115.5889c-4.75-7.916-1.5833-12.667 7.9169-14.2529h50.668c6.3335 1.5859 11.0836 4.7509 12.667 11.0879a382.7254 382.7254 0 0 0 33.2517 61.749c4.75 6.3369 7.9168 11.0879 12.667 14.2529 6.3335 4.751 11.0836 3.165 14.25-3.165 1.5834-4.751 1.5834-9.502 3.1668-12.667 0-15.8389 1.5834-31.6709-1.5834-45.9239-1.5834-9.4951-6.3335-15.832-15.8337-17.4111-4.75-1.5859-4.75-3.1719-1.5834-6.3369 3.1667-4.751 7.9169-7.916 15.8337-7.916h57.0014c7.9177 1.5859 11.0845 6.33 12.6678 15.832v63.335c-1.5833 3.1719 1.5834 14.2529 7.9169 15.8388 4.75 1.5791 7.9169-1.5859 11.0836-4.7509 14.25-15.8389 23.7506-33.2569 31.6675-50.668 4.75-7.9229 7.9169-15.8389 11.0836-23.7549 1.5834-6.33 6.3335-9.5019 12.667-9.5019h55.4186c1.5833 0 3.1667 0 4.75 1.5859 9.5 1.5859 12.667 4.751 9.5 14.2529-4.75 14.2461-14.25 25.334-22.1672 38.001q-14.25 19-28.5016 38.001c-7.9169 11.081-7.9169 17.418 3.1668 26.9131z\\\" fill-rule=\\\"evenodd\\\"/></svg>\\r\\n                        </a>\\r\\n                        <a class=\\\"link__social\\\" href=\\\"#!\\\">\\r\\n                            <svg class=\\\"social__svg\\\" id=\\\"Capa_1\\\" enable-background=\\\"new 0 0 97.75 97.75\\\" viewBox=\\\"0 0 97.75 97.75\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><g><g><path d=\\\"m48.921 40.507c4.667-.017 8.384-3.766 8.367-8.443-.017-4.679-3.742-8.402-8.411-8.406-4.708-.005-8.468 3.787-8.432 8.508.035 4.66 3.794 8.358 8.476 8.341z\\\"/><path d=\\\"m48.875 0c-26.993 0-48.875 21.883-48.875 48.875s21.882 48.875 48.875 48.875 48.875-21.883 48.875-48.875-21.882-48.875-48.875-48.875zm.07 14.863c9.52.026 17.161 7.813 17.112 17.438-.048 9.403-7.814 17.024-17.318 16.992-9.407-.032-17.122-7.831-17.066-17.253.053-9.525 7.772-17.203 17.272-17.177zm19.282 41.194c-2.105 2.161-4.639 3.725-7.453 4.816-2.66 1.031-5.575 1.55-8.461 1.896.437.474.642.707.914.979 3.916 3.937 7.851 7.854 11.754 11.802 1.33 1.346 1.607 3.014.875 4.577-.799 1.71-2.592 2.834-4.351 2.713-1.114-.077-1.983-.63-2.754-1.407-2.956-2.974-5.968-5.895-8.862-8.925-.845-.882-1.249-.714-1.994.052-2.973 3.062-5.995 6.075-9.034 9.072-1.365 1.346-2.989 1.59-4.573.82-1.683-.814-2.753-2.533-2.671-4.262.058-1.166.632-2.06 1.434-2.858 3.877-3.869 7.742-7.75 11.608-11.628.257-.257.495-.53.868-.93-5.273-.551-10.028-1.849-14.099-5.032-.506-.396-1.027-.778-1.487-1.222-1.783-1.711-1.962-3.672-.553-5.69 1.207-1.728 3.231-2.19 5.336-1.197.408.191.796.433 1.168.689 7.586 5.213 18.008 5.356 25.624.233.754-.576 1.561-1.05 2.496-1.289 1.816-.468 3.512.201 4.486 1.791 1.115 1.817 1.102 3.589-.271 5z\\\"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>\\r\\n                            </svg>\\r\\n                        </a>\\r\\n                        <a class=\\\"link__social\\\" href=\\\"#!\\\">\\r\\n                            <svg class=\\\"social__svg\\\" id=\\\"Capa_1\\\" enable-background=\\\"new 0 0 97.75 97.75\\\" viewBox=\\\"0 0 97.75 97.75\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><g><path d=\\\"m48.875 0c-26.993 0-48.875 21.882-48.875 48.875s21.882 48.875 48.875 48.875 48.875-21.882 48.875-48.875-21.882-48.875-48.875-48.875zm18.646 24.89-6.76.003c-5.301 0-6.326 2.519-6.326 6.215v8.15h12.641l-.006 12.765h-12.634v32.758h-13.185v-32.758h-11.022v-12.765h11.022v-9.414c0-10.925 6.675-16.875 16.42-16.875l9.851.015v11.906z\\\"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>\\r\\n                        </a>\\r\\n                        <a class=\\\"link__social\\\" href=\\\"#!\\\">\\r\\n                            <svg class=\\\"social__svg\\\" viewBox=\\\"0 0 512 512\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0\\\"/></svg>\\r\\n                        </a>\\r\\n                    </div>\\r\\n                     <a class=\\\"call call--footer\\\" href=\\\"tel: 066 000 0000\\\">+380 66 000 0000</a>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </footer>\\r\\n</body>\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/airplane-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/airplane-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\airplane-icon.a61e3cff538a07a8c660.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/airplane-icon.svg?");

/***/ }),

/***/ "./src/assets/baby-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/baby-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\baby-icon.02977d2607b8840710a7.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/baby-icon.svg?");

/***/ }),

/***/ "./src/assets/book.svg":
/*!*****************************!*\
  !*** ./src/assets/book.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\book.3c6e86be5e7d6e3a6114.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/book.svg?");

/***/ }),

/***/ "./src/assets/brain-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/brain-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\brain-icon.0ccbfd96689f03970a0c.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/brain-icon.svg?");

/***/ }),

/***/ "./src/assets/burger.svg":
/*!*******************************!*\
  !*** ./src/assets/burger.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\burger.e62aea4f28687b6b9a78.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/burger.svg?");

/***/ }),

/***/ "./src/assets/chart-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/chart-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\chart-icon.22ed85476528d67db7b3.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/chart-icon.svg?");

/***/ }),

/***/ "./src/assets/chef-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/chef-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\chef-icon.fc9288aea22f3a667f61.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/chef-icon.svg?");

/***/ }),

/***/ "./src/assets/dog.png":
/*!****************************!*\
  !*** ./src/assets/dog.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\dog.e51d694514f25c3a21d9.png\";\n\n//# sourceURL=webpack://webpack/./src/assets/dog.png?");

/***/ }),

/***/ "./src/assets/drawing-icon.svg":
/*!*************************************!*\
  !*** ./src/assets/drawing-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\drawing-icon.fb96e3f96aa402e2dc39.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/drawing-icon.svg?");

/***/ }),

/***/ "./src/assets/email.svg":
/*!******************************!*\
  !*** ./src/assets/email.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\email.22cfe103c58dd745d992.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/email.svg?");

/***/ }),

/***/ "./src/assets/football-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/football-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\football-icon.1d0bc90a21b8ffe04e71.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/football-icon.svg?");

/***/ }),

/***/ "./src/assets/heart-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/heart-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\heart-icon.6e2488a39b9f57405ac4.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/heart-icon.svg?");

/***/ }),

/***/ "./src/assets/highhell-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/highhell-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\highhell-icon.909c329d10e9936736b4.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/highhell-icon.svg?");

/***/ }),

/***/ "./src/assets/laughing-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/laughing-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\laughing-icon.78cdc47e6c9720bc9297.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/laughing-icon.svg?");

/***/ }),

/***/ "./src/assets/logo-footer.svg":
/*!************************************!*\
  !*** ./src/assets/logo-footer.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\logo-footer.6712893bcbd26957202b.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/logo-footer.svg?");

/***/ }),

/***/ "./src/assets/logo-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/logo-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\logo-icon.4da706060c64b4a54580.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/logo-icon.svg?");

/***/ }),

/***/ "./src/assets/man-1.png":
/*!******************************!*\
  !*** ./src/assets/man-1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\man-1.2504b57d06412d8ceec5.png\";\n\n//# sourceURL=webpack://webpack/./src/assets/man-1.png?");

/***/ }),

/***/ "./src/assets/man-2.png":
/*!******************************!*\
  !*** ./src/assets/man-2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\man-2.537cccbbb57c965ce419.png\";\n\n//# sourceURL=webpack://webpack/./src/assets/man-2.png?");

/***/ }),

/***/ "./src/assets/masks.png":
/*!******************************!*\
  !*** ./src/assets/masks.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\masks.b90ed33ca52b639e7d79.png\";\n\n//# sourceURL=webpack://webpack/./src/assets/masks.png?");

/***/ }),

/***/ "./src/assets/mini-logo.svg":
/*!**********************************!*\
  !*** ./src/assets/mini-logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\mini-logo.b42ff959b276516ef979.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/mini-logo.svg?");

/***/ }),

/***/ "./src/assets/next-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/next-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\next-icon.f230fb83ec031c77b6f0.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/next-icon.svg?");

/***/ }),

/***/ "./src/assets/oye-close.svg":
/*!**********************************!*\
  !*** ./src/assets/oye-close.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\oye-close.15d777fb0cb2220e6741.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/oye-close.svg?");

/***/ }),

/***/ "./src/assets/oye.svg":
/*!****************************!*\
  !*** ./src/assets/oye.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\oye.9e83c9c0ea4fa062f690.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/oye.svg?");

/***/ }),

/***/ "./src/assets/pawblack-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/pawblack-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\pawblack-icon.af82549ed33831408f03.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/pawblack-icon.svg?");

/***/ }),

/***/ "./src/assets/play-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/play-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\play-icon.26fe2b26d632d7325872.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/play-icon.svg?");

/***/ }),

/***/ "./src/assets/player.png":
/*!*******************************!*\
  !*** ./src/assets/player.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\player.86225152e60ec0b1520b.png\";\n\n//# sourceURL=webpack://webpack/./src/assets/player.png?");

/***/ }),

/***/ "./src/assets/right.svg":
/*!******************************!*\
  !*** ./src/assets/right.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\right.d2f1b089510eac79a58e.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/right.svg?");

/***/ }),

/***/ "./src/assets/slide-1.png":
/*!********************************!*\
  !*** ./src/assets/slide-1.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\slide-1.b567d87474846acd67d0.png\";\n\n//# sourceURL=webpack://webpack/./src/assets/slide-1.png?");

/***/ }),

/***/ "./src/assets/slide-2.png":
/*!********************************!*\
  !*** ./src/assets/slide-2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\slide-2.c9ebe31a284d1ef21e45.png\";\n\n//# sourceURL=webpack://webpack/./src/assets/slide-2.png?");

/***/ }),

/***/ "./src/assets/slide-3.png":
/*!********************************!*\
  !*** ./src/assets/slide-3.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\slide-3.0673126b06bac4f80ee5.png\";\n\n//# sourceURL=webpack://webpack/./src/assets/slide-3.png?");

/***/ }),

/***/ "./src/assets/stars-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/stars-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\stars-icon.216638fd9949911a3e20.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/stars-icon.svg?");

/***/ }),

/***/ "./src/assets/start-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/start-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\start-icon.f225546d0c0e5fcfb37b.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/start-icon.svg?");

/***/ }),

/***/ "./src/assets/telephone-icon.svg":
/*!***************************************!*\
  !*** ./src/assets/telephone-icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\telephone-icon.3c16652feff07c620ca4.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/telephone-icon.svg?");

/***/ }),

/***/ "./src/assets/test.mp4":
/*!*****************************!*\
  !*** ./src/assets/test.mp4 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d07ba00f49f9b95007dc.mp4\";\n\n//# sourceURL=webpack://webpack/./src/assets/test.mp4?");

/***/ }),

/***/ "./src/assets/virus-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/virus-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\virus-icon.8e26a6ed8fdad062d6b9.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/virus-icon.svg?");

/***/ }),

/***/ "./src/assets/woman.png":
/*!******************************!*\
  !*** ./src/assets/woman.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets\\\\woman.e25e5edea8269863a9e1.png\";\n\n//# sourceURL=webpack://webpack/./src/assets/woman.png?");

/***/ }),

/***/ "./src/scss/setup/fonts/CeraPro-Black.woff":
/*!*************************************************!*\
  !*** ./src/scss/setup/fonts/CeraPro-Black.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts\\\\CeraPro-Black.df6bd63f05bbe21554f7.woff\";\n\n//# sourceURL=webpack://webpack/./src/scss/setup/fonts/CeraPro-Black.woff?");

/***/ }),

/***/ "./src/scss/setup/fonts/CeraPro-Bold.woff":
/*!************************************************!*\
  !*** ./src/scss/setup/fonts/CeraPro-Bold.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts\\\\CeraPro-Bold.d5b3ad75d9323b167595.woff\";\n\n//# sourceURL=webpack://webpack/./src/scss/setup/fonts/CeraPro-Bold.woff?");

/***/ }),

/***/ "./src/scss/setup/fonts/CeraPro-Medium.woff":
/*!**************************************************!*\
  !*** ./src/scss/setup/fonts/CeraPro-Medium.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts\\\\CeraPro-Medium.f64d02acab54735d518f.woff\";\n\n//# sourceURL=webpack://webpack/./src/scss/setup/fonts/CeraPro-Medium.woff?");

/***/ }),

/***/ "./src/scss/setup/fonts/CeraPro-Regular.woff":
/*!***************************************************!*\
  !*** ./src/scss/setup/fonts/CeraPro-Regular.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fonts\\\\CeraPro-Regular.a81f68b2a1331c71b4e4.woff\";\n\n//# sourceURL=webpack://webpack/./src/scss/setup/fonts/CeraPro-Regular.woff?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;