import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

function getAlbumsByArtist(artist: string) {
    return of(['Album 1', 'Album 2', 'Album 3']).pipe(
        delay(2000)
    );
}

of('Artista 1', 'Artista 2', 'Artista 3')
    .pipe(concatMap((artist) => getAlbumsByArtist(artist)))
    .subscribe((albums) => {
        console.log('Álbuns:', albums);
    });
