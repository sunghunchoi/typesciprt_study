type StringOrNumber = string | number;
type NullableStringOrNumber = StringOrNumber | null;

class SeperateTypeRangeValidation extends RangeValidationBase {
    IsInRangeString(value: string) : boolean {
        return this.RangeCheck(this.GetNumber(value));
    }
    IsInRnageNumber(value: number) : boolean {
        return this.RangeCheck(value);
    }
}

class AnyRangeValidation extends RangeValidationBase {
    IsInRange(value: any) : boolean{
        if (typeof value === "number") {
            return this.IsInRange(value);
        } else if (typeof value === "string") {
            return this.IsInRange(this.GetNumber(value));
        }
        return false;
    }
}

class UnionRangeValidation extends RangeValidationBase {
    IsInRange(value: StringOrNumber) : boolean {
        if (typeof value === "number") {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}

let total : string | number = 10;
if (new UnionRangeValidation(0 ,100).IsInRange(total)) {
    console.log('This value is in range');
}