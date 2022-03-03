// import functions
import { getPokedex } from './fetch-utilis.js';
// grab DOM elements
const template = document.querySelector('#template');
const list = document.querySelector('#list');
const selectEl = document.querySelector('select');
const errorElement = document.querySelector('#error-message');

async function loadPokedex() {
    const pokedex = await getPokedex();
    console.log(pokedex)
    list.classList.add('pokemon');

    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');

        name.textContent = 'Name: ' + pokemon.pokemon;

        type.textContent = 'Type: ' + pokemon.type_1;

        image.src = pokemon.url_image;
        image.alt = pokemon.pokemon;

        list.appendChild(clone);

    }
}

// set event listeners
selectEl.addEventListener('change', async (event) => {
    const selected = event.target.value;

    if (selected === 'none') {
        list.innerHTML = '';
        const p = document.createElement('p');

        p.textContent = 'please selected an API';

        errorElement.appendChild(p);
    } else if (selected === 'pokemon') {
        list.innerHTML = '';
        errorElement.innerHTML = '';

        await loadPokedex();
    } else if (selected === 'star-wars') {
        list.innerHTML = '';

    }
});



    // get user input
    // use user input to update state
    // update DOM to reflect the new state// import functions

// grab DOM elements

// set event listeners 
    // get user input
    // use user input to update state
    // update DOM to reflect the new state
