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