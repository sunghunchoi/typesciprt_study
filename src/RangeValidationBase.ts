class RangeValidationBase {
    constructor(private start: number, private end: number){}
    protected RangeCheck(value: number) : boolean {
        return value >= this.start && value <= this.end;
    }
    protected GetNumber(value: string) : number {
        return new Number(value).valueOf();
    }
}

class RnageValidationBase2 {
    private start : number = 0;
    private end : number = 0;
    constructor(start :number, end : number) {
        this.start = start;
        this.end = end;
    }
}