function onScroll() {
  if (scrollY > 46) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #pizza-menu,
  #pizza-menu header,
  #pizza-menu .card,
  #about, 
  #about header, 
  #about .content`)
