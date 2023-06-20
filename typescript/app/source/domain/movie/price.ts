import {compose} from "../compose";
import {MoviePrices} from "../moviePrices";
import {Rental} from "../rental";

const calculateAdditionalCost = (rental: Rental): MoviePrices => {
    return rental.CalculateAdditionalCost();
}

const calculatePrice = (moviePrices: MoviePrices): number =>
     moviePrices.CalculatePrice();

const calculateTotalPriceWith =
    (calculateMoviePrice:(r:Rental) => number) =>
     (rentals:Rental[]) => rentals.map(calculateMoviePrice).reduce((x,y)=>x+y)

export const calculateSingleMoviePrice: (x: Rental) => number = compose(calculateAdditionalCost,calculatePrice)
export const calculateTotalMoviesPrice: (rentals: Rental[]) => number = calculateTotalPriceWith(calculateSingleMoviePrice)