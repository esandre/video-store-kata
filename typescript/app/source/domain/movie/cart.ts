import {Rental} from "../rental";

export class Cart {
    private readonly _rentals: Rental[];

    public constructor(rentals: Rental[]){
        this._rentals = rentals;
    }

    public CalculateTotalPrice() : number {
        const totalPrice = this._rentals.map(r => r.CalculateSingleMoviePrice()).reduce((x, y) => x + y);
        if(this.IsAChildrenAndRegularPair())
            return totalPrice - (totalPrice * 0.3);

        return totalPrice;
    }

    public CalculateRentalPoints() : number {
        return this._rentals.map(r=>r.RentPoints()).reduce((x,y)=>x+y);
    }

    public Map<T>(mapMethod: (value: Rental) => T) : T[]  {
        return this._rentals.map(mapMethod);
    }

    private IsAChildrenAndRegularPair() {
        return this._rentals.length == 2
            && this._rentals.some(r => r.IsChildren())
            && this._rentals.some(r => r.IsRegular());
    }
}