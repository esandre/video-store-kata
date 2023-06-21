import {PrintableMovie} from "../domain/movie/receipt";
import {Rental} from "../domain/rental";
import {Cart} from "../domain/movie/cart";
import {GenericReceipt} from "./genericReceipt";

export class HtmlMovieReceipt extends GenericReceipt {
    private static PrintMovie(m: PrintableMovie) : string {
        return `<li>${m.title} ${m.priceRepresentation}</li>`;
    }

    MakeBody(rentals: Rental[]): string {
        return `<ul>\n${rentals.map(r => HtmlMovieReceipt
            .PrintMovie(PrintableMovie.FromRental(r))).join("\n")}\n</ul>`;
    }

    MakeFooter(cart:Cart): string {
        return `<br>You owed ${cart.CalculateTotalPrice().toPrecision(2)}`
    }

    MakeHeader(user: string): string {
        return `<!DOCTYPE html>\n` +
            `<html>\n` +
            `<head>\n` +
            `<title>Video store - statement for ${user}</title>\n` +
            `</head>\n` +
            `<body>\n` +
            `<h1>Rental Record for ${user}</h1>\n`
    }

    MakeRentalPoint(cart: Cart): string {
        return `<br>You earned ${cart.CalculateRentalPoints()} frequent renter points\n</body>\n</html>`;
    }
}