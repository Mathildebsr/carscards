const voitures = [
    {
        modele: "McLaren P1",
        image: "https://i.goopics.net/auufem.png",
        prix: "1.635.750€",
        moteur: "V8",
        puissance: "916 ch",
        transmission: "Propulsion",
        year: 2013,
        produite:false,
        rgb: [192, 192, 192],
        performances: {
            vitesse: "350 km/h",
            t0_100: 2.8,
        },
    },
    {
        modele: "Ferrari 458",
        image: "https://i.goopics.net/k7bbjh.png",
        prix: "202.972€",
        moteur: "V8",
        puissance: "570 ch",
        transmission: "Propulsion",
        year: 2009,
      produite:false,
      rgb: [196, 21, 28],
        performances: {
            vitesse: "325 km/h",
            t0_100: 3.4,
        },
    },
     {
        modele: "LaFerrari",
        image: "https://i.goopics.net/gypsjp.png",
        prix: "4.250.000€",
        moteur: "V12",
        puissance: "963 ch",
        transmission: "Propulsion",
        year: 2013,
       produite:false,
       rgb: [196, 21, 28],
        performances: {
            vitesse: "351 km/h",
            t0_100: 2.8,
        },
    },
     {
        modele: "Ferrari F8 Turbo",
        image: "https://i.goopics.net/19eb1n.png",
        prix: "349.000€",
        moteur: "V8",
        puissance: "720 ch",
        transmission: "Propulsion",
        year: 2019,
       produite:false,
       rgb: [196, 21, 28],
        performances: {
            vitesse: "340 km/h",
            t0_100: 2.9,
        },
    },
     {
        modele: "Audi R8 Coupé",
        image: "https://i.goopics.net/6wzchl.png",
        prix: "215.000€",
        moteur: "V10",
        puissance: "620 ch",
        transmission: "Intégrale",
        year: 2019,
       produite:false,
       rgb: [56, 62, 66],
        performances: {
            vitesse: "331 km/h",
            t0_100: 3.1,
        },
    },
  {
        modele: "BMW I8 Coupé",
        image: "https://i.goopics.net/6xdv8e.png",
        prix: "145.000€",
        moteur: "Hybride",
        puissance: "374 ch",
        transmission: "Intégrale",
        year: 2018,
    produite:false,
    rgb: [206, 112, 43],
        performances: {
            vitesse: "250 km/h",
            t0_100: 4.6,
        },
    },
     {
        modele: "Ford Mustang Vintage",
        image: "https://i.goopics.net/4xjbel.png",
        prix: "100.000€",
        moteur: "V8",
        puissance: "122 ch",
        transmission: "Propulsion",
        year: 1967,
       produite:false,
       rgb: [43, 107, 228],
        performances: {
            vitesse: "190 km/h",
            t0_100: 8.0,
        },
    },
     {
        modele: "Corvette C8",
        image: "https://i.goopics.net/uve2ln.png",
        prix: "150.000€",
        moteur: "V8",
        puissance: "482 ch",
        transmission: "Propulsion",
        year: 2021,
       produite:true,
       rgb: [0, 0, 0],
        performances: {
            vitesse: "296 km/h",
            t0_100: 3.5,
        },
    },
     {
        modele: "McLaren 720s",
        image: "https://i.goopics.net/ehuggr.png",
        prix: "249.275€",
        moteur: "V8",
        puissance: "720 ch",
        transmission: "Propulsion",
        year: 2017,
       produite:false,
       rgb: [255, 155, 0],
        performances: {
            vitesse: "341 km/h",
            t0_100: 2.9,
        },
    },
     {
        modele: "Chevrolet Camaro",
        image: "https://i.goopics.net/groogt.png",
        prix: "52.000€",
        moteur: "V8",
        puissance: "405 ch",
        transmission: "Propulsion",
        year: 2011,
       produite:false,
       rgb: [255, 200, 0],
        performances: {
            vitesse: "250 km/h",
            t0_100: 5.6,
        },
    },
     {
        modele: "Ferrari 488 GTB",
        image: "https://i.goopics.net/uhutp2.png",
        prix: "210.984€",
        moteur: "V8",
        puissance: "1 020 ch",
        transmission: "Propulsion",
        year: 2015,
       produite:false,
       rgb: [196, 21, 28],
        performances: {
            vitesse: "330 km/h",
            t0_100: 3,
        },
    },
     {
        modele: "Corvette C5",
        image: "https://i.goopics.net/wf7f2b.png",
        prix: "32.000€",
        moteur: "V8",
        puissance: "344 ch",
        transmission: "Propulsion",
        year: 2001,
       produite:false,
       rgb: [0, 0, 0],
        performances: {
            vitesse: "274 km/h",
            t0_100: 4.7,
        },
    },
   
];


