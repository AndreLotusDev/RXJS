import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const root_api = 'https://random-data-api.com/api/';

const randomName$ = ajax(root_api + 'name/random_name');
const randomNation$ = ajax(root_api + 'nation/random_nation');
const randomFood$ = ajax(root_api + 'food/random_food');

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
    ([name, nation, food]) => {
        console.log(name, nation, food);
        console.log(
            `${name.response.four_word_name} lives in ${nation.response.nationality} and likes to eat ${food.response.dish}`
        );
    }
);
