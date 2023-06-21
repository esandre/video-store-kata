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

    it('Reduces Cart price by 30% for a double pair of (children, regular)', () => {
        const childrenRental1 = new Rental(1, MovieConfiguration.ChildrenWithTitle("A_CHILDREN_TITLE"));
        const childrenRental2 = new Rental(1, MovieConfiguration.ChildrenWithTitle("A_CHILDREN_TITLE"));
        const regularRental1 = new Rental(1, MovieConfiguration.RegularWithTitle("REGULAR_RELEASE_TITLE"));
        const regularRental2 = new Rental(1, MovieConfiguration.RegularWithTitle("REGULAR_RELEASE_TITLE"));

        const rentalArray = Array.of(childrenRental1, childrenRental2, regularRental1, regularRental2);

        const priceWithoutPromo = rentalArray
            .map(r => r.CalculateSingleMoviePrice())
            .reduce((sum, current) => sum + current);

        const expectedPrice = priceWithoutPromo - (priceWithoutPromo * 0.3);

        const cartWithPair = new Cart(rentalArray);
        expect(cartWithPair.CalculateTotalPrice()).toEqual(expectedPrice);
    })

   it('Does not Reduces Cart price by 30% for a single pair of (children, children)', () => {
       const childrenRental1 = new Rental(1, MovieConfiguration.ChildrenWithTitle("A_CHILDREN_TITLE"));
       const childrenRental2 = new Rental(1, MovieConfiguration.ChildrenWithTitle("A_CHILDREN_TITLE"));

       const priceWithoutPromo = childrenRental1.CalculateSingleMoviePrice() + childrenRental2.CalculateSingleMoviePrice();

       const cartWithPair = new Cart(Array.of(childrenRental1, childrenRental2));
       expect(cartWithPair.CalculateTotalPrice()).toEqual(priceWithoutPromo);
   })

    it('Does not Reduces Cart price by 30% for a movie not in pair of (children, regular)', () => {
        const childrenRental1 = new Rental(1, MovieConfiguration.ChildrenWithTitle("A_CHILDREN_TITLE"));
        const childrenRental2 = new Rental(1, MovieConfiguration.ChildrenWithTitle("A_CHILDREN_TITLE"));
        const regularRental = new Rental(1, MovieConfiguration.RegularWithTitle("REGULAR_RELEASE_TITLE"));

        const rentalArray = Array.of(childrenRental1, childrenRental2, regularRental);

        const priceWithoutPromo = rentalArray
            .map(r => r.CalculateSingleMoviePrice())
            .reduce((sum, current) => sum + current);

        const promoOnOnePair = (childrenRental1.CalculateSingleMoviePrice() + regularRental.CalculateSingleMoviePrice()) * 0.3;

        const cart = new Cart(rentalArray);
        expect(cart.CalculateTotalPrice()).toEqual(priceWithoutPromo - promoOnOnePair);
    })
});