window.addEventListener("DOMContentLoaded", () => {
    let menuItem = Array.from(document.getElementsByClassName("nav__menu__item"));
    menuItem.forEach(item => {
        item.addEventListener("click", e => {
            let focusItem = Array.from(document.getElementsByClassName("nav__item__focus"));
            focusItem[0].classList.remove("nav__item__focus")
            e.target.className = "nav__item__focus";
        })
    })

})