import data from "./data.json" assert { type: "json" };

const animalList = document.getElementById("animals-list");
const typeFilter = document.getElementById("filter-by-type");
const letterFilter = document.getElementById("filter-by-letter");
const resetFiltersButton = document.getElementById("reset-filters");
const liveRegion = document.getElementById("live-region");
const searchInput = document.getElementById("search");
const searchForm = document.getElementById("searchForm");
const searchResultsList = document.getElementById("search-results-list");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");

displayList(data);

/*DARK MODE*/
let darkMode = localStorage.getItem("darkMode");
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
  moon.setAttribute("aria-hidden", "true");
  sun.removeAttribute("aria-hidden");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
  sun.setAttribute("aria-hidden", "true");
  moon.removeAttribute("aria-hidden");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

/* Filter and Search */
searchInput.addEventListener("keyup", displayResults);
searchForm.addEventListener("submit", searchWord);
typeFilter.addEventListener("change", filterByType);
letterFilter.addEventListener("change", filterByLetter);

function resetFilters() {
  searchInput.value = "";
  typeFilter.value = "all";
  letterFilter.value = "all"
  displayList(data);
  liveRegion.innerText = `${filteredArr.length} results found`;
}

function searchWord(e) {
  e.preventDefault();
  let inputValue = searchInput.value.toLowerCase();
  const filteredArr = data.filter((item) =>
    item.name.toLowerCase().includes(inputValue)
  );
  displayList(filteredArr);
  liveRegion.innerText = `${filteredArr.length} results found`;
}

// autocomplete
function displayResults() {
  searchResultsList.innerHTML = "";
  // if(searchInput.value === "") {
  //     searchResultsList.classList.add("hidden-results");
  //     return;
  // }

  // searchResultsList.classList.remove("hidden-results");
  // let inputValue = searchInput.value.toLowerCase();
  // const filteredArr = data.filter((item) => item.name.toLowerCase().includes(inputValue));
  // let listItems = "";
  // filteredArr.forEach(item => {
  //     listItems += `<li class="search-results-list-item">${item.name}</li>`
  // });

  // if(filteredArr.length === 0) {
  //     searchResultsList.classList.add("hidden-results");
  //     return;
  // }

  // searchResultsList.innerHTML += listItems;
}

function filterByType() {
  const value = this.value;
  const filteredArr = data.filter(
    (item) => value === "all" || item.category === value
  );
  displayList(filteredArr);
  liveRegion.innerText = `${filteredArr.length} results found`;
}

function filterByLetter() {
  const value = this.value;
  const filteredArr = data.filter(
    (item) => value === "all" || item.name.startsWith(value.toUpperCase())
  );
  displayList(filteredArr);
  liveRegion.innerText = `${filteredArr.length} results found`;
}

// display the list of animals
function displayList(data) {
  animalList.innerHTML = "";
  let listItems = "";
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    listItems += `<li class="list-item">
            <div class="list-item-title">
                <h2>${item.name}</h2>
                <p><span aria-hidden="true">&#128172</span><span class="sr-only">pronounciation</span>${
                  item.pronounciation
                }</p>
            </div>
            <button class="animal-btn" id="btn-${item.name}">
                <img class="animal-img" width="300" height="300" alt=${
                  item.alt
                } src=${item.image}>
            </button>
            <audio id=${item.name} src=${item.audio}></audio>
            <p class="about">${item.about === undefined ? "" : item.about}</p>
        </li>`;
  }
  if (listItems === "") {
    animalList.innerHTML = `<p class="empty-state">No words found</p>`;
    liveRegion.innerText = "No words found";
  } else {
    animalList.innerHTML += listItems;
  }
  addPlayOnClick();
}

function addPlayOnClick() {
  animalList.addEventListener("click", (e) => {
    if (e.target.localName != "button") return;
    let audio = e.target.nextElementSibling;
    audio.play();
  });
}

// Menu operability - is this the best way?
// menuBtn.addEventListener('click', () => {
//     menu.classList.toggle('close');
// });

/*
1. Implement filtering by first letter
2. Filter by category - instead of a new page
3. Where to get favicon for free?
4. How to create logo SVG?
5. Push to github
6. Save to google without node modules
7. At first render display all animals - any performance issue?
8. More categories: Nature, MAmmals, Birds
9. How do I know if its a string or a number?
10. Add sort functionality
11. Convert search to filter?
*/

/*
Visibility
https://css-tricks.com/snippets/css/toggle-visibility-when-hiding-elements/

Optional Chaining
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

Dropdown menu
https://freefrontend.com/css-dropdown-menus/


*/
