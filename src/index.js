import './sass/main.scss';
import './js/fetchCountries.js';
import refs from './js/refs.js';
import { debounce } from 'lodash';
const { inputForm, inputValue } = refs;

import { error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotifyCountdown from '@pnotify/countdown';
defaultModules.set(PNotifyMobile, {});


inputValue.addEventListener('input', debounce((onInputCountrys), 500))

function onInputCountrys(evt) {
    console.log(evt)
}




