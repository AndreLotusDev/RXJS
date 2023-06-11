let str = "";

document.addEventListener("keydown", (event: KeyboardEvent) => {
  str += event.key;
  console.log(str);
});import { fromEvent } from "rxjs";
import { scan } from "rxjs/operators";

const keydown$ = fromEvent<KeyboardEvent>(document, "keydown");

const str$ = keydown$.pipe(
  scan((str, event) => str + event.key, "")
);

str$.subscribe((str) => console.log(str));