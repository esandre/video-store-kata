import {Rental} from "../../../source/domain/rental";
import {MovieConfiguration} from "../../../source/domain/movie/movieConfiguration";

describe('Movie', function () {

    it('rent new release movie one day', () => {
        expect(
                new Rental(1,MovieConfiguration.NewReleaseWithTitle("UNUSED")).CalculateSingleMoviePrice()
        ).toEqual(3.0)
    });

    it('rent new release movie two day', () => {
        expect(
            new Rental(2, MovieConfiguration.NewReleaseWithTitle("UNUSED")).CalculateSingleMoviePrice()
        ).toEqual(6.0)
    });

    it('rent children movie one day', () => {
        expect(
            new Rental(1, MovieConfiguration.ChildrenWithTitle("UNUSED")).CalculateSingleMoviePrice()
        ).toEqual(1.5)
    });

    it('rent children movie four day', () => {
        expect(
            new Rental(4, MovieConfiguration.ChildrenWithTitle("UNUSED")).CalculateSingleMoviePrice()
        ).toEqual(3.0)
    });
});