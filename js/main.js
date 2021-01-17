const header = document.querySelector('header')
const toggleMenu = document.querySelector('.toggle-menu')

toggleMenu.addEventListener('click', ()=>{
  header.classList.toggle('on')
})