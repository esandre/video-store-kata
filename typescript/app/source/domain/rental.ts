import {MovieConfiguration} from "./movie/movieConfiguration";
import {MoviePrices} from "./moviePrices";

export class Rental {
    rentalDays: number;
    mc: MovieConfiguration;

    constructor(rentalDays: number, m: MovieConfiguration) {
        this.rentalDays = rentalDays;
        this.mc = m;
    }

    CalculateAdditionalCost(): MoviePrices {
        let additionalCost = 0.0;
        if (this.rentalDays > this.mc.minRentDays) {
            const additionalDays = this.rentalDays - this.mc.minRentDays
            additionalCost = this.mc.additionaCostPerDay * additionalDays;
        }
        return new MoviePrices(additionalCost, this.mc.price);
    }
}