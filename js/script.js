const searchButton = document.getElementById("search-form__button");
const searchForm = document.getElementById("search-form");

searchButton.addEventListener("click", () => {
  searchForm.classList.toggle("search-form--active");
});
