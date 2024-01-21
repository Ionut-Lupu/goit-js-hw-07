import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector('.gallery');

function galleryElementCreation(item) {
  const galleryItem = document.createElement('li');
  const galleryLink = document.createElement('a');
  const galleryImage = document.createElement('img');

  galleryItem.classList.add('gallery__item');
  galleryLink.classList.add('gallery__link');
  galleryImage.classList.add('gallery__image');

  galleryLink.href = item.original;
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.dataset.source = item.original; 
  
  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryImage);

  return galleryItem;
}

galleryItems.forEach(item => {
  const galleryItem = galleryElementCreation(item);
  galleryList.appendChild(galleryItem);
});

galleryList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  if (clickEvent.target.nodeName === 'IMG') {
    const imageUrl = clickEvent.target.dataset.source;
    const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);

    document.addEventListener('keydown', (escEvent) => {
    if (escEvent.key === "Escape") {
        instance.close();
      };
    });
    
    instance.show();
  }
  
});

// Creați o galerie, cu posibilitatea de a da click pe elementele sale și de a vizualiza imaginea la dimensiune completă, într-o fereastră modală.
// Îndepliniți acest task în fișierele 01-gallery.html și 01-gallery.js. Împărțiți-l în mai multe subtask-uri:

// 1.Crearea și randarea unui marcaj pe baza datelor din matricea de date galleryItems și a șablonului de articol furnizat din galerie.
// 2.Delegarea la ul.gallery și obținerea unui url a imaginii mari.
// 3.Conectarea scriptului și a stilurilor din librăria ferestrei modale basicLightbox. Folosiți CDN service jsdelivr și adăugați în proiect link-urile fișierelor minimizate (.min) de la librăria folosită.
// 4.Deschiderea unei ferestre modale printr-un click pe un element al galeriei. Pentru a face acest lucru, citiți documentația și exemple deja implementate.
// 5.Înlocuirea valorii atributului src al elementului <img> în fereastra modală înainte deschiderii. Utilizați marcajul deja existent pentru fereastra modală din exemplele librăriei basicLightbox.
