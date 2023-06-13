import { interval } from 'rxjs';

var sub = interval(1000).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
});

setTimeout(() => {
    sub.unsubscribe();
    console.log('unsubscribing');
}, 5000);
