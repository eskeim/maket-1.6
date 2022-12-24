const buttonMenu = document.querySelector('.menu__button-burger');
const ButtonSideMenu = document.querySelector('.side-menu__button-burger')
const sideMenu = document.querySelector('.side-menu');
const container = document.querySelector('.side-menu__overlay')
buttonMenu.addEventListener('click', function() {
  sideMenu.classList.remove('side-menu-hidden')
})
ButtonSideMenu.addEventListener('click', function() {
  sideMenu.classList.add('side-menu-hidden')
})
if (document.documentElement.clientWidth >= 1440) {
  sideMenu.classList.remove('side-menu-hidden');
  buttonMenu.classList.add('menu__button-burger-hidden');
}
if (document.documentElement.clientWidth < 1440) {
  document.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
      sideMenu.classList.add('side-menu-hidden')
    }
  })
  container.addEventListener('click', function() {
    sideMenu.classList.add('side-menu-hidden')
  })
}
