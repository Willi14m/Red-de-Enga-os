const images = document.querySelectorAll('.carrusel img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('activo', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// hace que se muestre la imagen 1 al recargar la página
showImage(currentIndex);

// me ayuda a que las imagenes se muevan cada 3 segundos 
setInterval(nextImage, 3000);