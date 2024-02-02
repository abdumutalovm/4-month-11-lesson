// ex-1 :
// function bigTen(numbers) {
//   let newArr = numbers.filter(function (value) {
//     return value > 10;
//   });
//   return newArr;
// }
// let numbers = [1, 32, 11, 10, 6, 75, 9, -10];
// let array = bigTen(numbers);
// console.log(array);

// ex-2
// function findCube(arr) {
//   return arr.map((value) => {
//     return value ** 3;
//   });
// }
// let cubeNumber = findCube([1, 2, 3, 4, 5]);
// console.log(cubeNumber);

// ex-3
// function multipleNum(num) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 3 == 0 && num[i] % 5 == 0) {
//       return true;
//     }
//   }
//   return false;
// }

// let num = [35, 2, 3, 15, 5, 6, 7];
// let result = multipleNum(num);
// console.log(result);

// ex-4
// function bigNumber(num) {
//   let sorting = num.sort((a, b) => b - a);
//   return sorting.slice(2, 3);
// }
// let num = [5, 10, 8, 15, 9, 27, 55];
// let sortingNumber = bigNumber(num);
// console.log(sortingNumber);

// ex-5
// function reverseNumber(num) {
//   return num.reverse().join("");
// }
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let resutl = reverseNumber(num);
// console.log(resutl);
