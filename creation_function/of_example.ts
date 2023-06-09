import { of } from "rxjs";

of("Andre", "Barbara", "Lucinda").subscribe({
    next: name => console.log(name),
    completed: () => console.log("completed")
});