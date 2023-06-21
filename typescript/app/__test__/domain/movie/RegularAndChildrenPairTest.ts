import {Rental} from "../../../source/domain/rental";
import {MovieConfiguration} from "../../../source/domain/movie/movieConfiguration";
import {Cart} from "../../../source/domain/movie/cart";

describe('Regular and Children pair owns -30%', () => {
   it('Reduces Cart price by 30% for a single pair of (children, regular)', () => {
       const childrenRental = new Rental(1, MovieConfiguration.ChildrenWithTitle("A_CHILDREN_TITLE"));
       const regularRental = new Rental(1, MovieConfiguration.RegularWithTitle("REGULAR_RELEASE_TITLE"));

       const priceWithoutPromo = childrenRental.CalculateSingleMoviePrice() + regularRental.CalculateSingleMoviePrice();
       const expectedPrice = priceWithoutPromo - (priceWithoutPromo * 0.3);

       const cartWithPair = new Cart(Array.of(childrenRental, regularRental));
       expect(cartWithPair.CalculateTotalPrice()).toEqual(expectedPrice);
   })

   it('Does not Reduces Cart price by 30% for a single pair of (children, children)', () => {
       const childrenRental1 = new Rental(1, MovieConfiguration.ChildrenWithTitle("A_CHILDREN_TITLE"));
       const childrenRental2 = new Rental(1, MovieConfiguration.ChildrenWithTitle("A_CHILDREN_TITLE"));

       const priceWithoutPromo = childrenRental1.CalculateSingleMoviePrice() + childrenRental2.CalculateSingleMoviePrice();

       const cartWithPair = new Cart(Array.of(childrenRental1, childrenRental2));
       expect(cartWithPair.CalculateTotalPrice()).toEqual(priceWithoutPromo);
   })
});