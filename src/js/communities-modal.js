
const communitiesItem = document.querySelectorAll('.communities__item')
const communitiesModal = document.querySelectorAll('.communities__modal')

communitiesItem.forEach((item, index)  => {
	item.addEventListener('mouseenter', () => {
		communitiesModal[index].classList.add('communities__modal--active')
	})

	item.addEventListener('mouseleave', () => {
		communitiesModal[index].classList.remove('communities__modal--active')
	})
})
