let btnNext = document.querySelector('.next')
let btnBAck = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBAck.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-items')

    if (type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[listItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {

        container.classList.remove['next']
        container.classList.remove['back']
    }, 3000);

}

