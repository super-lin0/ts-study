let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

console.log(list);
console.log(list1);

enum Color {
  Red = 1,
  Green,
  Blue
}

let colorName: string = Color[2];

console.log(colorName); // Green

let age = 18;

let someValue = "this is a string";

let strLength = (<string>someValue).length;

console.log(strLength);
