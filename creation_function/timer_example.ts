import { timer } from 'rxjs';

const source = timer(0, 1000); // Emits a value immediately and then every 1000ms (1 second)

const subscription = source.subscribe((value) => {
    console.log(value);

    if (value == 3) {
        subscription.unsubscribe();
    }
});

const secondEmitter = source.subscribe({
    next: (x) => {
        if (x == 3) {
            secondEmitter.unsubscribe();
        }
        console.log('Observer got a next value: ' + x);
    },
    error: (err) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
});
