import './sass/main.scss';
import fetchCountries from './js/fetchCountries.js';
import { debounce } from 'lodash';
import { error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotifyCountdown from '@pnotify/countdown';
defaultModules.set(PNotifyMobile, { swipeDismiss: false });
import countrysElem from './js/templates/countrysElem.hbs';
import countryList from './js/templates/countryList.hbs';


const refs = {
    inputForm: document.querySelector('.form__country'),
    inputValue: document.querySelector('.form__country-input'),
    divContainer: document.querySelector('.countrys__block'),
    countryItem: document.querySelector('.country__list-item'),
    divContainer: document.querySelector('.countrys__block')
}


refs.inputValue.addEventListener('input', debounce((onInputCountrys), 500));

function countryGet(name) {
    fetchCountries(name)
        .then(data => {
            if (data.length > 10) {
                error({ title: 'Too many matches found.', text: 'Please entera morespecific query!' });
            } else if (data.length > 1) {
                renderCountriesList(data);
            } else {
                renderCountries(data);

            }
        })
        .catch(error => alert(error));
}
function onInputCountrys(evt) {
    const name = evt.target.value;
    countryGet(name)
}

function renderCountries(countries) {
    const marcup = countrysElem(countries);
    refs.divContainer.innerHTML = marcup;
    // styleDisplay()
}

function renderCountriesList(list) {
    const marcup = countryList(list);
    refs.divContainer.innerHTML = marcup;
    // styleDisplay()

}


// function styleDisplay() {

//     // const countryList = document.querySelector('.country__list');
//     // countryList.style.display = "block";
//     // const countryInfo = document.querySelectorAll('.country__info');
//     const countryItem = document.querySelectorAll('.country__list-item');
//     const countryTitle = document.querySelector('.country__title');


// }








