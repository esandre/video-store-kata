import {PrintableMovie} from "../domain/movie/receipt";
import {calculateRentalPoints} from "../domain/movie/rentPoint";
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
    
    static HtmlFooterReceiptWith(calculateMoviesTotalPrice: (rentals: Rental[]) => number){
        return (rentals: Rental[]) => `<br>You owed ${calculateMoviesTotalPrice(rentals).toPrecision(2)}`;
    }

    static HtmlFooterRentalPointReceiptWith(calculateRentalPoint: (rentals: Rental[]) => number, rentals: Rental[]) {
        return `<br>You earned ${calculateRentalPoint(rentals)} frequent renter points\n</body>\n</html>`;
    }

    MakeBody(rentals: Rental[]): string {
        return HtmlMovieReceipt.HtmlMoviesReceiptWith(
            rental => HtmlMovieReceipt
                .PrintMovie(
                    PrintableMovie.FromRental(r => r.CalculateSingleMoviePrice(), rental))
        )(rentals);
    }

    MakeFooter(rentals: Rental[]): string {
        return HtmlMovieReceipt.HtmlFooterReceiptWith(
            rentals => Cart.CalculateTotalPriceWith(rentals))(rentals);
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

    MakeRentalPoint(rentals: Rental[]): string {
        return HtmlMovieReceipt.HtmlFooterRentalPointReceiptWith(calculateRentalPoints, rentals);
    }
}