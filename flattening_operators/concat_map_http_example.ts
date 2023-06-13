import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { concatMap, map } from "rxjs/operators";

const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

const random_api = `https://random-data-api.com/api/${value}/random_${value}`;

fromEvent(fetchButton, 'click').pipe(
    map(() => endpointInput.value),
    concatMap(value =>
        ajax(random_api)
    )
).subscribe(
    value => console.log(value)
);
