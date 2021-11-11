var NoRoleCheck = /** @class */ (function () {
    function NoRoleCheck() {
    }
    NoRoleCheck.prototype.AnyonCanRun = function (args) {
        console.log(args);
    };
    NoRoleCheck.prototype.AdminOnly = function (args) {
        console.log(args);
    };
    return NoRoleCheck;
}());
var currentUser = { user: "peter", roles: [{ role: "user" }, { role: "admin" }] };
function TestDecoratorExample(decoratorMethod) {
    console.log("Current user " + currentUser.user);
    decoratorMethod.AnyonCanRun("Running ad user");
    decoratorMethod.AdminOnly("Runnig as admin");
}
TestDecoratorExample(new NoRoleCheck());
