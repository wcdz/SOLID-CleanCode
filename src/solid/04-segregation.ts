interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {

    public fly(): number { return 50; }
    public eat(): void { }

}

class Humminbird implements Bird, FlyingBird {

    public fly(): number { return 100; }
    public eat(): void { }

}

class Ostrich implements Bird, RunningBird {

    public eat(): void { }
    public run(): void { }

}

class Penguin implements Bird, SwimmerBird {

    public eat(): void { }
    public swim(): void { }

}
