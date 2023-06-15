// import  {createCharacterCard} from "./components/card/card.js";
import createCharacterCard from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');

async function fetchCharacter() {
  // const response = await fetch("https://rickandmortyapi.com/api/character/");
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();
  console.log(data.results);
  const characters = data.results.slice(0, 20);

  // Make sure that the cardContainer is emptied every time new characters are fetched
  cardContainer.innerHTML = "";

  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.appendChild(card);

    // USING MAP AS AN ALTERNATIVE:
    //  characters.map(createCharacterCard).forEach((card) => cardContainer.append(card));
  });
}

fetchCharacter();

// const cardContainer = document.querySelector('[data-js="card-container"]');

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("e=", e.target.value);
  const formData = new FormData(e.target);
  console.log("e=", Object.fromEntries(formData));
  searchQuery = e.target.value;

  fetchCharacter();
});
