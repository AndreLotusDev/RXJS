import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

numbers$.pipe(
    tap((value) => console.log('Original value:', value)),
    tap((value) => console.log('Doubled value:', value * 2)),
    tap((value) => {
        if (value % 2 === 0) {
            console.log('Even number detected:', value);
        }
    })
).subscribe();