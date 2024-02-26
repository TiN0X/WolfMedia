const btnModalSignOpen = document.querySelector('.header__btn-modal')
const btnModalSignClose = document.querySelector('.modal-sign__close')
const modalSign = document.querySelector('.modal-sign')
const signForm = document.querySelector('.modal-sign__form')
const modalSignBlock = document.querySelector('.modal-sign__block')
const inputName = document.querySelector('#input-name')
const inputPhone = document.querySelector('#input-phone')
const inputText = document.querySelector('#input-text')

btnModalSignOpen.addEventListener('click', modalSignOpen)
btnModalSignClose.addEventListener('click', modalSignClose)
signForm.addEventListener('submit', event => {
	event.preventDefault()
	modalSignClose()
	inputDelete()
	alert('Ваше повідомлення було відправлено!')
})
modalSign.addEventListener('click', event => {
	if (!modalSignBlock.contains(event.target)) {
		modalSignClose()
		inputDelete()
	}
})

function modalSignOpen() {
	modalSign.classList.add('modal-sign--active')
}

function modalSignClose() {
	modalSign.classList.remove('modal-sign--active')
	inputDelete()
}

function inputDelete() {
	inputName.value = ''
	inputPhone.value = ''
	inputText.value = ''
}
