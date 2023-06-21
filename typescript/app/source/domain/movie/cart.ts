import {Rental} from "../rental";

export class Cart {
    private readonly _rentals: Rental[];

    public constructor(rentals: Rental[]){
        this._rentals = rentals;
    }

    public CalculateTotalPrice() : number {
        return this._rentals.map(r => r.CalculateSingleMoviePrice()).reduce((x, y) => x + y);
    }

    public CalculateRentalPoints() : number {
        return this._rentals.map(r=>r.RentPoints()).reduce((x,y)=>x+y);
    }
}