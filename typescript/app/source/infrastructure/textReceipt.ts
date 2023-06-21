import {PrintableMovie} from "../domain/movie/receipt";
import {Rental} from "../domain/rental";
import {Cart} from "../domain/movie/cart";
import {GenericReceipt} from "./genericReceipt";



export class TextReceipt extends GenericReceipt {
    private RepresentPrintableMovie(m: PrintableMovie): string {
        return `- ${m.title} ${m.priceRepresentation}`;
    }

    MakeBody(rentals: Rental[]): string {
        return rentals.map(r => this.RepresentPrintableMovie(PrintableMovie.FromRental(r))).join("\n")
    }

    MakeFooter(cart: Cart): string {
        return `Total ${cart.CalculateTotalPrice().toPrecision(2)}`
    }

    public MakeHeader(user: string): string {
        return `Hello ${user} this is your receipt\n`;
    }

    MakeRentalPoint(cart: Cart): string {
        return `Total Rental points ${cart.CalculateRentalPoints()}`;
    }
}