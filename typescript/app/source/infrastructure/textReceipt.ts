import {PrintableMovie} from "../domain/movie/receipt";
import {Rental} from "../domain/rental";
import {GenericReceipt} from "./genericReceipt";
import {Cart} from "../domain/movie/cart";

export class TextReceipt extends GenericReceipt {
    public constructor(cart: Cart) {
        super(cart);
    }

    private Represent(r: Rental): string {
        const printableMovie = r.MakePrintable();
        return `- ${printableMovie.title} ${printableMovie.priceRepresentation}`;
    }

    MakeBody(): string {
        return this.Cart
            .Map(this.Represent)
            .join("\n")
    }

    MakeFooter(): string {
        return `Total ${this.Cart.CalculateTotalPrice().toPrecision(2)}`
    }

    public MakeHeader(user: string): string {
        return `Hello ${user} this is your receipt\n`;
    }

    MakeRentalPoint(): string {
        return `Total Rental points ${this.Cart.CalculateRentalPoints()}`;
    }
}