import {PrintableMovie} from "../domain/movie/receipt";
import {Rental} from "../domain/rental";
import {Cart} from "../domain/movie/cart";
import {GenericReceipt} from "./genericReceipt";

export class HtmlMovieReceipt extends GenericReceipt {
    static PrintMovie(m: PrintableMovie) : string {
        return `<li>${m.title} ${m.priceRepresentation}</li>`;
    }
    
    static HtmlMoviesReceiptWith(htmlMovieReceipt: (x: Rental) => string) {
        return (rentals: Rental[]) => `<ul>\n${rentals.map(r => htmlMovieReceipt(r)).join("\n")}\n</ul>`;
    }
    
    static HtmlFooterReceiptWith(calculateMoviesTotalPrice: (cart: Cart) => number){
        return (cart: Cart) => `<br>You owed ${calculateMoviesTotalPrice(cart).toPrecision(2)}`;
    }

    static HtmlFooterRentalPointReceiptWith(rentalPoints: number) {
        return `<br>You earned ${rentalPoints} frequent renter points\n</body>\n</html>`;
    }

    MakeBody(rentals: Rental[]): string {
        return HtmlMovieReceipt.HtmlMoviesReceiptWith(
            rental => HtmlMovieReceipt
                .PrintMovie(PrintableMovie.FromRental(rental))
        )(rentals);
    }

    MakeFooter(cart:Cart): string {
        return HtmlMovieReceipt.HtmlFooterReceiptWith(cart => cart.CalculateTotalPrice())(cart);
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
        return HtmlMovieReceipt.HtmlFooterRentalPointReceiptWith(cart.CalculateRentalPoints());
    }
}