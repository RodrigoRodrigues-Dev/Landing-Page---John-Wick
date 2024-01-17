document.addEventListener('DOMContentLoaded', () => {
    const buttonsNav = document.querySelectorAll('[data-nav-button]');
    const buttonClose = document.querySelectorAll('.button-close');
    const buttonTickets = document.querySelector('[data-story-button]');
    const video = document.querySelector('video');
    const buttonShowMenuMobile = document.querySelector('[data-mobile-button="open"]');
    const buttonHideMenuMobile = document.querySelector('[data-mobile-button="close"]');

    //exibe menu mobile e remove o search mobile
    buttonShowMenuMobile.addEventListener('click',() => {
        const menu = document.querySelector(`[data-mobile-menu="menu"]`)
        const menuSearch = document.querySelector('.mobile__search')

        menu.classList.add('menu-mobile--is-active')
        menuSearch.classList.remove('mobile__search--is-active')
    })

     //remove menu mobile e adiciona o search mobile
    buttonHideMenuMobile.addEventListener('click',() => {
        const menu = document.querySelector(`[data-mobile-menu="menu"]`)
        const menuSearch = document.querySelector('.mobile__search')

        menu.classList.remove('menu-mobile--is-active')
        menuSearch.classList.add('mobile__search--is-active')
    })

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

            // Inicia a reprodução do vídeo se o botão clicado for o de trailer
            if (targetId === 'trailer') {
                video.play();
            }
        });
    });

    buttonClose.forEach(button => {
        button.addEventListener('click', () => {
            hideSection();
            showContentHover();
            // Pausa a reprodução do vídeo
            video.pause();
        });
    });

    buttonTickets.addEventListener('click', () => {
        const soldOut = document.querySelector('.story__content__soldOut');
    
        // Se "Sold Out" existir, adiciona classe para exibir e remove após 1 segundo
        if (soldOut) {
            soldOut.classList.add('story__content__soldOut--is-active');

            setTimeout(() => {
                soldOut.classList.remove('story__content__soldOut--is-active');
            }, 1000);
        }
    });
});

// Função para esconder o conteúdo do hover
function hideContentHover() {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        if (container.classList.contains('container--is-active')) {
            container.classList.remove('container--is-active');
        }
    });
}

// Função para exibir novamente o conteúdo do hover
function showContentHover() {
    const containers = document.querySelectorAll('.container');
    const header = document.querySelector('.header');

    containers.forEach(container => {
        container.classList.add('container--is-active');
    });
    // Adiciona a classe ativa ao cabeçalho
    header.classList.add('header--is-active')
}

// Função para esconder qualquer seção ativa
function hideSection() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.classList.contains('section--is-active')) {
            section.classList.remove('section--is-active');
        }
    });
}
