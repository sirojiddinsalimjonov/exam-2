const elCard = document.querySelector('.site-header')
const elCardBtn = document.querySelectorAll('.site-header__dropdown')

elCardBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.site-header').classList.toggle('header-nav--active')
  })
})
