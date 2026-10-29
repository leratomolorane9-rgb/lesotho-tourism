

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "") {
            alert("Please enter your name.");
        } else if (email.trim() === "") {
            alert("Please enter your email.");
        } else if (message.trim() === "") {
            alert("Please enter your message.");
        } else {
            alert("Your enquiry passed the form checks. It has not been sent.");
        }
    });
}



const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
        } else {
            alert("Registration form passed the checks. Your details have not been saved.");
        }
    });
}



const galleryImages = document.querySelectorAll(".gallery-image");
const previewImage = document.getElementById("previewImage");
const previousButton = document.getElementById("previousImage");
const nextButton = document.getElementById("nextImage");

let currentImageIndex = 0;

function showGalleryImage(index) {
    if (galleryImages.length === 0 || !previewImage) {
        return;
    }

    currentImageIndex =
        (index + galleryImages.length) % galleryImages.length;

    previewImage.src = galleryImages[currentImageIndex].src;
    previewImage.alt = galleryImages[currentImageIndex].alt;
}

galleryImages.forEach(function(image, index) {
    image.addEventListener("click", function() {
        showGalleryImage(index);

        const modalElement = document.getElementById("imageModal");

        if (modalElement && typeof bootstrap !== "undefined") {
            const imageModal =
                bootstrap.Modal.getOrCreateInstance(modalElement);

            imageModal.show();
        }
    });
});

if (previousButton) {
    previousButton.addEventListener("click", function() {
        showGalleryImage(currentImageIndex - 1);
    });
}

if (nextButton) {
    nextButton.addEventListener("click", function() {
        showGalleryImage(currentImageIndex + 1);
    });
}
