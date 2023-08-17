//Loading Screen
window.addEventListener('load', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(function () {
        loadingScreen.style.display = 'none';
    }, 3000);
});


// Country Population

async function getPopulationByCountryName(countryName) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        const data = await response.json();
        const population = data[0].population;
        return population;
    } catch (error) {
        console.error(error);
    }
}

const form = document.querySelector('form');
const input = document.querySelector('input');
const result = document.querySelector('#result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const countryName = input.value;
    const population = await getPopulationByCountryName(countryName);
    result.textContent = `${countryName} has a population of ${population} people`;
});


// Live Population Counter

let lastPopulation1 = 123; // set initial population value for last three digit
let lastPopulation2 = 786; // set initial population value for remaining three digit

function increasePopulation2() {
    let populationCounter = document.querySelector('.population-counter2');
    let newPopulation = lastPopulation2 + 1;
    populationCounter.textContent = newPopulation.toLocaleString();
    lastPopulation2 = newPopulation; // update last population value
}


function increasePopulation1() {
    let populationCounter = document.querySelector('.population-counter1');
    let growthRate = 1.01;
    let newPopulation = Math.round(lastPopulation1 * growthRate);
    populationCounter.textContent = newPopulation.toLocaleString();
    lastPopulation1 = newPopulation; // update last population value
    if (newPopulation > 999) {
        lastPopulation1 = 123;
        increasePopulation2();

    }
}

setInterval(increasePopulation1, 2000); // increase population every 2 seconds



// Animation For loading live Population

setTimeout(() => {
    document.querySelector('.livePopulation').style.display = "block";
}, 8000);

setTimeout(() => {
    document.querySelector('.loadingPopulation').style.display = "none";
}, 8000);