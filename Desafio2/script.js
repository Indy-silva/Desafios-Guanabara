let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let item = container.querySelectorAll('.list .item')
let indicators = document.querySelector('.indicators')
let dots = indicators.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = item.lenght - 1

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dtosOld = indicators.querySelector('ul li.active')
    dtosOld.classList.remove('active')
    dots[active].classList.add('active')

    indicators.querySelector('.numbers').innerHTML = '0' + (active + 1)

}

nextButton.onclick = () => {
    /* if e else */
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    item[active].classList.add('active')

}

prevButton.onclick = () => {

    /* if e else */
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    item[active].classList.add('active')
}