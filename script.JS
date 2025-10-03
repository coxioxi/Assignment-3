function Image(url, alt, description) {
    this.URL = url;
    this.attributeValue = alt;
    this.description = description;

    this.getURL = function() {
        return this.URL;
    }

    this.getAttributeValue = function() {
        return this.attributeValue;
    }

    this.getDescription = function() {
        return this.description;
    }
}

let morning = new Image("morning.jpg", "Morning", "A beautiful morning view with the sun rising over the mountains.");
let noon = new Image("noon.jpg", "Noon", "A bright noon scene with the sun high in the sky and clear blue skies.");
let evening = new Image("evening.jpg", "Evening", "A serene evening with the sun setting and casting a golden glow over the landscape.");
let night = new Image("night.jpeg", "Night", "A tranquil night scene with a starry sky and the moon shining brightly.");
let images = [morning, noon, evening, night];
let slides = [morning, noon, evening, night];

function setBackground(images) {
    let currentHour = new Date().getHours();
    let index;

    if (currentHour >= 5 && currentHour < 12) {
        index = 0; // Morning
    } else if (currentHour >= 12 && currentHour < 17) {
        index = 1; // Noon
    } else if (currentHour >= 17 && currentHour < 20) {
        index = 2; // Evening
    } else {
        index = 3; // Night
    }

    document.getElementById("beach").src = images[index].getURL();
    document.getElementById("beach").setAttribute("alt", images[index].getAttributeValue());
    document.getElementById("description").textContent = images[index].getDescription();
    document.getElementById("time").textContent = new Date().toLocaleTimeString();
    document.getElementById("date").textContent = new Date().toLocaleDateString();
}

function nextImage() {
    let currentSrc = document.getElementById("slide").src;
    let currentIndex = slides.findIndex(image => currentSrc.includes(image.getURL()));
    let nextIndex = (currentIndex + 1) % slides.length;
    document.getElementById("slide").src = slides[nextIndex].getURL();
    document.getElementById("slide").setAttribute("alt", slides[nextIndex].getAttributeValue());
    document.getElementById("slide-description").textContent = slides[nextIndex].getDescription();
}

function randomImage() {
    let randomIndex = Math.floor(Math.random() * (slides.length));
    document.getElementById("slide").src = slides[randomIndex].getURL();
    document.getElementById("slide").setAttribute("alt", slides[randomIndex].getAttributeValue());
    document.getElementById("slide-description").textContent = slides[randomIndex].getDescription();
}

function setSlideShow(slides) {
    document.getElementById("slide").src = slides[0].getURL();
    document.getElementById("slide").setAttribute("alt", slides[0].getAttributeValue());
    document.getElementById("slide-description").textContent = slides[0].getDescription();
}


document.getElementById("next-image").addEventListener("click", function() {
    nextImage();
});

document.getElementById("random-image").addEventListener("click", function(){
    randomImage();
});

window.onload = function() {
    setBackground(images);
    setSlideShow(slides);
}

