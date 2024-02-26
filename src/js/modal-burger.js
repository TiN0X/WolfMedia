const modalBurger = document.querySelector('.modal-burger')
const modalAside = document.querySelector('.modal-burger__aside')
const modalBtn = document.querySelector('.header__burger')

modalBtn.addEventListener('click', openBurger)
document.addEventListener('click', closeBurger)

function openBurger(event) {
	modalBurger.classList.add('modal-burger--active')
	modalAside.classList.add('modal-burger__aside--active')
}

function closeBurger(event) {
	if (!modalAside.contains(event.target) && !modalBtn.contains(event.target)) {
		modalBurger.classList.remove('modal-burger--active')
		modalAside.classList.remove('modal-burger__aside--active')
	}
}
