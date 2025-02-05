const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        // Hide all resume details
        resumeDetails.forEach(detail => detail.classList.remove('active'));

        // Show the corresponding resume detail
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation button .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation button .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');

    imgSlide.computedStyleMap.transform = 'translateX(clac(${index * -100}%) - ${index * 2}rem));'
}

arrowRight.addEventListener('click', () => {
    if (index < 4 ){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1 ){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});