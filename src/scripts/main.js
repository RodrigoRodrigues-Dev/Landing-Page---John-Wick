document.addEventListener('DOMContentLoaded', () => {
    const buttonsNav = document.querySelectorAll('[data-nav-button]')
    const buttonClose = document.querySelector('.button-close')

    for (let i = 0 ; i < buttonsNav.length; i++) {
        buttonsNav[i].addEventListener('click', (botao) => {
            const Alvo = botao.target.parentNode.dataset.navButton
            const section = document.querySelector(`[data-section-id="${Alvo}"]`)
            
            esconderConteudoHover()
            section.classList.add('section--is-active')
        })
    }

    buttonClose.addEventListener('click', () => {
        const sections = document.querySelectorAll('section')

        sections.forEach(section => {
            section.classList.remove('section--is-active');
        });
        mostrarConteudoHover()
    })

})

function esconderConteudoHover() {
    const containers = document.querySelectorAll('.container');
    
    containers.forEach(section => {
        section.classList.remove('container--is-active');
    });
}

function mostrarConteudoHover() {
    const containers = document.querySelectorAll('.container');
    
    containers.forEach(container => {
        container.classList.add('container--is-active');
    });
}