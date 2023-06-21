import {Rental} from "../rental";

const rentPointsFor =
    (f:(r:Rental)=>number):
        (rentals:Rental[])=>number=>{
        return (rentals) => rentals.map(r=>f(r)).reduce((x,y)=>x+y);
    };

export const calculateRentalPoints: (rentals: Rental[]) => number = rentPointsFor(r => r.RentPoints())