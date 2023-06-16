export default function createNavButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);

  const lastPageButton = document.querySelector('.button:last-of-type');
  
  if (button !== lastPageButton) {
    button.classList.add("button");
  }

  return button;
}
