import { cardData } from "./sources.js";

const fallbackImg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

const container = document.createElement('div');
container.className = 'card-container';

cardData.forEach((user) => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${user.image ? user.image : fallbackImg}" alt="${user.name || "No Name"}" class="card-img" onerror="this.onerror=null; this.src='${fallbackImg}'" />
    <h3>${user.name}</h3>
    <h4>${user.title}</h4>
    <p>${user.description}</p>
    <button class="name-btn">Button</button> 
    `;

 
  // Api intergration monday
  const button = card.querySelector('.name-btn');
  button.addEventListener('click', () => {  
    alert(`Employer Name: ${user.name}`);
  });

  container.appendChild(card);
});

document.body.appendChild(container);




