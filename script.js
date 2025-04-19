// Change text content dynamically
document.getElementById("change-btn").addEventListener("click", function () {
    const textElement = document.getElementById("text");
    textElement.textContent = "Thank you for visiting our website! We hope you enjoy your stay.";
    textElement.style.color = "red"; // Modify CSS style dynamically
    textElement.style.fontWeight = "bold";
});

// Add a new image to the gallery
document.getElementById("add-image-btn").addEventListener("click", function () {
    const gallery = document.getElementById("gallery");
    const newImage = document.createElement("img");
    newImage.src = "camera.jpg"; // Replace with the path to your image
    newImage.alt = "New Image";

    // Style the new image
    newImage.style.width = "200px";
    newImage.style.height = "200px";
    newImage.style.margin = "10px";
    newImage.style.border = "2px solid black";
    newImage.style.borderRadius = "10px";

    gallery.appendChild(newImage);
});

// Remove the last image from the gallery
document.getElementById("remove-image-btn").addEventListener("click", function () {
    const gallery = document.getElementById("images");
    if (gallery.lastElementChild) {
        gallery.removeChild(gallery.lastElementChild);
    }
});

// Style all existing images in the gallery
const existingImages = document.querySelectorAll("#images img");
existingImages.forEach((img) => {
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.margin = "10px";
    img.style.border = "2px solid black";
    img.style.borderRadius = "10px";
});