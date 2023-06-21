import {Rental} from "../rental";

export class Cart {
    public static CalculateTotalPriceWith(rentals: Rental[]) : number {
        return rentals.map(r => r.CalculateSingleMoviePrice()).reduce((x, y) => x + y);
    }
}