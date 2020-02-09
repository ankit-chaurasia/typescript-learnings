// const person = {
//   name: 'Mike',
//   age: 40,
//   hobbies: ['Sports', 'Cooking'],
// };

// console.log(person.name);

// let list: number[] = [1, 2, 3];

// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }

// const person = {
//   name: 'Mike',
//   age: 40,
//   hobbies: ['Sports', 'Cooking'],
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log(`Role.ADMIN: ${Role.ADMIN}`); // Role.ADMIN: 5
//   console.log(`Role.ADMIN: ${Role.READ_ONLY}`); // Role.READ_ONLY: 6
//   console.log('Is Admin');
// }

// let dishes: any[];
// dishes = [2, 'sdfs'];

// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean

// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combineAges = combine(30, 20);
// console.log(combineAges);

// const combineNames = combine('John', 'Anna');
// console.log(combineNames);

// function literalType(resultType: 'as-number' | 'as-text') {
//   console.log(resultType);
// }

// literalType('as-text');
// literalType('as text'); // Error

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result;
  if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 20, 'as-text');
console.log(combineAges); // 50
