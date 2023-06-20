import {MovieConfiguration} from "./movie/movieConfiguration";

export class Rental {
    rentalDays: number;
    mc: MovieConfiguration;

    constructor(rentalDays: number, m: MovieConfiguration) {
        this.rentalDays = rentalDays;
        this.mc = m;
    }
}