
// Los metodos abstractos permiten dar una plantilla de metodos
export abstract class Vehicle {

    // public getNumberOfSeats(): number {
    //     throw Error('Method not implemented');
    // }

    abstract getNumberOfSeats(): number;

}

export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    public getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    public getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    public getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    public getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    public getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}