import './sass/main.scss';
import fetchCountries from './js/fetchCountries.js';
import refs from './js/refs.js';
import { debounce } from 'lodash';
import { error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotifyCountdown from '@pnotify/countdown';
defaultModules.set(PNotifyMobile, { swipeDismiss: false });
import countrysElem from './js/templates/countrysElem.hbs';

const { inputForm, inputValue, divContainer, countryInfo, countryItem } = refs;

inputValue.addEventListener('input', debounce((onInputCountrys), 500));

function countryGet(name) {
    fetchCountries(name)
        .then(data => {

            if (data.length > 10) {
                error({ title: 'Too many matches found.', text: 'Please entera morespecific query!' });

            } else if (data.length > 1) {
                console.log('ghghg');
                renderCountries(data);
            } else {
                console.log('deded');
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
    divContainer.innerHTML = marcup;
}

function test(evt) {
    console.log(evt.target)
}





