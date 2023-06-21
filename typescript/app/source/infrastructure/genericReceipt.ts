import {Rental} from "../domain/rental";
import {Cart} from "../domain/movie/cart";

export abstract class GenericReceipt {
    protected readonly Cart: Cart;

    protected constructor(cart: Cart) {
        this.Cart = cart;
    }

    protected abstract MakeHeader(user: string) : string;
    protected abstract MakeBody() : string;
    protected abstract MakeFooter() : string;
    protected abstract MakeRentalPoint() : string;

    PrintForUser(user:string)
    {
        return this.MakeHeader(user) +
            this.MakeBody() + "\n" +
            this.MakeFooter() + "\n" +
            this.MakeRentalPoint();
    }
}