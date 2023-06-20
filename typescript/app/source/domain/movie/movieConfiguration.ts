export class MovieConfiguration {
    title: string;
    price: number;
    minRentDays: number;
    additionaCostPerDay: number;
    additionalRenterPoint: number;

    constructor(title: string,
                price: number,
                minRentDays: number,
                additionaCostPerDay: number,
                additionalRenterPoint: number) {
        this.title = title;
        this.price = price;
        this.minRentDays = minRentDays;
        this.additionaCostPerDay = additionaCostPerDay;
        this.additionalRenterPoint = additionalRenterPoint;
    }

    public static NewReleaseWithTitle(title: string) {
        return new MovieConfiguration(title,3.0,1,3.0,1);
    }

    public static ChildrenWithTitle(title: string) {
        return  new MovieConfiguration(title,1.5,3,1.5,0);
    }
}