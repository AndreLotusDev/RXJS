import { combineLatest, interval } from 'rxjs';
import { map } from 'rxjs/operators';

function getTemperature(): Observable<number> {
    return interval(5000).pipe(map(() => Math.random() * 50));
}

function getHumidity(): Observable<number> {
    return interval(5000).pipe(map(() => Math.random() * 100));
}

function checkWeatherConditions(): void {
    const temperature$ = getTemperature();
    const humidity$ = getHumidity();

    combineLatest(temperature$, humidity$).subscribe(
        ([temperature, humidity]) => {
            if (temperature > 30 && humidity > 80) {
                console.log('Unfavorable conditions for outdoor activities!');
            } else {
                console.log('Favorable conditions for outdoor activities.');
            }
        }
    );
}

checkWeatherConditions();
