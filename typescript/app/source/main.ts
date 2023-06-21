import {MovieConfiguration} from "./domain/movie/movieConfiguration";
import {Rental} from "./domain/rental";
import {TextReceipt} from "./infrastructure/textReceipt";
import {HtmlMovieReceipt} from "./infrastructure/htmlReceipt";

let aRental = new Rental(1, MovieConfiguration.NewReleaseWithTitle("Harry Potter"));
let anotherRental = new Rental(1, MovieConfiguration.NewReleaseWithTitle("Mission Impossible"));
let thirdRental = new Rental(4, MovieConfiguration.NewReleaseWithTitle("Peppa pig"));
console.log("------ PLAIN TEXT --------")
console.log(
    new TextReceipt().PrintForUser("Text Receipt User",
        Array.of(
            aRental,
            anotherRental,
            thirdRental)));
console.log("------ HTML --------")
console.log(
    new HtmlMovieReceipt().PrintForUser("Html Receipt User",
        Array.of(
            aRental,
            anotherRental,
            thirdRental)));