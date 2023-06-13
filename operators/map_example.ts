import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const root_api = 'https://random-data-api.com/api/';

const randomName$ = ajax<any>(root_api + 'name/random_name').pipe(
    map((m) => m.response.first_name)
);
const randomNation$ = ajax<any>(root_api + 'nation/random_nation').pipe(
    map((m) => m.response.nationality)
);
const randomFood$ = ajax<any>(root_api + 'food/random_food').pipe(
    map((m) => m.response.dish)
);

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
    ([name, nation, food]) => {
        console.log(name, nation, food);
        console.log(`${name} lives in ${nation} and likes to eat ${food}`);
    }
);
