class UsersService {
    @Catch
    getUsers():void {
        throw new Error("No users");
    }

    @Catch_v2
    someMethod():void{}

    @Catch_v2<UsersService, never, void>
    callAdministrator():void {
        throw new Error("No admins available");
    }
}

function Catch(
    method: any,
    context:  ClassMethodDecoratorContext
) {
    function safeMethod(this:any, ...args:any[]) {
        console.log(`Called method ${context.name as string}`);
        try {
            return method.apply(this, args);
        } catch (e) {
            if (e instanceof Error){
                console.log(`Oops, there is an error in ${context.name as string}: ${e.message}`);
            } else {
                console.log(`Oops, there is an error in ${context.name as string}`);
            }
        }
    }

    return safeMethod;
}

function Catch_v2<T, A extends any[], R>(
    method: (...args:any[]) => R,
    context:  ClassMethodDecoratorContext<T, (...args: A) => R>
) {
    function safeMethod(this:T, ...args:A): R|void {
        console.log(`Called method ${context.name as string}`);
        try {
            return method.apply(this, args);
        } catch (e) {

            if (e instanceof Error){
                console.log(`Ой-вей! В методе ${context.name as string} что-то пошло не по плану. Какая жалость...\n${e.message}`);
            } else {
                console.log(`Ой-вей! В методе ${context.name as string} что-то пошло не по плану. Какая жалость...`);
            }
        }
    }

    return safeMethod;
}


const usersService = new UsersService();
usersService.someMethod();
usersService.getUsers();
usersService.callAdministrator();
