import {PrintableMovie} from "../domain/movie/receipt";
import {Rental} from "../domain/rental";
import {Cart} from "../domain/movie/cart";
import {GenericReceipt} from "./genericReceipt";

const textMovieReceipt = (m: PrintableMovie): string =>
    `- ${m.title} ${m.priceRepresentation}`

const textMoviesReceiptWith = (
    movieReceiptFunc: (x: Rental) => string) =>
     (rentals: Rental[]) => rentals.map(r => movieReceiptFunc(r)).join("\n")

const textMoviesReceipt: (rentals: Rental[]) => string =
    textMoviesReceiptWith(
        r => textMovieReceipt(PrintableMovie.FromRental(
            r => r.CalculateSingleMoviePrice(), r)));

export class TextReceipt extends GenericReceipt {
    MakeBody(rentals: Rental[]): string {
        return textMoviesReceipt(rentals);
    }

    MakeFooter(rentals: Rental[]): string {
        return `Total ${new Cart(rentals).CalculateTotalPrice().toPrecision(2)}`
    }

    public MakeHeader(user: string): string {
        return `Hello ${user} this is your receipt\n`;
    }

    MakeRentalPoint(cart: Cart): string {
        return `Total Rental points ${cart.CalculateRentalPoints()}`;
    }
}