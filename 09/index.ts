// Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції.
// Як параметр типу повинен обов'язково виступати функціональний тип.

type RType<T extends (...args:any[]) => any> = T extends (...args:any[]) => infer R ? R : void;

function someFunc (a:string): number { return 23; }

type test1 = RType<typeof someFunc>;
type test2 = RType<() => string>;
type test3 = RType<string>; // error



// Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним)
// та повертає кортеж, де перше значення - це тип, що функція повертає, а другий - тип її параметру

type FuncTypes<T extends (a: any) => any> = T extends (a: infer ArgType) => infer RetType ? [RetType, ArgType] : void;

type test4 = FuncTypes<typeof someFunc>;
type test5 = FuncTypes<(a:HTMLElement) => void>;
type test6 = FuncTypes<number> // error
type test7 = FuncTypes<any> // no error
