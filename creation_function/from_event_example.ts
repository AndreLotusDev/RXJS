import { fromEvent, Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

var click = fromEvent<MouseEvent>(triggerButton, `click`);

let timesClick = 0;
var subscription = click.subscribe((s) => {
    timesClick++;
    console.log('test click' + s.clientX, s.clientY);

    if (timesClick == 10) {
        subscription.unsubscribe();
    }
});
