export class MovieConfiguration {
    title: string;
    price: number;
    minRentDays: number;
    additionaCostPerDay: number;
    additionalRenterPoint: number;
    private readonly _type: string;

    constructor(title: string,
                price: number,
                minRentDays: number,
                additionaCostPerDay: number,
                additionalRenterPoint: number,
                type: string) {
        this.title = title;
        this.price = price;
        this.minRentDays = minRentDays;
        this.additionaCostPerDay = additionaCostPerDay;
        this.additionalRenterPoint = additionalRenterPoint;
        this._type = type;
    }

    public static RegularWithTitle(title: string) {
        return new MovieConfiguration(title,2.0,1,1.5,0, "Regular");
    }

    public static NewReleaseWithTitle(title: string) {
        return new MovieConfiguration(title,3.0,1,3.0,1, "NewRelease");
    }

    public static ChildrenWithTitle(title: string) {
        return  new MovieConfiguration(title,1.5,3,1.5,0, "Children");
    }

    public IsChildren() {
        return this._type == "Children";
    }

    public IsRegular() {
        return this._type == "Regular";
    }
}