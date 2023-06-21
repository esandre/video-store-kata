export class MoviePrices {
    private readonly _additionalCost: number;
    private readonly _movieBasePrice: number;

    constructor(additionalCost: number, movieBasePrice: number) {
        this._additionalCost = additionalCost;
        this._movieBasePrice = movieBasePrice;
    }

    CalculateTotalPrice(): number {
        return this._movieBasePrice + this._additionalCost;
    }
}