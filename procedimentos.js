// Inicializando as variáveis
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');

// Função para mover o slide (imagem)
function moveSlide(step) {
    // Remove a classe 'active' da imagem atual
    images[currentIndex].classList.remove('active');
    
    // Atualiza o índice da imagem
    currentIndex = (currentIndex + step + images.length) % images.length;
    
    // Adiciona a classe 'active' para a nova imagem
    images[currentIndex].classList.add('active');
}

// Iniciar o carrossel exibindo a primeira imagem
moveSlide(0);
