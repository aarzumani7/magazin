// Функция для перелестывания изображений 1 карточки
let i = 0;
let images = ["1", "2"];
// Функция для отображения предыдущей картинки
function previousImage(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image1');
  
  if (i === 0) {
    i = images.length - 1;
  } else {
    i--;  
  }
  
  image.src = "images/" + images[i] + ".png";
}
// Функция для отображения следующей картинки
function nextImage(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image1');
  
  if (i === images.length - 1) {
    i = 0;
  } else {
    i++;
  }
  
  image.src = "images/" + images[i] + ".png";
}


// Функция для перелестывания изображений 2 карточки
let a = 0;
let images2 = ["3", "4"];
// Функция для отображения предыдущей картинки
function previousImage1(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image2');
  if (a === 0) {
    a = images2.length - 1;
  } else {
    a--;  
  }
  
  image.src = "images/" + images2[a] + ".png";
}
// Функция для отображения следующей картинки
function nextImage1(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image2');
  if (a === images2.length - 1) {
    a = 0;
  } else {
    a++;
  }
  
  image.src = "images/" + images2[a] + ".png";
}


// Функция для перелестывания изображений 3 карточки
let b = 0;
let images3 = ["5", "6"];
// Функция для отображения предыдущей картинки
function previousImage2(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image3');
  if (b === 0) {
    b = images3.length - 1;
  } else {
    b--;  
  }
  
  image.src = "images/" + images3[b] + ".png";
}
// Функция для отображения следующей картинки
function nextImage2(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image3');
  if (b === images3.length - 1) {
    b = 0;
  } else {
    b++;
  }
  
  image.src = "images/" + images3[b] + ".png";
}

// Функция для перелестывания изображений 4 карточки
let c = 0;
let images4 = ["7", "8"];
// Функция для отображения предыдущей картинки
function previousImage3(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image4');
  if (c === 0) {
    c = images4.length - 1;
  } else {
    c--;  
  }
  
  image.src = "images/" + images4[c] + ".png";
}
// Функция для отображения следующей картинки
function nextImage3(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image4');
  if (c === images4.length - 1) {
    c = 0;
  } else {
    c++;
  }
  
  image.src = "images/" + images4[c] + ".png";
}