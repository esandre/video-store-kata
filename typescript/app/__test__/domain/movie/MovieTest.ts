import {
    childrenConfiguration,
    newReleaseConfiguration
} from "../../../source/domain/movie/movieConfiguration"
import {calculateSingleMoviePrice} from "../../../source/domain/movie/price";
import {Rental} from "../../../source/domain/rental";

describe('Movie', function () {

    it('rent new release movie one day', () => {
        expect(
            calculateSingleMoviePrice(
                new Rental(1,newReleaseConfiguration("UNUSED"))
        )).toEqual(3.0)
    });

    it('rent new release movie two day', () => {
        expect(calculateSingleMoviePrice(new Rental(2, newReleaseConfiguration("UNUSED")))).toEqual(6.0)
    });

    it('rent children movie one day', () => {
        expect(calculateSingleMoviePrice(new Rental(1, childrenConfiguration("UNUSED")))).toEqual(1.5)
    });

    it('rent children movie four day', () => {
        expect(calculateSingleMoviePrice(new Rental(4, childrenConfiguration("UNUSED")))).toEqual(3.0)
    });
});