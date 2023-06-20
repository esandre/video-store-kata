import {calculateSingleMoviePrice} from "../../../source/domain/movie/price";
import {Rental} from "../../../source/domain/rental";
import {MovieConfiguration} from "../../../source/domain/movie/movieConfiguration";

describe('Movie', function () {

    it('rent new release movie one day', () => {
        expect(
            calculateSingleMoviePrice(
                new Rental(1,MovieConfiguration.NewReleaseWithTitle("UNUSED"))
        )).toEqual(3.0)
    });

    it('rent new release movie two day', () => {
        expect(calculateSingleMoviePrice(new Rental(2, MovieConfiguration.NewReleaseWithTitle("UNUSED")))).toEqual(6.0)
    });

    it('rent children movie one day', () => {
        expect(calculateSingleMoviePrice(new Rental(1, MovieConfiguration.ChildrenWithTitle("UNUSED")))).toEqual(1.5)
    });

    it('rent children movie four day', () => {
        expect(calculateSingleMoviePrice(new Rental(4, MovieConfiguration.ChildrenWithTitle("UNUSED")))).toEqual(3.0)
    });
});