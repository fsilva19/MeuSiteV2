//          animação de transparência      //
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
const animationClass1 = 'animate1';

function animescr() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 4) / 5);
    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

function animescr1() {
    const windowTop1 = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if ((windowTop1) > element.offsetTop) {
            element.classList.add(animationClass1);
        } else {
            element.classList.remove(animationClass1);
        }
    })
}
animescr();
animescr1();
window.addEventListener('scroll', function() {
    animescr();
});

//          animação dos botoes internos        // 
const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToId);
});

function getScrollTop(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;

}

function scrollToId(event) {
    event.preventDefault();
    const section = getScrollTop(event.target) - 80;
    scrollToPosition(section);
}

function scrollToPosition(section) {
    window.scroll({
        top: section,
        behavior: "smooth",
    })
}