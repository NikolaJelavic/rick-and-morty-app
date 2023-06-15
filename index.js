// import  {createCharacterCard} from "./components/card/card.js";
import createCharacterCard from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

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

navigation.append(prevButton, pagination, nextButton);
searchBarContainer.append(searchBar);

fetchCharacters();

async function fetchCharacters() {
  const result = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await result.json();
  maxPage = data.info.pages;
  const characters = data.results;
  pagination.textContent = `${page} / ${maxPage}`;
  cardContainer.innerHTML = "";
  characters.map(createCard).forEach((card) => cardContainer.append(card));
}
