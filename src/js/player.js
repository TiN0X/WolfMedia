const videoPlayer = document.querySelector('.soft__subblock-video')
const previewPlayer = document.querySelector('.soft__subblock-bg')
const btnPlayer = document.querySelector('.soft__subblock-play')

btnPlayer.addEventListener('click', openPlayer)

function openPlayer() {
	videoPlayer.style.zIndex = '12'
	videoPlayer.autoplay = true
}
