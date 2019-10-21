# 类型与函数

## TypeScript 的基本类型

**boolean**

```
  let areYouOk:boolean = true
```

**数字**

```
  let decLiteral: number = 6;
  let hexLiteral: number = 0xf00d;
  let binaryLiteral: number = 0b1010;
  let octalLiteral: number = 0o744;
```

**字符串**

```
  let name: string = "bob";
  name = "smith";

  let name: string = `Gene`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${ name }.

```

**数组**

```
  let list: number[] = [1, 2, 3];

  let list: Array<number> = [1, 2, 3];
```

**元组 Tuple**

```
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ['hello', 10]; // OK
  // Initialize it incorrectly
  x = [10, 'hello']; // Error

```

**枚举**

```
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

console.log(c); // 1

// 默认情况下从0开始编号，也可以手动指定

enum Color {
  Red = 1,
  Green,
  Blue
}

let colorName: string = Color[2];

console.log(colorName); // Green
```

**Any**

```
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

**void**

```
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;

```

## 变量声明

- 即便不指定类型，TypeScript 依旧可以根据指定的变量进行推断

```
let age = 18;

console.log(age);
age = "123";

console.log(age); // error TS2322: Type '"123"' is not assignable to type 'number'.

```

**类型断言**

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是“尖括号”语法：

```
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

另一个为 as 语法：

```
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
