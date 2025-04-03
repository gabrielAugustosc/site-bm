// Efeito de Zoom In ao carregar qualquer página
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
    document.body.style.transform = 'scale(1)'; // Amplia suavemente a página
});

// Zoom Out ao clicar em links externos (ex.: para "Conquistas" ou "Home")
document.querySelectorAll('nav a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão
        const targetUrl = this.getAttribute('href'); // Obtém o destino do link
        document.body.style.opacity = '0'; // Reduz a opacidade
        document.body.style.transform = 'scale(0.95)'; // Reduz o tamanho antes de sair
        setTimeout(() => {
            window.location.href = targetUrl; // Redireciona após a transição
        }, 500); // Tempo sincronizado com o CSS
    });
});
