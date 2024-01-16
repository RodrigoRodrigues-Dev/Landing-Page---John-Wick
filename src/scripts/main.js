document.addEventListener('DOMContentLoaded', () => {
    const buttonsNav = document.querySelectorAll('[data-nav-button]');
    const buttonClose = document.querySelectorAll('.button-close');
    const buttonTickets = document.querySelector('[data-story-button]');
    const video = document.querySelector('video');

    buttonsNav.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.currentTarget.dataset.navButton;
            const section = document.querySelector(`[data-section-id="${targetId}"]`);
            const header = document.querySelector('header');

            hideContentHover();
            hideSection();
            event.preventDefault();
            section.classList.add('section--is-active');
            header.classList.remove('header--is-active');

            if (targetId === 'trailer') {
                video.play();
            }
        });
    });

    buttonClose.forEach(button => {
        button.addEventListener('click', () => {
            hideSection();
            showContentHover();
            video.pause();
        });
    });

    buttonTickets.addEventListener('click', () => {
        const soldOut = document.querySelector('.story__content__soldOut');
    
        if (soldOut) {
            soldOut.classList.add('story__content__soldOut--is-active');
        }

        setTimeout(() => {
            soldOut.classList.remove('story__content__soldOut--is-active');
        }, 1000);
    });
});

function hideContentHover() {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        if (container.classList.contains('container--is-active')) {
            container.classList.remove('container--is-active');
        }
    });
}

function showContentHover() {
    const containers = document.querySelectorAll('.container');
    const header = document.querySelector('.header');

    containers.forEach(container => {
        container.classList.add('container--is-active');
    });
    header.classList.add('header--is-active')
}

function hideSection() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.classList.contains('section--is-active')) {
            section.classList.remove('section--is-active');
        }
    });
}