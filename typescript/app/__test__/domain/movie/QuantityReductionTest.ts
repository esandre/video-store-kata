import {Rental} from "../../../source/domain/rental";
import {MovieConfiguration} from "../../../source/domain/movie/movieConfiguration";
import {RentalBuilder} from "../../utilities/rental.builder";
import {RentalGenerator} from "../../utilities/rental.generator";

describe("5 Movies and more has increasing reductions", () => {
    it('Reduces cart price by 5% for 5 movies', () => {
        const rentalsGenerator = new RentalGenerator().Generate(5);
        const rentals = [...rentalsGenerator];
    })
});