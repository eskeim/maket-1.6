const button = document.querySelector('.side-menu__button-call');
const buttonTwo = document.querySelector('.menu__button-call');
const elementHidden = document.querySelector('.order-call');
const buttonClose = document.querySelector('.order-call__button-close');
const container = document.querySelector('.order-call__overlay');
button.addEventListener('click' , function () {
  elementHidden.classList.remove('order-call-hidden')
});
buttonTwo.addEventListener('click', function () {
  elementHidden.classList.remove('order-call-hidden')
});
buttonClose.addEventListener('click', function () {
  elementHidden.classList.add('order-call-hidden')
});
document.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27) {
    elementHidden.classList.add('order-call-hidden')
  }
})
container.addEventListener('click', function() {
  elementHidden.classList.add('order-call-hidden')
})

