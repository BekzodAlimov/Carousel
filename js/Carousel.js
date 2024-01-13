window.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll("img")
    const btnContainer = document.querySelector(".btns")
    const btns = document.querySelectorAll(".btn")
    const carousel = document.querySelector('.carousel')
    let indx = 0
    const btnFunc = (param, i) => {
        param.classList.remove("show")
        btns[i].removeAttribute("id")
        if (i === indx) {
            param.classList.add("show")
            btns[i].setAttribute("id","active")
            document.body.style.backgroundImage = `url("${imgs[i].getAttribute('src')}")`
        }
    }

    carousel.addEventListener("click", (event) => {
        const target = event.target
        if (target && target.classList.contains("fa-angle-left")) {
            if (indx <= 0) {
                indx = imgs.length - 1
            } else {
                indx--
            }
            imgs.forEach((item, index) => {
                btnFunc(item, index)
            })
        }

        if (target && target.classList.contains("fa-angle-right")) {
            if (indx >= imgs.length - 1) {
                indx = 0
            } else {
                indx = indx + 1
            }
            imgs.forEach((item, index) => {
               btnFunc(item, index)
            })
        }
    })

    btnContainer.addEventListener("click", (event) => {
        btns.forEach((item, index) => {
            item.removeAttribute("id")
            imgs[index].classList.remove("show")
            if (event.target === item) {
                item.setAttribute("id", "active")
                imgs[index].classList.add("show")
                document.body.style.backgroundImage = `url("${imgs[index].getAttribute('src')}")`
            }
        })
    })
})