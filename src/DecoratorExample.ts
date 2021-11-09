// 특정 권한을 가진 사용자만 특정 메서드에 접근 할 수 있는 클래스.
interface IDecoratorExample {
    // 누구나 접근 가능한 메서드
    AnyonCanRun(args: string) : void;
    // 관리자만 접근 가능한 메서드
    AdminOnly(args: string): void;
}

class NoRoleCheck implements IDecoratorExample {
    AnyonCanRun(args: string): void {
        console.log(args);
    }
    AdminOnly(args: string): void {
        console.log(args);
    }
}

let currentUser = {user:"peter",roles:[{role:"user"},{role:"admin"}]};
function TestDecoratorExample(decoratorMethod: IDecoratorExample) {
    console.log(`Current user ${currentUser.user}`);
    decoratorMethod.AnyonCanRun(`Running ad user`);
    decoratorMethod.AdminOnly(`Runnig as admin`);
}

TestDecoratorExample(new NoRoleCheck());