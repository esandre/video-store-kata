import {Rental} from "../rental";

export class PrintableMovie {
    readonly title: string;
    readonly priceRepresentation: string;

    constructor(title: string, priceRepresentation: string) {
        this.title = title;
        this.priceRepresentation = priceRepresentation;
    }
}