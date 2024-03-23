const figurines = [
  {
    name: "౨ৎ ˖ ࣪⊹ MEGA SPACE MOLLY 1000% Heartfelt Words ౨ৎ ˖ ࣪⊹",
    overlayText: "౨ৎ ˖ ࣪⊹ New ౨ৎ ˖ ࣪⊹",
    image:
      "https://prod-eurasian-res.popmart.com/default/20240201_103450_806331__1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    description:
      "౨ৎ ˖ ࣪⊹ This adorable space-themed Molly figurine is filled with heartfelt words, ready to bring joy and love to your collection. ౨ৎ ˖ ࣪⊹",
    material: "ABS/PVC/PC",
    size: "700mm",
    blindBoxRules: "Blind Box refers to the type of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that shows a collection; some figurines are rarer to find than others, these are referred to as secret, hidden or chase figures.",
    price: "$37,500",
  },

  {
    name: "౨ৎ ˖ ࣪⊹ MEGA ROYAL MOLLY 1000% MIKA NINAGAWA ౨ৎ ˖ ࣪⊹",
    overlayText: "౨ৎ ˖ ࣪⊹ New ౨ৎ ˖ ࣪⊹",
    image:
      "https://prod-eurasian-res.popmart.com/default/20240118_201951_154989__1200x1200.jpg",
    description:
      "౨ৎ ˖ ࣪⊹ Meet the royal Molly, designed by MIKA NINAGAWA, in a grand and majestic style fit for royalty. ౨ৎ ˖ ࣪⊹",
    material: "ABS/PC",
    size: "900mm",
    blindBoxRules: "Blind Box refers to the type of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that shows a collection; some figurines are rarer to find than others, these are referred to as secret, hidden or chase figures.",
    price: "$50,000",
  },
  {
    name: "౨ৎ ˖ ࣪⊹ MEGA LABUBU TEC 1000% All About Us ౨ৎ ˖ ࣪⊹",
    overlayText: "౨ৎ ˖ ࣪⊹ New ౨ৎ ˖ ࣪⊹",
    image:
      "https://prod-eurasian-res.popmart.com/default/20240314_141436_458628__1200x1200.jpg",
    description:
      "౨ৎ ˖ ࣪⊹ Labubu TEC is here to remind us that it's 'All About Us' with its charming and tech-inspired design. ౨ৎ ˖ ࣪⊹",
    material: "PVC",
    size: "793mm",
    blindBoxRules: "Blind Box refers to the type of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that shows a collection; some figurines are rarer to find than others, these are referred to as secret, hidden or chase figures.",
    price: "$37,500",
  },
  {
    name: "౨ৎ ˖ ࣪⊹ MEGA SPACE MOLLY 1000% Patrick Star ౨ৎ ˖ ࣪⊹",
    overlayText: "౨ৎ ˖ ࣪⊹ New ౨ৎ ˖ ࣪⊹",
    image:
      "https://prod-eurasian-res.popmart.com/default/1_xnMHIcifXZ_1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    description:
      "౨ৎ ˖ ࣪⊹ Join Patrick Star on an interstellar adventure with this space-themed Molly figurine, guaranteed to bring a smile to your face. ౨ৎ ˖ ࣪⊹",
    material: "ABS/PC/PVC",
    size: "700mm",
    blindBoxRules: "Blind Box refers to thetype of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that shows a collection; some figurines are rarer to find than others, these are referred to as secret, hidden or chase figures.",
    price: "$50,000",
  },
];

let popupOpen = false;

function generateFigurinesCards() {
  const figurinesList = document.getElementById("figurinesList");
  figurinesList.innerHTML = "";

  figurines.slice(0, 4).forEach((figurine, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "position-relative");
    card.setAttribute("data-index", index);

    card.innerHTML = `
          <h5 class="card-title">${figurine.name}</h5>
              <img src="${figurine.image}" class="card-img-top" alt="${figurine.name}">
              
              <div class="card-overlay">
                  <p class="overlay-text">${figurine.overlayText}</p>
              </div>
          `;
    card.addEventListener("click", () => openPopup(figurine));
    figurinesList.appendChild(card);
  });
}

function openPopup(figurine) {
  const popup = document.getElementById("popup");

  if (!popupOpen) {
    popup.innerHTML = `
            <div class="popup-content">
              <div class="popup-image">
                <img src="${figurine.image}" class="popup-img" alt="${figurine.name}">
              </div>
              <div class="popup-info">
                <h2>${figurine.name}</h2>
                <p><strong>Material:</strong> ${figurine.material}</p>
                <p><strong>Size:</strong> ${figurine.size}</p>
                <p>${figurine.description}</p>
                <p><strong>Blind Box Rules:</strong> ${figurine.blindBoxRules}</p>
                <p><strong>Price:</strong> ${figurine.price}</p>
              </div>
            </div>
          `;
    popup.style.display = "block";
    popupOpen = true;
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  popupOpen = false;
}

document.getElementById("menuButton").addEventListener("click", closePopup);
generateFigurinesCards();
