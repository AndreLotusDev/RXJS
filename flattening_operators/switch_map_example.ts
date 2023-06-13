import { fromEvent } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

function search(query: string) {
    return fetch(`https://api.example.com/search?query=${query}`)
        .then((response) => response.json())
        .then((data) => data.results);
}

const searchInput: HTMLInputElement =
    document.querySelector('input#search');

fromEvent(searchInput, 'input')
    .pipe(
        debounceTime(300),
        map((event: Event) => (event.target as HTMLInputElement).value),
        distinctUntilChanged(),
        switchMap((query: string) => search(query))
    )
    .subscribe((results: any[]) => {
        console.log('Results:', results);
    });