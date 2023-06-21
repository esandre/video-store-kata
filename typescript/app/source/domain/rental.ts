import {MovieConfiguration} from "./movie/movieConfiguration";
import {MoviePrices} from "./moviePrices";
import {PrintableMovie} from "./movie/receipt";

export class Rental {
    private readonly _rentalDays: number;
    private readonly _movieConfiguration: MovieConfiguration;

    constructor(rentalDays: number, movieConfiguration: MovieConfiguration) {
        this._rentalDays = rentalDays;
        this._movieConfiguration = movieConfiguration;
    }

    public CalculateCostConsideringRentalDays(): MoviePrices {
        let additionalCost = 0.0;

        if (this._rentalDays > this._movieConfiguration.minRentDays) {
            const additionalDays = this._rentalDays - this._movieConfiguration.minRentDays
            additionalCost = this._movieConfiguration.additionaCostPerDay * additionalDays;
        }

        return new MoviePrices(additionalCost, this._movieConfiguration.price);
    }

    public CalculateSingleMoviePrice() : number {
        return this.CalculateCostConsideringRentalDays().CalculateTotalPrice();
    }

    public RentPoints():number {
        let baserenterPoint = 1;

        if(this._rentalDays>1){
            return baserenterPoint+ this._movieConfiguration.additionalRenterPoint
        }

        return baserenterPoint
    };

    public MakePrintable() : PrintableMovie{
        return new PrintableMovie(this._movieConfiguration.title, this.CalculateSingleMoviePrice().toPrecision(2));
    }

    public IsChildren() : boolean {
        return this._movieConfiguration.IsChildren();
    }

    public IsRegular() : boolean {
        return this._movieConfiguration.IsRegular();
    }
}