document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  const mobileLinks = document.querySelectorAll('.mobile-link')
  let isOpen = false

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen
    if (isOpen) {
      mobileMenu.classList.remove('scale-y-0', 'opacity-0')
      mobileMenu.classList.add('scale-y-100', 'opacity-100')
    } else {
      mobileMenu.classList.add('scale-y-0', 'opacity-0')
      mobileMenu.classList.remove('scale-y-100', 'opacity-100')
    }
  })

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('scale-y-0', 'opacity-0')
      mobileMenu.classList.remove('scale-y-100', 'opacity-100')
      isOpen = false
    })
  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
})
