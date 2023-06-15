import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject<string>('Initial Value');

const subscription = behaviorSubject.subscribe((value) => {
  console.log(`Received value: ${value}`);
});

behaviorSubject.next('Hello');
behaviorSubject.next('World');

subscription.unsubscribe();