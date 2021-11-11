function Role(role: string) {
    return function (constructor: Function) {
        if (!IsInRole(role)) {
            throw new Error(`The user is not authorized to access this class`)
        }
    }
}

@Role("admin")
class RestrictedClass {
    constructor() {
        console.log(`Inside the constructor`);
    }
    Validate() {
        console.log(`Validating`);
    }
}