document.addEventListener("DOMContentLoaded", function() {
    const catalogElement = document.getElementById('catalog');

    fetch('products')
        .then(response => response.json())
        .then(products => {
            fetch('thumbnails')
                .then(response => response.json())
                .then(thumbnails => {
                    const catalog = products.map(product => {
                        const thumbnail = thumbnails.find(item => item.id === product.id);
                        return {...product, thumbnail: thumbnail.filename};
                    });

                    catalog.forEach(product => {
                        const productElement = document.createElement('div');
                        productElement.classList.add('product');
                        productElement.innerHTML = `
                            <img src="${product.thumbnail}" alt="${product.title}" class="thumbnail">
                            <p>${product.title}</p>
                            <p>${product.price}</p>
                        `;
                        catalogElement.appendChild(productElement);

                        productElement.addEventListener('click', () => {
                            showDescription(product.id);
                        });

                        productElement.querySelector('.thumbnail').addEventListener('mouseenter', () => {
                            showFullImage(product.id);
                        });
                        productElement.querySelector('.thumbnail').addEventListener('mouseleave', () => {
                            showThumbnail(product.id);
                        });
                    });
                });
        });

    function showDescription(productId) {
        fetch('descriptions')
            .then(response => response.json())
            .then(descriptions => {
                const description = descriptions.find(item => item.id === productId);
                document.getElementById('productDescription').textContent = description.text;
                document.getElementById('descriptionModal').style.display = 'block';
            });
    }

    function showFullImage(productId) {
        fetch('full_images')
            .then(response => response.json())
            .then(fullImages => {
                const imageFilename = fullImages.find(item => item.id === productId).filename;
                const thumbnail = getElementByAlt(fullImages.find(item => item.id === productId).title)
                thumbnail.src = imageFilename;
                thumbnail.style.height = "200px";
                thumbnail.style.width = "300px";

            });
    }

    function showThumbnail(productId) {
        fetch('thumbnails')
            .then(response => response.json())
            .then(thumbnails => {
                const thumbnailFilename = thumbnails.find(item => item.id === productId).filename;
                const thumbnail = getElementByAlt(thumbnails.find(item => item.id === productId).title)
                thumbnail.src = thumbnailFilename;
                thumbnail.style.height = "150px";
                thumbnail.style.width = "150px";
            });
    }

    window.onclick = function(event) {
        const modal = document.getElementById('descriptionModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('descriptionModal').style.display = 'none';
    });
});


function getElementByAlt(altText) {
    var elements = document.getElementsByTagName('img');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].alt === altText) {
            return elements[i];
        }
    }
    return null; 
}