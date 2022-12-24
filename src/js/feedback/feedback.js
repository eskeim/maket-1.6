const button = document.querySelector('.side-menu__button-chat');
const buttonTwo = document.querySelector('.menu__button-chat');
const elementHidden = document.querySelector('.feedback');
const buttonClose = document.querySelector('.feedback__button-close');
const feedBack = document.querySelector('.feedback__overlay');
button.addEventListener('click', function () {
  elementHidden.classList.remove('feedback-hidden')
});
buttonTwo.addEventListener('click', function () {
  elementHidden.classList.remove('feedback-hidden')
});
buttonClose.addEventListener('click', function () {
  elementHidden.classList.add('feedback-hidden')
});
document.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27) {
    elementHidden.classList.add('feedback-hidden')
  }
})
feedBack.addEventListener('click', function() {
  elementHidden.classList.add('feedback-hidden')
})

