const button = document.querySelector('.repair__btn');
let listItems = document.querySelectorAll('.repair__swiper-slide-hidden');
if (document.documentElement.clientWidth >= 1120) {
  listItems[0].classList.remove('repair__swiper-slide-hidden');
  listItems = document.querySelectorAll('.repair__swiper-slide-hidden');
}
button.addEventListener('click', function () {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle('repair__swiper-slide-hidden');
  }
  if(button.classList.contains("repair__btn-arrows-up")) {
    button.textContent = 'Показать все'
    button.classList.remove('repair__btn-arrows-up')
    button.classList.add('repair__btn-arrows-down')
  } else if (button.classList.contains("repair__btn-arrows-down")) {
    button.textContent = 'Скрыть'
    button.classList.remove('repair__btn-arrows-down')
    button.classList.add('repair__btn-arrows-up')
  }
});
