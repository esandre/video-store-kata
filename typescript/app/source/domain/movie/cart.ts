import {Rental} from "../rental";

export class Cart {
    private readonly _rentals: Rental[];

    public constructor(rentals: Rental[]){
        this._rentals = rentals;
    }

    public CalculateTotalPrice() : number {
        const totalPrice = this._rentals.map(r => r.CalculateSingleMoviePrice()).reduce((x, y) => x + y);

        const moviesAvailableToReduction = this.ExtractPairs();
        const reduction = moviesAvailableToReduction.length == 0 ? 0 :
            moviesAvailableToReduction
            .map(r => r.CalculateSingleMoviePrice())
            .reduce((sum, current) => sum + current) * 0.3;

        return totalPrice - reduction;
    }

    public CalculateRentalPoints() : number {
        return this._rentals.map(r=>r.RentPoints()).reduce((x,y)=>x+y);
    }

    public Map<T>(mapMethod: (value: Rental) => T) : T[]  {
        return this._rentals.map(mapMethod);
    }

    private NumberOfChildrenAndRegularPairs() {
        const numberOfChildren = this._rentals.filter(r => r.IsChildren()).length;
        const numberOfRegular = this._rentals.filter(r => r.IsRegular()).length;
        return Math.min(numberOfRegular, numberOfChildren);
    }

    private ExtractPairs() : Rental[] {
        const numberOfPairs = this.NumberOfChildrenAndRegularPairs();
        const childrenMovies = this._rentals.filter(r => r.IsChildren()).slice(0, numberOfPairs);
        const regularMovies = this._rentals.filter(r => r.IsRegular()).slice(0, numberOfPairs);

        return childrenMovies.concat(regularMovies);
    }
}