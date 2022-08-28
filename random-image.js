const numberRandom = Math.floor((Math.random() * 2) + 1);
const urlImage = 'image/image-' + numberRandom + '.jpg';
const infoImage = document.getElementById('info');
infoImage.setAttribute('src', urlImage);