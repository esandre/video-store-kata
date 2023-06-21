import {Rental} from "../rental";

export class PrintableMovie {
    title: string;
    priceRepresentation: string;

    constructor(title: string, priceRepresentation: string) {
        this.title = title;
        this.priceRepresentation = priceRepresentation;
    }

    static FromRental(rental: Rental){
        return new PrintableMovie(rental.mc.title, rental.CalculateSingleMoviePrice().toPrecision(2));
    }
}