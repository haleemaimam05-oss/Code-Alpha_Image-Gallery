let currentIndex = 0;
let images = document.querySelectorAll('.gallery img');
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');

function openLightbox(img) {
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
  currentIndex = Array.from(images).indexOf(img);
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImg(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  // skip hidden images when filtered
  if(images[currentIndex].style.display === 'none'){
    changeImg(step > 0? 1 : -1); return;
  }
  lightboxImg.src = images[currentIndex].src;
}

function filterImages(category) {
  document.querySelectorAll('.filter-btns button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  images.forEach(img => {
    if(category === 'all' || img.classList.contains(category)){
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
