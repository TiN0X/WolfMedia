// SLIDER

const slider = document.querySelector('.about__slider')
const sliderTransform = document.querySelector('.about__slider-transform')
const sliderSlide = document.querySelector('.about__slider-block')
const sliderImage = document.querySelectorAll('.about__slider-img')
const sliderNext = document.querySelector('.about__slider-next')
const sliderPreview = document.querySelector('.about__slider-preview')
const sliderSection = document.querySelectorAll('.about__slider-section')
let sliderWidth = slider.offsetWidth
let sliderIndex = 0

sliderNext.addEventListener('click', nextSlide)
sliderPreview.addEventListener('click', previewSlide)

function nextSlide() {
	sliderIndex++
	if (sliderIndex > sliderSection.length) {
		sliderIndex = 0
	}
	runSlide()
}

function previewSlide() {
	sliderIndex--
	if (sliderIndex < 0) {
		sliderIndex = sliderSection.length - 1
	}
	runSlide()
}

function runSlide() {
	sliderTransform.style.transform = `translateX(${
		-sliderIndex * sliderWidth
	}px)`
}

// CLICK IMAGE

const sliderImages = document.querySelectorAll('.about__slider-img')
const sliderImageActive = document.querySelector('.about__slider-slide')

sliderImages.forEach(el => {
	el.addEventListener('click', () => {
		const srcImages = el.src
		sliderImageActive.src = srcImages
	})
})
