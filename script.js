import data from "./data.json" assert { type: "json" };

const animalList = document.getElementById("animals-list");
const filterDropdown = document.getElementById("filter");

displayList(data);

filterDropdown.addEventListener('change', filterResults);

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
        listItems = `<li>
            <h2>${item.name}</h2>
            <button id="btn-${item.id}">
                <img alt=${item.alt} src=${item.image}>
            </button>
            <audio id=${item.id} src=${item.audio}></audio>
            <p><span aria-hidden="true">&#128172</span><span class="sr-only">pronounciation</span>${item.pronounciation}</p>
        </li>`;
        animalList.innerHTML += listItems;
        document.querySelector(`#btn-${item.id}`).addEventListener('click',() => {
            document.getElementById(item.id).play();
        });
    }
    // to do
    // Add on click function on the ul element
    
}



// const menuBtn = document.getElementById("menuBtn");
// const menu = document.getElementById("menu");

// Menu operability - is this the best way?
// menuBtn.addEventListener('click', () => {
//     menu.classList.toggle('close');
// });

// Audio play - listener on buttons - how to implement
// target element is image and not button with click
// animalList.addEventListener('click', (e) => {
//     console.log(e);
//     console.log(this);
// })

// Check which page we are on
// let currentArr = [];
// if (heading.innerText.includes("Sea Animals")) {
//     currentArr = seaAnimalsArr;
// } else {
//     currentArr = insectsArr;
// }



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
