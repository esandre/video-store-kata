import {Rental} from "../domain/rental";
import {Cart} from "../domain/movie/cart";

export abstract class GenericReceipt {

    abstract MakeHeader(user: string) : string;
    abstract MakeBody(rentals:Rental[]) : string;
    abstract MakeFooter(cart: Cart) : string;
    abstract MakeRentalPoint(cart: Cart) : string;

    Print(user:string, rentals:Rental[])
    {
        const cart = new Cart(rentals);

        return this.MakeHeader(user) +
            this.MakeBody(rentals) + "\n" +
            this.MakeFooter(cart) + "\n" +
            this.MakeRentalPoint(cart);
    }
}