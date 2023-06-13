import { fromEvent } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

function getSongsByArtist(artist: string) {
    return fetch(`https://api.example.com/artists/${artist}/songs`)
        .then((response) => response.json())
        .then((data) => data.songs);
}

const artistInput: HTMLInputElement =
    document.querySelector('input#artist');

fromEvent(artistInput, 'input')
    .pipe(
        mergeMap((event: Event) => {
            const artist = (event.target as HTMLInputElement).value;
            return getSongsByArtist(artist);
        })
    )
    .subscribe((songs: string[]) => {
        console.log('Songs:', songs);
    });