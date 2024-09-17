function abrirModal(tipo) {
    // Esconde todas as modais
    const todasAsModais = document.querySelectorAll('.janela-modal');
    todasAsModais.forEach(modal => modal.classList.remove('abrir'));

    // Exibe a modal correspondente ao tipo
    const modal = document.getElementById(`janela-${tipo}`);
    modal.classList.add('abrir');
}

// Exibe a modal de formação por padrão
document.addEventListener('DOMContentLoaded', function() {
    abrirModal('formacao');
});

function scrollProjects(direction) {
    const container = document.querySelector('.projetos-lista');
    const scrollAmount = container.offsetWidth / 2;
    container.scrollBy({ 
        left: direction * scrollAmount, 
        behavior: 'smooth' 
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
    const scrollableProjects = document.querySelector('.scrollable-projects');

    // Rola para a esquerda
    leftButton.addEventListener('click', () => {
        scrollableProjects.scrollBy({
            left: -300,  // Quantidade de pixels para rolar para a esquerda
            behavior: 'smooth'  // Faz com que a rolagem seja suave
        });
    });

    // Rola para a direita
    rightButton.addEventListener('click', () => {
        scrollableProjects.scrollBy({
            left: 300,  // Quantidade de pixels para rolar para a direita
            behavior: 'smooth'  // Faz com que a rolagem seja suave
        });
    });
});
