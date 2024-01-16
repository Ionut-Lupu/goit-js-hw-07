import { galleryItems } from './gallery-items.js';
// Change code below this line



document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.querySelector('.gallery');

    // 1.Crearea și randarea elementelor în galerie
    galleryItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('gallery__item');

        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.original;

        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = item.preview;
        image.alt = item.description;

        // Salvarea URL-ului imaginii mari într-un atribut de date
        image.setAttribute('data-source', item.original);

        // Adăugarea evenimentului de click pentru deschiderea ferestrei modale
        image.addEventListener('click', openModal);

        link.appendChild(image);
        listItem.appendChild(link);
        galleryContainer.appendChild(listItem);
    });

    // 2.Delegarea evenimentului de click la galerie pentru a obține URL-ul imaginii mari
    galleryContainer.addEventListener('click', function (event) {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('gallery__image')) {
            const largeImageUrl = target.getAttribute('data-source');
            openModal(largeImageUrl);
        }
    });

    function openModal(imageUrl) {
        // 5.Înlocuirea valorii atributului src al elementului <img> în fereastra modală
        const modalImage = `<img src="${imageUrl}" alt="Image description">`;

        // Deschiderea ferestrei modale
        const modal = basicLightbox.create(modalImage, { onClose: closeModal });
        modal.show();
    }

    function closeModal() {
        // Închiderea ferestrei modale
        const modal = document.querySelector('.basicLightbox');
        if (modal) {
            modal.remove();
        }
    }

    window.addEventListener('keydown', function (event) {
        // Închiderea ferestrei modale la apăsarea tastei Escape
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});



// Creați o galerie, cu posibilitatea de a da click pe elementele sale și de a vizualiza imaginea la dimensiune completă, într-o fereastră modală.
// Îndepliniți acest task în fișierele 01-gallery.html și 01-gallery.js. Împărțiți-l în mai multe subtask-uri:

// 1.Crearea și randarea unui marcaj pe baza datelor din matricea de date galleryItems și a șablonului de articol furnizat din galerie.
// 2.Delegarea la ul.gallery și obținerea unui url a imaginii mari.
// 3.Conectarea scriptului și a stilurilor din librăria ferestrei modale basicLightbox. Folosiți CDN service jsdelivr și adăugați în proiect link-urile fișierelor minimizate (.min) de la librăria folosită.
// 4.Deschiderea unei ferestre modale printr-un click pe un element al galeriei. Pentru a face acest lucru, citiți documentația și exemple deja implementate.
// 5.Înlocuirea valorii atributului src al elementului <img> în fereastra modală înainte deschiderii. Utilizați marcajul deja existent pentru fereastra modală din exemplele librăriei basicLightbox.

