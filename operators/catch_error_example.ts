import { EMPTY, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

function searchMovies(keyword: string) {
    if (keyword === 'error') {
        return throwError('There was an error searching movies.');
    }

    const results = ['Movie 1', 'Movie 2', 'Movie 3'];
    return of(results);
}

searchMovies('action')
    .pipe(catchError((e) => EMPTY))
    .subscribe((movies) => {
        console.log('Result:', movies);
    });
