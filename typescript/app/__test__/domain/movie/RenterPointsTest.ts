import {Rental} from "../../../source/domain/rental";
import {MovieConfiguration} from "../../../source/domain/movie/movieConfiguration";
import {Cart} from "../../../source/domain/movie/cart";

describe('Renter Points', function () {

    it('two new release movie one day', () => {
        let aRental = new Rental(1, MovieConfiguration.NewReleaseWithTitle("::title::"));
        let anotherRental = new Rental(1, MovieConfiguration.NewReleaseWithTitle("::anothertitle::"));
        expect(Cart.CalculateRentalPoints(Array.of(aRental,anotherRental))).toEqual(2)
    });

    it('two new release movie one day', () => {
        let one = new Rental(1, MovieConfiguration.NewReleaseWithTitle("::title::"));
        let two = new Rental(7, MovieConfiguration.NewReleaseWithTitle("::anothertitle::"));
        let three = new Rental(4, MovieConfiguration.ChildrenWithTitle("::children title::"));

        expect(Cart.CalculateRentalPoints(Array.of(one,two,three))).toEqual(4)
    });
});