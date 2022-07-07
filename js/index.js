const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i)
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i)
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i)
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i)
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      )
   }
}

function touchMenuAroowAdd() {
   if (isMobile.any()) {
      document.body.classList.add('_touch')

      const menuArrow = document.querySelectorAll('.menu__link_u')

      if (menuArrow.length > 0) {

         menuArrow.forEach((menuArrow) => {
            menuArrow.addEventListener('click', () => {
               menuArrow.parentElement.classList.toggle('_active')
            })
         })

      }

   } else {
      document.body.classList.add('_pc')

   }

}
touchMenuAroowAdd()

function unchors() {
   const unchors = document.querySelectorAll('a[href*="#"]')
   if (unchors.length > 0) {

      unchors.forEach((unchor) => {
         unchor.addEventListener('click', (e) => {
            e.preventDefault()
            const href = unchor.getAttribute('href')

            const id = document.querySelector(href)
            const top = id.getBoundingClientRect().top
            const result = top - 70

            window.scrollBy({
               top: result,
               behavior: 'smooth'
            })
         })
      })

   }

}
unchors()

function burger() {
   const menuIcon = document.querySelector('.menu__icon')
   const menuBody = document.querySelector('.menu__body')
   const lock = document.querySelector('body')
   const burgerLink = document.querySelectorAll('.menu__link')

   if (burgerLink.length > 0) {

      menuIcon.addEventListener('click', () => {
         menuIcon.classList.toggle('_active')
         menuBody.classList.toggle('_active')
         lock.classList.toggle('_lock')
      })

      burgerLink.forEach((e) => {
         e.addEventListener('click', (event) => {
            event.preventDefault()

            menuIcon.classList.remove('_active')
            menuBody.classList.remove('_active')
            lock.classList.remove('_lock')
         })
      })

   }
}
burger()




