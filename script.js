// Selecionar os elementos
const spans = document.querySelectorAll('.computador span'); //Usamos querySelectorAll para selecionar todos os elementos com a classe computador span e janelinha.
const janelinhas = document.querySelectorAll('.janelinha');

// Adicionar evento de clique a cada span
spans.forEach((span, index) => { // O método forEach itera sobre cada span e adiciona um evento de clique.
    span.addEventListener('click', () => {
        // Ocultar todas as janelinhas
        janelinhas.forEach(janelinha => {
            janelinha.style.display = 'none';
        });

        // Mostrar a janelinha correspondente
        janelinhas[index].style.display = 'block';
    });
});

spans.forEach((span, index) => {
    // ...
    janelinhas[index].querySelector('.fechar').addEventListener('click', () => {
        janelinhas[index].style.display = 'none';
    });

    janelinhas[index].querySelector('.fechar').addEventListener('click', () => {
        janelinhas[index].classList.add('fechar');
    });
});