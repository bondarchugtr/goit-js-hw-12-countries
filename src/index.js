import './sass/main.scss';
import { fetchCountries } from './js/fetchCountries.js';
import refs from './js/refs.js';
import { debounce } from 'lodash';
import { error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotifyCountdown from '@pnotify/countdown';
defaultModules.set(PNotifyMobile, { swipeDismiss: false });
import countrysElem from './js/templates/countrysElem.hbs';

const { inputForm, inputValue, divContainer, searchForm } = refs;



searchForm.addEventListener('input', debounce((onInputCountrys), 500))


function onInputCountrys(evt) {
    const form = evt.target;
    const searchInput = form.elements

    // const name = form.elements
    console.log(searchInput)
}





