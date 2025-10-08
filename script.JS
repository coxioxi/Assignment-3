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

let morning = new Image("images/morning.jpg", "Morning", "A breathtaking morning in Rio de Janeiro, with sunlight glistening over Sugarloaf Mountain and the calm waters of Guanabara Bay.");
let morning1 = new Image("images/morning1.jpg", "Morning1", "A beautiful morning view with the sun rising over the horizon.");
let noon = new Image("images/noon.jpg", "Noon", "A bright noon scene with the sun high in the sky and clear blue skies.");
let evening = new Image("images/evening.jpg", "Evening", "A serene evening with the sun setting and casting a golden glow over the landscape.");
let evening1 = new Image("images/evening1.jpg", "Evening1", "A breathtaking evening sky glowing with shades of pink, casting a warm and serene light over the landscape.");
let night = new Image("images/night.jpeg", "Night", "A tranquil night scene with the moon shining brightly.");

let images = [morning1 ,morning, noon, evening1, evening, night];
let slides = [morning, morning1, noon, evening1, evening, night];

function setBackground(images) {
    let currentHour = new Date().getHours();
    let index;

    if (currentHour >= 5 && currentHour < 9) {
        index = 0; // Morning1
    } else if (currentHour >= 9 && currentHour < 12) {
        index = 1; // Morning
    } else if (currentHour >= 12 && currentHour < 14) {
        index = 2; // Noon
    } else if (currentHour >= 14 && currentHour < 17) {
        index = 3; // Noon1
    } else if (currentHour >= 17 && currentHour < 19) {
        index = 4; // Evening
    } else {
        index = 5; // Night
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

let previousIndex = -1;
function randomImage() {
    let randomIndex = Math.floor(Math.random() * (slides.length));
    
    while (randomIndex === previousIndex || randomIndex === 0) {
        randomIndex = Math.floor(Math.random() * (slides.length));
    }

    document.getElementById("slide").src = slides[randomIndex].getURL();
    document.getElementById("slide").setAttribute("alt", slides[randomIndex].getAttributeValue());
    document.getElementById("slide-description").textContent = slides[randomIndex].getDescription();
    
    previousIndex = randomIndex;
}

function setSlideShow(slides) {
    document.getElementById("slide").src = slides[0].getURL();
    document.getElementById("slide").setAttribute("alt", slides[0].getAttributeValue());
    document.getElementById("slide-description").textContent = slides[0].getDescription();
}

document.getElementById("next-image").addEventListener("click", ()=> {
    nextImage(); 
});

document.getElementById("random-image").addEventListener("click", ()=> {
    randomImage();
});

window.onload = function() {
    setInterval(() => {
        setBackground(images);
    }, 1000);

    setSlideShow(slides);
}

