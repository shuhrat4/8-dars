//   1- rasm


// // 1
// let array = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// array.sort(function(a, b) {
//   return a - b;
// });
// console.log(array);

// 2

// let arr = [1, 6, 9, 5, 8, 10, 15];
// function rangeSum(arr, start, end) {
//   let subArray = arr.slice(start, end + 1);
//   let sum = subArray.reduce((acc, curr) => acc + curr, 0);
//   return sum;
// }
// let result = rangeSum(arr, 2, 5);
// console.log(result); 

// 3

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let sum = [...new Set(arr)];
// console.log(sum); 

// 4

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];

// function sum(arr) {
//   return arr.reduce((acc, val) => {
//     return {
//       min: val < acc.min ? val : acc.min,
//       max: val > acc.max ? val : acc.max
//     };
//   }, { min: Infinity, max: -Infinity }); 
// }
// let num = sum(arr);
// console.log(num); 


// 5

// let arr = [1, 4, 5, 6, 6, 3, 2, 1];
// let sum = arr.reverse();
// console.log(sum); 


//  2- rasm


// 2

// let arr = [2, 6, 9, 5, 8, 20, 25];
// function Sum(arr, start, end) {
//   let Array = arr.slice(start, end + 1);
//     let sum = Array.reduce((acc, curr) => acc + curr, 0);
//     return sum;
// }
// let num = Sum(arr, 2, 5);
// console.log(num); 

// 3

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let sum = [...new Set(arr)];

// console.log(sum); 

// 7

// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
// let num = arr.filter(num => num % 2 !== 0);
// let sum = num.reverse();
// console.log(sum); 

// 8

// let arr = [2, 3, 4, 5, 7];
// let oddIndexElements = arr.filter((_, index) => index % 2 !== 0);
// console.log(oddIndexElements); 

// 9

// function sum(arr) {
//       let num = arr.filter((_, index) => index % 2 !== 0);
//      return num.reduce((max, val) => Math.max(max, val), -Infinity);
//   }
//    let arr = [2, 3, 4, 5, 7];
//   let result = sum(arr);
//   console.log(result); 
  

// 10

// function sum(arr) {
//     let minValue = Math.min(...arr);
//     let maxValue = Math.max(...arr);
//       let minIndex = arr.indexOf(minValue);
//     let maxIndex = arr.indexOf(maxValue);
//       if (minIndex > maxIndex) {
//       [minIndex, maxIndex] = [maxIndex, minIndex];
//     }
//       let result = arr.map((value, index) => {
//       if (index > minIndex && index < maxIndex) {
//         return 0;
//       }
//       return value;
//     });
  
//     return result;
//   }
//   let sum2 = [2, 1, 3, 8, 4];
//   let num = sum(sum2);
//   console.log(num); 
  
// 11

// function sum(n) {
//   let number = [];
//   for (let i = 0; i < n; i++) {
//     number.push(2 * i + 1); 
//   }
  
//   return number;
// }
// let n = 5; 
// let result = sum(n);
// console.log(result); 


// 12

// let arr = [22, 3, 5, 6, 3, 2, 3];

// function sum (array) {
//   let num  = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     num .push(array[i]);
//   }

//   return num ;
// }
// let result = sum (arr);
// console.log(result); 


// 13 

// function sum(arr) {
//     let num = [...new Set(arr)];
//         num.sort((a, b) => a - b);
//         return num;
//   }
//     let input = [3, 5, 6, 3, 2, 3];
//   let output = sum(input);
//   console.log(output); 
  

// 14

// function array(arr) {
//       let index = arr.filter((_, index) => index % 2 === 0);
//         return Math.min(...index);
//   }
//   let input = [5, 12, 3, 8, 7, 14, 2];
//   let output = array(input);
//   console.log(output); 
  