import {Rental} from "../rental";

export class PrintableMovie {
    title: string;
    priceRepresentation: string;

    constructor(title: string, priceRepresentation: string) {
        this.title = title;
        this.priceRepresentation = priceRepresentation;
    }

    static FromRental(calculateMoviePrice: (r: Rental) => number, rental: Rental){
        return new PrintableMovie(rental.mc.title, calculateMoviePrice(rental).toPrecision(2));
    }
}

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