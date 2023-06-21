import {PrintableMovie} from "../domain/movie/receipt";
import {Rental} from "../domain/rental";
import {GenericReceipt} from "./genericReceipt";
import {Cart} from "../domain/movie/cart";

export class HtmlMovieReceipt extends GenericReceipt {
    public constructor(cart: Cart) {
        super(cart);
    }

    private static PrintRental(r: Rental) : string {
        const printableMovie = r.MakePrintable();
        return `<li>${printableMovie.title} ${printableMovie.priceRepresentation}</li>`;
    }

    MakeBody(): string {
        const prefix = '<ul>\n';

        const lines = this.Cart
            .Map(HtmlMovieReceipt.PrintRental)
            .join("\n");

        return prefix + lines + `\n</ul>`;
    }

    MakeFooter(): string {
        return `<br>You owed ${this.Cart.CalculateTotalPrice().toPrecision(2)}`
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

    MakeRentalPoint(): string {
        return `<br>You earned ${this.Cart.CalculateRentalPoints()} frequent renter points\n</body>\n</html>`;
    }
}