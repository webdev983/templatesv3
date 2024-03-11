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

async function removeImage(event) {
    const imageSrc = event.target.closest('.gallery-image').querySelector('img').src;
    console.log('Removing Image Src:', imageSrc);
    const sk = imageSrc.replace('https://s3.amazonaws.com/checkout-admin-panel/', "")
    setImg('')
    await fetch(`https://5jfh1fonoh.execute-api.us-east-1.amazonaws.com/prod/templatesv2/${id}:${sk}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
        },
    });
    await fetch('https://5jfh1fonoh.execute-api.us-east-1.amazonaws.com/prod/upload?id=' + sk, {
        method: 'DELETE',
    });
    location.reload()


}
function showMenu(event) {
    const galleryImage = event.target.closest('.gallery-image');
    const imageSrc = galleryImage.querySelector('img').src;

    // Set the image source in the menu
    const menuImage = document.getElementById('menu-1').querySelector('img');
    menuImage.src = imageSrc;

    // Display the menu
    const menu = document.getElementById('menu-1');
    menu.style.display = 'block';
}

function cancel(event) {
    // Hide the menu
    const menu = document.getElementById('menu-1');
    menu.style.display = 'none';
}
document.getElementById('image-input').addEventListener('change', async function (event) {
    var fileNameSpan = document.getElementById('file-name');

    var uploadButton = document.getElementById('upload-button');

    // Check if a file is selected
    if (this.files && this.files.length > 0) {
        // If a file is chosen, show the file name and make the upload button visible
        var fileName = this.files[0].name; // Get the name of the file
        fileNameSpan.textContent = fileName; // Set the text content to the file name
        fileNameSpan.hidden = false; // Make the file name span visible

        uploadButton.hidden = false; // Make the upload button visible

        file = event.target.files[0]
    } else {
        // If no file is chosen, hide the file name span and the upload button
        fileNameSpan.hidden = true;
        uploadButton.hidden = true;
    }
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
async function handleUpload1() {


    const fileContent = await file
    const fileName = fileContent.name

    try {

        const path = await upload(fileName, fileContent)
        console.log(path)
        //push to db image
        // Send a POST request using fetch
        const payload = {
            id,
            sk: path
        }
        const response = await fetch('https://5jfh1fonoh.execute-api.us-east-1.amazonaws.com/prod/templatesv2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        location.reload()


    } catch (error) {
    }
}
const setImg = async (path) => {
    const payload2 = {
        id,
        sk: (new Date()).getTime().toString(),
        action: 'setAttribute',
        target_element: imgId,
        key: 'src',
        value: path,
        check_b: true

    }
    //push to db action
    const response2 = await fetch('https://5jfh1fonoh.execute-api.us-east-1.amazonaws.com/prod/templatesv2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload2),
    });
}
const upload = async (fileName, fileContent) => {
    const body = {
        fileName
    }
    const response = await fetch('https://5jfh1fonoh.execute-api.us-east-1.amazonaws.com/prod/upload', {
        method: 'POST',
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        return
    }
    const { url, fields, path } = await response.json()
    const formData = new FormData();
    Object.entries(fields).forEach(([field, value]) => {
        formData.append(field, value);
    });
    formData.append('file', fileContent);

    // Use Fetch API to send a POST request with the FormData to the presigned URL
    const uploadResponse = await fetch(url, {
        method: 'POST',
        body: formData,
    })
    if (!uploadResponse.ok) {
        const er = await uploadResponse.text()
        console.log('error ' + er)
        return
    }
    return path
}