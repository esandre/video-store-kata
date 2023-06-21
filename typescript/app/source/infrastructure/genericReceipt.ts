import {Rental} from "../domain/rental";
import {Cart} from "../domain/movie/cart";

export abstract class GenericReceipt {

    abstract MakeHeader(user: string) : string;
    abstract MakeBody(rentals:Rental[]) : string;
    abstract MakeFooter(rentals:Rental[]) : string;
    abstract MakeRentalPoint(cart: Cart) : string;

    Print(user:string, rentals:Rental[])
    {
        return this.MakeHeader(user) +
            this.MakeBody(rentals) + "\n" +
            this.MakeFooter(rentals) + "\n" +
            this.MakeRentalPoint(new Cart(rentals));
    }
}