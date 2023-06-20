import {newReleaseConfiguration, Rental} from "./domain/movie/videoStore";
import {printTextReceipt} from "./infrastructure/textReceipt";
import {printHtmlReceipt} from "./infrastructure/htmlReceipt";

let aRental = new Rental(1, newReleaseConfiguration("Harry Potter"));
let anotherRental = new Rental(1, newReleaseConfiguration("Mission Impossible"));
let thirdRental = new Rental(4, newReleaseConfiguration("Peppa pig"));
console.log("------ PLAIN TEXT --------")
console.log(
    printTextReceipt("Text Receipt User",
        Array.of(
            aRental,
            anotherRental,
            thirdRental)));
console.log("------ HTML --------")
console.log(
    printHtmlReceipt("Html Receipt User",
        Array.of(
            aRental,
            anotherRental,
            thirdRental)));