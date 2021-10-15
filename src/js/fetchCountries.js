// import countryElem from '../js/templates/countrysElem.hbs';
// import refs from '../js/refs.js';
// const { inputForm, inputValue, divContainer } = refs;
// import { debounce } from 'lodash';

export default function fetchCountries(name) {
    return fetch(`https://restcountries.com/v2/name/${name}`)
        .then(response => {
            if (response.status !== 400) {
                return response.json();
            }
        }).catch(error => alert(error));
};







