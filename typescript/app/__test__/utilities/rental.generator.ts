import {Rental} from "../../source/domain/rental";
import {RentalBuilder} from "./rental.builder";

export class RentalGenerator {
    public *Generate(nb: number): Generator<Rental>{
        const builder = new RentalBuilder();

        for (let i = 0; i < nb; i++) {
            yield builder.Build();
        }
    }
}