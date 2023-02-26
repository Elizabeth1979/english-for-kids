import data from "./data.json" assert { type: "json" };

const animalList = document.getElementById("animals-list");
const filterByType = document.getElementById("filter-by-type");
const filterByLetter = document.getElementById("filter-by-letter");

displayList(data);

filterByType.addEventListener('change', filterResults);

function filterResults() {
    const value = this.value;
    const filteredArr = data.filter((item) => value=="all" || item.category === value);
    displayList(filteredArr);
}

// display the list of animals
function displayList(data) {
    animalList.innerHTML = "";
    let listItems = "";
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        // Why += and not =+
        listItems += `<li class="list-item">
            <div class="list-item-title">
                <h2>${item.name}</h2>
                <p><span aria-hidden="true">&#128172</span><span class="sr-only">pronounciation</span>${item.pronounciation}</p>
            </div>
            <button class="animal-btn" id="btn-${item.name}">
                <img class="animal-img" width="300" height="300" alt=${item.alt} src=${item.image}>
            </button>
            <audio id=${item.name} src=${item.audio}></audio>
        </li>`;
    }
    animalList.innerHTML += listItems;
    addPlayOnClick();
}

function addPlayOnClick() {
    animalList.addEventListener('click', (e) => { 
        if(e.target.localName != "button") return;
        let audio = e.target.nextElementSibling;
        audio.play();
    });
}

// const menuBtn = document.getElementById("menuBtn");
// const menu = document.getElementById("menu");

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
*/

/*
Questions
1. Live server - better way
2. 
*/

/*
Visibility
https://css-tricks.com/snippets/css/toggle-visibility-when-hiding-elements/

Optional Chaining
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

Dropdown menu
https://freefrontend.com/css-dropdown-menus/


*/
