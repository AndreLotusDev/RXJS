import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

const clickObservable = fromEvent<MouseEvent>(document, 'click');

const subscription = clickObservable.pipe(take(10)).subscribe((event) => {
    console.log('Clicked!', event);

    if (subscription.closed) {
        console.log('Unsubscribed!');
    }
});
