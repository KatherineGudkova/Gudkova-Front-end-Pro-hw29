document.addEventListener('DOMContentLoaded', function() {
    const loadImageButton = document.getElementById('loadImageButton');

    loadImageButton.addEventListener('click', function() {
        const container = document.getElementById("container");
        
        const imageNumber = Math.floor(Math.random() * 9) + 1;

        const imageElement = document.createElement('img');
        imageElement.id = 'randomImage';
        imageElement.src = 'images/' + imageNumber + '.jpg';

        imageElement.style.width = '500px';
        imageElement.style.height = '400px';
        imageElement.style.border = '2px solid #4CAF50';
        imageElement.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.3)';
        
    const previousImage = document.getElementById('randomImage');
        if (previousImage) {
            previousImage.remove();
        }

        container.appendChild(imageElement);
    });
});