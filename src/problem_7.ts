{
    class Car {
        constructor(public make: string, public model: string, public year: number) { }
        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            // console.log(currentYear - this.year);
            return currentYear - this.year;
        }
    }

    // const car = new Car("Honda", "Civic", 2018);
    // car.getCarAge();

}
