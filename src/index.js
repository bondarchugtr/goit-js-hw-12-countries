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
        .catch(() => {
            refs.divContainer.innerHTML = '';
            error({ title: 'No information' });
        });
}

function onInputCountrys(evt) {
    const name = evt.target.value;
    countryGet(name)
}



function renderCountries(countries) {
    const marcup = countrysElem(countries);
    refs.divContainer.innerHTML = marcup;
}

function renderCountriesList(countries) {
    const marcup = countryList(countries);
    refs.divContainer.innerHTML = marcup;
    onClickLink();
}


function onClickLink() {
    const countryItem = document.querySelectorAll('.country__list-item');
    countryItem.forEach(el => {
        el.addEventListener('click', e => {
            refs.inputValue.value = e.target.textContent
            fetchCountries(refs.inputValue.value).then(renderCountries)
            refs.inputForm.reset()
        })
    })
}


export function errorNot(error) {
    const myError = notice({
        title: 'Error',
        text: 'error',
        modules: new Map([...defaultModules, [PNotifyDesktop, {}]]),
    });
}





