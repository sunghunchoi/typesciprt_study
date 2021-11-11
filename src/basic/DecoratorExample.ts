// 특정 권한을 가진 사용자만 특정 메서드에 접근 할 수 있는 클래스.
interface IDecoratorExample {
    // 누구나 접근 가능한 메서드
    AnyoneCanRun(args: string) : void;
    // 관리자만 접근 가능한 메서드
    AdminOnly(args: string): void;
}

class NoRoleCheck implements IDecoratorExample {
    @DRole("user")
    AnyoneCanRun(args: string): void {
        console.log(args);
    }
    @DRole("admin")
    AdminOnly(args: string): void {
        console.log(args);
    }
}

let currentUser = {user:"peter",roles:[{role:"user"},{role:"admin"}]};
function TestDecoratorExample(decoratorMethod: IDecoratorExample) {
    console.log(`Current user ${currentUser.user}`);
    decoratorMethod.AnyoneCanRun(`Running ad user`);
    decoratorMethod.AdminOnly(`Runnig as admin`);
}

function IsInRole(role:string) : boolean {
    return currentUser.roles.some(r => r.role === role);
}

TestDecoratorExample(new NoRoleCheck());

// user가 Admin권한을 가졌는지 확인하는 코드.
// function Admin(target:any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
//     let originalMethod = descriptor.value;
//     descriptor.value = function(){
//         if (IsInRole(`admin`)){
//             originalMethod.apply(this, arguments);
//             return;
//         }
//         console.log(`${currentUser.user} is not in the admin role`);
//     }
//     return descriptor;
// }

function DRole(role: string) {
    return function(target:any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function () {
            if(IsInRole(role)){
                originalMethod.apply(this, arguments);
                return;
            }
            console.log(`${currentUser.user} is not in the ${role} role`);
        }
        return descriptor;
    }
}