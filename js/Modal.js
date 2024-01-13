'use strict'
window.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector('.modal')
    const  btn = document.querySelector('button')
    modal.addEventListener('click' , (event) => {
        const target = event.target
        if (target && (target.classList.contains('modal') || target.classList.contains('modal__close'))){
            modal.classList.remove('show')
        }
    })
    btn.addEventListener('click', () => {
      modal.classList.add('show')
    })
})