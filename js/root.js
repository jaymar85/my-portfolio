// Scroll to top button
// Source: https://youtu.be/gphMli74Chk 

const scrollToTop = document.querySelector('.to-top-btn')

window.addEventListener('scroll', scrollFunction)

function scrollFunction() {
    if(window.pageYOffset > 500) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
}