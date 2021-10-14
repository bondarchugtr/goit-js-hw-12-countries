import countryElem from '../js/templates/countrysElem.hbs';
import refs from '../js/refs.js';
const { divContainer } = refs
fetchCountries('France')
    .then(renderCountries)
    .catch(error => alert(error));

function renderCountries(countries) {
    const marcup = countryElem(countries)
    divContainer.innerHTML = marcup
}
export default function fetchCountries(name) {
    return fetch(`https://restcountries.com/v2/name/${name}`)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
};







