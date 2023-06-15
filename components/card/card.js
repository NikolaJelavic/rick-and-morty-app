
// export function createCharacterCard() {}

// // export async function fetchData() {
// //     const response = await fetch("https://rickandmortyapi.com/api/character");
// //     const data = await response.json();
// //     console.log(data);
// //     const character = data.results;
// //   }

  
export default function createCharacterCard(character) {

//   const cardContainer = document.querySelector('[data-js="card-container"]');
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `
<div class="card__image-container">
  <img
    class="card__image"
    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    alt="Rick Sanchez"
  />
  <div class="card__image-gradient"></div>
</div>
<div class="card__content">
  <h2 class="card__title">${character.name}</h2>
  <dl class="card__info">
    <dt class="card__info-title">Status</dt>
    <dd class="card__info-description">${character.status}</dd>
    <dt class="card__info-title">Type</dt>
    <dd class="card__info-description"><${character.type}/dd>
    <dt class="card__info-title">Occurrences</dt>
    <dd class="card__info-description">${character.episode.length}</dd>
  </dl>
</div>
`;
  return card;
}
// createCharacterCard();
//Write a function createCharacterCard inside the card.js file and export it

