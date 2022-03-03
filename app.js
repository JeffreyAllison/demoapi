// import functions
import { getPokedex } from './fetch-utilis.js';
// grab DOM elements
const template = document.querySelector('#template');
const selectEl = document.querySelector('select');
const list = document.querySelector('#list');
const errorElement = document.querySelector('#error-message');

async function loadPokedex() {
    const pokedex = await getPokedex();

    //console.log(pokedex);
    list.classList.add('pokemon');

    for (let pokemon of pokedex) {
        const clone = template.Content.cloneNode(true);

        const name = clone.querySelector(h2);
        const image = clone.querySelector(img);
        const type = clone.querySelector(h6);

        name.textContent = 'Name: ' + pokemon.pokemon;

        type.textContent = 'Type: ' + pokemon.type_1;

        image.src = pokemon.url_image;
        image.alt = pokemon.pokemon;

        list.appendChild(clone);

    }
}

loadPokedex();
// set event listeners
selectEl.addEventListener('change', async (e) => )
const selected = e.target.value;

if (selected === 'none') {
    const p = document.createElement('p');

    p.textContent = 'please selected an API';

    errorElement.appendChild(p):

}
    // get user input
    // use user input to update state
    // update DOM to reflect the new state// import functions

// grab DOM elements

// set event listeners 
    // get user input
    // use user input to update state
    // update DOM to reflect the new state
