document.addEventListener('DOMContentLoaded' , async function(e) {
    let preloader = document.getElementById('preloader');
    let content = document.getElementById('content');

    setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 500);
})

const backToTop = document.querySelector('#backToTop i');

backToTop.addEventListener('click', function(e) {
    scrollTop(0, 1000);
})

function scrollTop(scroll, duration) {
    let doc = document.documentElement;
    let currentTime = duration;
    let speed = 5;
    let animated = () => {
        if (currentTime < 0) return;
        setTimeout(() => {
            doc.scrollTop -= doc.scrollTop / (currentTime / speed);
            currentTime -= speed;
            animated();
        }, speed);
    }
    animated();

}

window.addEventListener('scroll', function(e) {
    if (document.documentElement.scrollTop > 250) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
})