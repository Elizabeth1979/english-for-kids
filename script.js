import data from "./data.json" assert { type: "json" };

const animalList = document.getElementById("animals-list");
const filterDropdown = document.getElementById("filter");
const dataArr = data;

displayList(dataArr);

filterDropdown.addEventListener('change', filterResults);

function filterResults(e) {
    const value = this.value;
    console.log(value);
    const filteredArr = dataArr.filter((item) => item.category === {value});
    console.log("filter", filteredArr);
    // displayList(filteredArr);
}

// display the list of animals
function displayList(data) {
    console.log(data);
    let listItems = "";
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        // Why += and not =+
        listItems += `<li>
            <h2>${item.name}</h2>
            <button onclick="document.getElementById(${item.id}).play();">
                <img alt=${item.alt} src=${item.image}>
            </button>
            <audio id=${item.id} src=${item.audio}></audio>
            <p><span aria-hidden="true">&#128172</span><span class="sr-only">pronounciation</span>${item.pronounciation}</p>
        </li>`;
    }
    // Why not append?
    animalList.innerHTML += listItems;
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
