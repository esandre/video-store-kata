import {PrintableMovie} from "../domain/movie/receipt";
import {Rental} from "../domain/rental";
import {Cart} from "../domain/movie/cart";
import {GenericReceipt} from "./genericReceipt";

const textMovieReceipt = (m: PrintableMovie): string =>
     `- ${m.title} ${m.priceRepresentation}`

const textMoviesReceiptWith = (
    movieReceiptFunc: (x: Rental) => string) =>
     (rentals: Rental[]) => rentals.map(r => movieReceiptFunc(r)).join("\n")

const textFooterReceiptWith = (
    totalPrice: (rentals: Rental[]) => number) =>
     (rentals: Rental[]) => `Total ${totalPrice(rentals).toPrecision(2)}`

const textFooterRentalPointReceiptWith = (
    calculateRentalPoint: (cart: Cart) => number) =>
     (cart: Cart) => `Total Rental points ${calculateRentalPoint(cart)}`

//WIRING HERE
const textFooterRentalPointReceipt =
    textFooterRentalPointReceiptWith(c => c.CalculateRentalPoints());

const textFooterReceipt: (rentals: Rental[]) => string =
    textFooterReceiptWith(rentals => new Cart(rentals).CalculateTotalPrice());

const textMoviesReceipt: (rentals: Rental[]) => string =
    textMoviesReceiptWith(r => textMovieReceipt(PrintableMovie.FromRental(r => r.CalculateSingleMoviePrice(), r)));

const textHeader = (user: string) => `Hello ${user} this is your receipt\n`;

export class TextReceipt extends GenericReceipt {
    MakeBody(rentals: Rental[]): string {
        return textMoviesReceipt(rentals);
    }

    MakeFooter(rentals: Rental[]): string {
        return textFooterReceipt(rentals);
    }

    MakeHeader(user: string): string {
        return textHeader(user);
    }

    MakeRentalPoint(cart: Cart): string {
        return textFooterRentalPointReceipt(cart);
    }
}