let currentIndex = 0;
let cards = [];

function creerElement(car) {
    const card = document.createElement("div");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "card-header";
    header.textContent = car.modele;

    const img = document.createElement("img");
    img.src = car.image;

    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = `
        <p><strong>Prix:</strong> ${car.prix}</p>
        <p><strong>Année:</strong> ${car.year}</p>
        <div class="details">
            <p><strong>Moteur:</strong> ${car.moteur}</p>
            <p><strong>Puissance:</strong> ${car.puissance}</p>
            <p><strong>Transmission:</strong> ${car.transmission}</p>
            <p><strong>Performances:</strong> 0-100 km/h: ${car.performances.t0_100}s, Vmax: ${car.performances.vitesse}</p>
            <p><strong>Toujours produite ?</strong> 
                <span class="status-icon">${car.produite ? 
                    '<svg class="icon-check" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>' : 
                    '<svg class="icon-cross" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'}
                </span>
            </p>
            <p><strong>Couleur:</strong></p>
        </div>
    `;

    if (car.rgb) {
        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        colorBox.style.backgroundColor = `rgb(${car.rgb.join(',')})`;
        body.querySelector(".details").appendChild(colorBox);
    }

    card.appendChild(header);
    card.appendChild(img);
    card.appendChild(body);
    return card;
}

function updateCarousel() {
    const container = document.getElementById('cardContainer');
    const total = voitures.length;

    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        
        const diff = index - currentIndex;
        if (index === currentIndex) {
            card.classList.add('active');
        } else {
            const prevIndex = (currentIndex - 1 + total) % total;
            const nextIndex = (currentIndex + 1) % total;

            if (index === prevIndex) card.classList.add('prev');
            if (index === nextIndex) card.classList.add('next');
        }
    });

    // Réorganisation effet de pile
    const activeCard = cards[currentIndex];
    const prevCard = cards[(currentIndex - 1 + total) % total];
    const nextCard = cards[(currentIndex + 1) % total];
    
    container.prepend(prevCard);
    container.appendChild(nextCard);
}

function initCarousel() {
    const container = document.getElementById('cardContainer');
    container.innerHTML = '';
    
    voitures.forEach(car => {
        const card = creerElement(car);
        container.appendChild(card);
    });
    
    cards = Array.from(container.children);
    updateCarousel();
}

function navigate(direction) {
    const lastIndex = currentIndex;
    currentIndex = direction === 'next' ? 
        (currentIndex + 1) % voitures.length : 
        (currentIndex - 1 + voitures.length) % voitures.length;
    
    cards[lastIndex].style.transition = 'all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)';
    cards[currentIndex].style.transition = 'all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)';
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("cardContainer");
    const wrapper = document.getElementById("carouselWrapper");
  
     // Initialisation en mode grid
    container.classList.add("grid-container");
    wrapper.classList.add("grid-mode");
    
    voitures.forEach(car => {
        const card = creerElement(car);
        container.appendChild(card);
    });
});

document.querySelector('.arrow.left').addEventListener('click', () => navigate('prev'));
document.querySelector('.arrow.right').addEventListener('click', () => navigate('next'));

document.getElementById("affichage").addEventListener("click", () => {
    const container = document.getElementById("cardContainer");
    const wrapper = document.getElementById("carouselWrapper");
    
    if (container.classList.contains("grid-container")) {
        container.classList.remove("grid-container");
        wrapper.classList.remove("grid-mode");
        container.style.transform = 'translateX(0)';
        initCarousel();
    } else {
        wrapper.classList.add("grid-mode");
        container.classList.add("grid-container");
        container.innerHTML = "";
        voitures.forEach(car => {
            const card = creerElement(car);
            card.style.margin = "0";
            container.appendChild(card);
        });
    }
});