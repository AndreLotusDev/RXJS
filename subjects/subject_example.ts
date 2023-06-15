import { Subject } from 'rxjs';

const subject = new Subject<string>();

const subscription = subject.subscribe((value) => {
    console.log(`Received value: ${value}`);
});

subject.next('Hello');
subject.next('World');

subscription.unsubscribe();
