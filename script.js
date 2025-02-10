const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');
const barsBox = document.querySelector('.bars-box');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

const activePage = () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.remove('active');
        setTimeout(() => {
            header.classList.add('active');
        }, 1100);
    }

    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    
    if (barsBox) {
        barsBox.classList.remove('active');
        setTimeout(() => {
            barsBox.classList.add('active');
        }, 1100);
    }
};

if (menuIcon && navbar) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

if (logoLink) {
    logoLink.addEventListener('click', (event) => {
        event.preventDefault();
        if (!navLinks[0].classList.contains('active')) {
            activePage();
            navLinks[0].classList.add('active');
            setTimeout(() => {
                sections[0].classList.add('active');
            }, 1100);
        }
    });
}

const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');
        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
let index = 0;

const activePortfolio = () => {
    if (imgSlide) {
        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    }
};

if (arrowRight && arrowLeft) {
    arrowRight.addEventListener('click', () => {
        if (index < 4) {
            index++;
            arrowLeft.classList.remove('disabled');
        } else {
            index = 4;
            arrowRight.classList.add('disabled');
        }
        activePortfolio();
    });

    arrowLeft.addEventListener('click', () => {
        if (index > 0) {
            index--;
            arrowRight.classList.remove('disabled');
        } else {
            index = 0;
            arrowLeft.classList.add('disabled');
        }
        activePortfolio();
    });
}
