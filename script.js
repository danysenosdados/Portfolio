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