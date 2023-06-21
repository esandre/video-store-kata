import {PrintableMovie} from "../domain/movie/receipt";
import {Rental} from "../domain/rental";
import {Cart} from "../domain/movie/cart";
import {GenericReceipt} from "./genericReceipt";



export class TextReceipt extends GenericReceipt {
    private Represent(r: Rental): string {
        const printableMovie = PrintableMovie.FromRental(r);
        return `- ${printableMovie.title} ${printableMovie.priceRepresentation}`;
    }

    MakeBody(cart: Cart): string {
        return cart
            .Map(this.Represent)
            .join("\n")
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