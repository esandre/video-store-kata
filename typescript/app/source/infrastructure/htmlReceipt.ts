import {PrintableMovie} from "../domain/movie/receipt";
import {Rental} from "../domain/rental";
import {Cart} from "../domain/movie/cart";
import {GenericReceipt} from "./genericReceipt";

export class HtmlMovieReceipt extends GenericReceipt {
    private static PrintRental(r: Rental) : string {
        const printableMovie = PrintableMovie.FromRental(r);
        return `<li>${printableMovie.title} ${printableMovie.priceRepresentation}</li>`;
    }

    MakeBody(cart: Cart): string {
        const prefix = '<ul>\n';

        const lines = cart
            .Map(HtmlMovieReceipt.PrintRental)
            .join("\n");

        return prefix + lines + `\n</ul>`;
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