import { notice, defaultModules } from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { errorNot } from '../index.js'
export default function fetchCountries(name) {
    return fetch(`https://restcountries.com/v2/name/${name}`)
        .then(response => {
            if (response.status !== 400) {
                return response.json();
            }
        }).catch(error => alert(errorNot));
};







