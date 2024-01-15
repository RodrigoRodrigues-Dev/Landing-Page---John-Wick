document.addEventListener('DOMContentLoaded', () => {
    const buttonsNav = document.querySelectorAll('[data-nav-button]');
    const buttonClose = document.querySelectorAll('.button-close');

    buttonsNav.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.currentTarget.dataset.navButton;
            const section = document.querySelector(`[data-section-id="${targetId}"]`);

            event.preventDefault();
            hideContentHover();
            section.classList.add('section--is-active');
        });
    });

    buttonClose.forEach(button => {
        button.addEventListener('click', () => {
            const sections = document.querySelectorAll('section');

            sections.forEach(section => {
                section.classList.remove('section--is-active');
            });
            showContentHover();
        });
    });
});

function hideContentHover() {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        container.classList.remove('container--is-active');
    });
}

function showContentHover() {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        container.classList.add('container--is-active');
    });
}