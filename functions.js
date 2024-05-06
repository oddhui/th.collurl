let items = document.querySelectorAll('.slider .sliderItems .item');
let imgs = document.querySelectorAll('.imgContainer .item');

let countItem = items.length;
let itemActive = 0;

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .sliderItems .item.active');
    let imgActiveOld = document.querySelector('.imgContainer .item.active');
    itemActiveOld.classList.remove('active');
    imgActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    imgs[itemActive].classList.add('active');
}

imgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});
