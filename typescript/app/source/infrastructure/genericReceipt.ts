import {Rental} from "../domain/rental";

export abstract class GenericReceipt {

    abstract MakeHeader(user: string) : string;
    abstract MakeBody(rentals:Rental[]) : string;
    abstract MakeFooter(rentals:Rental[]) : string;
    abstract MakeRentalPoint(rentals:Rental[]) : string;

    Print(user:string, rentals:Rental[])
    {
        return this.MakeHeader(user) +
            this.MakeBody(rentals) + "\n" +
            this.MakeFooter(rentals) + "\n" +
            this.MakeRentalPoint(rentals);
    }
}