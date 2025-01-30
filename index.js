const images = ['./assests/images/img-01.jpg','./assests/images/img-02.jpg','./assests/images/img-03.jpg','./assests/images/img-04.jpg',
'./assests/images/img-05.jpg'];


let currentImageIndex = 0;

previousBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    img01.src = images[currentImageIndex];
});
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1 ) % images.length;
    img01.src = images[currentImageIndex];
});