import { from } from "rxjs";

from(["Andre", "Barbara", "Lucinda"]).subscribe({
    next: name => console.log(name),
    completed: () => console.log("completed")
});