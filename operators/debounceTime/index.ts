import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput, 'input')
    .pipe(
        map((m) => m.target['value']),
        debounceTime(1000)
    )
    .subscribe((s) => console.log('Slider value: ' + s));
