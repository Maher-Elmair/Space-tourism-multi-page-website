/*=============================== The code is for header ===============================*/
let body = document.querySelector("body");
let ul = document.querySelector(".list-links");
let links = document.querySelectorAll(".link");

let containerIcon = document.querySelector(".icons");
let icons = document.querySelectorAll(".icon");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");

// if ul have class name open ,work that code for using icons menu and close.
icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        ul.classList.toggle("open")
        if (ul.classList.contains("open")) {
            body.style.overflowY = "hidden";
            menu.style.display = "none";
            close.style.display = "block";
        } else {
            body.style.overflowY = "auto";
            menu.style.display = "block";
            close.style.display = "none";
        }
    })
});

// If the screen is larger than 769px remove the container icon and vice versa.
window.addEventListener("resize", function () {
    // return window.innerWidth;
    if (this.window.innerWidth >= 769) {
        containerIcon.style.display = "none";
    } else {
        containerIcon.style.display = "block";
    }
});

// work with active-line class name Where it is not repeated more than once
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        for (let n = 0; n < links.length; n++) {
            links[n].classList.remove("active-line");
        }
        this.classList.add("active-line");
    });
}
/*=============================== The code is for destination page ===============================*/
let planets = document.querySelectorAll(".planet");

let variableTitle = document.querySelector(".variable-title");
let variableSubtitle = document.querySelector(".variable-subtitle");
let distance = document.querySelector(".distance");
let travel = document.querySelector(".travel");
let imageDestination = document.querySelector(".image-destination");


import dataJson from '../JSON/data.json' assert {"type": "json"};

for (let i = 0; i < planets.length; i++) {
    // console.log(dataJson.destinations[i]);
    planets[i].addEventListener("click", function () {
        planets[i].innerText = dataJson.destinations[i].name
        variableTitle.innerText = dataJson.destinations[i].name
        variableSubtitle.innerText = dataJson.destinations[i].description
        distance.innerText = dataJson.destinations[i].distance
        travel.innerText = dataJson.destinations[i].travel
        imageDestination.src = dataJson.destinations[i].images.png
    })
}

// work with planet-active class name Where it is not repeated more than once
for (let i = 0; i < planets.length; i++) {
    planets[i].addEventListener("click", function () {
        for (let n = 0; n < planets.length; n++) {
            planets[n].classList.remove("planet-active");
        }
        this.classList.add("planet-active");
    });
}

/*=============================== The code is for technology page ===============================*/
let dots = document.querySelectorAll(".dot")

// work with active-circle class name Where it is not repeated more than once
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        for (let n = 0; n < dots.length; n++) {
            dots[n].classList.remove("active-dot");
        }
        this.classList.add("active-dot");
    });
}

let job = document.querySelector(".job")
let nameCrew = document.querySelector(".name-crew")
let aboutHim = document.querySelector(".about-him")
let yourImage = document.querySelector(".your-image")

for (let i = 0; i < dots.length; i++) {
    // console.log(dataJson.destinations[i]);
    dots[i].addEventListener("click", function () {
        job.innerText = dataJson.crew[i].role
        nameCrew.innerText = dataJson.crew[i].name
        aboutHim.innerText = dataJson.crew[i].bio
        yourImage.src = dataJson.crew[i].images.png
    })
}

/*=============================== The code is for technology page ===============================*/
let circles = document.querySelectorAll(".circle");

// work with active-circle class name Where it is not repeated more than once
for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function () {
        for (let n = 0; n < circles.length; n++) {
            circles[n].classList.remove("active-circle");
        }
        this.classList.add("active-circle");
    });
}
let nameTech = document.querySelector(".name")
let descriptionTech = document.querySelector(".description")
let imageAbout = document.querySelector(".image-about")

for (let i = 0; i < circles.length; i++) {
    // console.log(dataJson.destinations[i]);
    circles[i].addEventListener("click", function () {
        nameTech.innerText = dataJson.technology[i].name
        descriptionTech.innerText = dataJson.technology[i].description
        // If the screen is larger than 769px Edite the src and vice versa.
        if (window.innerWidth >= 769) {
            imageAbout.src = dataJson.technology[i].images.portrait
        } else {
            imageAbout.src = dataJson.technology[i].images.landscape
        }
    })
}