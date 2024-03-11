var file
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get('id');
const imgId = urlSearchParams.get('imgId');
var src = urlSearchParams.get('src');
function selectImage(event) {
    const imageSrc = event.target.closest('.gallery-image').querySelector('img').src;
    const galleryImage = event.target.closest('.gallery-image');
    // Remove all existing "selected" labels
    const selectedLabels = document.querySelectorAll('.selected');
    selectedLabels.forEach(label => label.remove());

    // Add your logic for selecting the image here
    setImg(imageSrc);

    // Add a "selected" label to the selected image
    const attachedLabel = galleryImage.querySelector('img')
    if (attachedLabel) {
        attachedLabel.insertAdjacentHTML('afterend', '<label class="attached">📎</label>');
    }

    // Store the selected image source in a variable (if needed)
    src = imageSrc;
}







const loadImages = async () => {
    const res = await fetch(`https://5jfh1fonoh.execute-api.us-east-1.amazonaws.com/prod/templatesv2?id=${id}&sk=pics&startsWith=true`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const { items } = await res.json()
    console.log('items' + JSON.stringify(items))
    const table = document.getElementById('gallery-body');
    const templateRow = document.getElementById('gallery-item');

    // Loop through each image item
    items.forEach((item) => {
        // Clone the template row
        const clonedRow = templateRow.cloneNode(true);
        clonedRow.removeAttribute('hidden'); // Show the cloned row

        // Update the image source based on the item's sk
        const imageSrc = `https://s3.amazonaws.com/checkout-admin-panel/${item.sk}`;
        const imgEl = clonedRow.querySelector('.gallery-image img')
        imgEl.src = imageSrc;

        if (src !== imageSrc) {
            const attachedLabel = clonedRow.querySelector('.gallery-image .attached');
            if (attachedLabel) {
                attachedLabel.parentNode.removeChild(attachedLabel);
            }
        }

        // Set a unique id for the cloned row (assuming you have a property named id in the item)
        clonedRow.id = `image-body-${item.sk}`;

        // Append the cloned row to the table
        table.appendChild(clonedRow);
    });
    // Select all gallery images
    const images = document.querySelectorAll('.gallery-image');

    images.forEach(image => {
        const actions = image.querySelector('.picture-actions');

        // When you hover over an image
        image.addEventListener('mouseenter', () => {
            // Set the z-index of the picture actions to 10
            actions.style.zIndex = '10';
        });

        // When the mouse leaves the image
        image.addEventListener('mouseleave', () => {
            // Reset the z-index of the picture actions to -10
            actions.style.zIndex = '-10';
        });
    });
}
document.addEventListener('DOMContentLoaded', loadImages);
