// const array =[1,2,3,4];
// const array2 = [...array,...array]
// console.log(array2)

// let me = {
//  name: "Ashutosh Verma",
//  thisInArrow:() => {
//  console.log("My name is " + this.name); // no 'this' binding here
//  },
//  thisInRegular(){
//  console.log("My name is " + this.name); // 'this' binding works here
//  }
// };
// me.thisInArrow();
// me.thisInRegular();

// let me = {
//     name :"umair mustufa",
//     thisInArrow:()=>{
//         console.log("My name is " + this.name);
//     },
//     thisInfunction(){
//         console.log("My name is " + this.name);
//     }
// };

// me.thisInArrow();
// me.thisInfunction();
// function reverseString(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseString('hello'));
//  function reverseString(str){
//     let reversed = '';
//     for (let i= str.length -1; i>=0; i--){
//         reversed += str[i]
//     }
//     return reversed;
//  }
//  console.log(reverseString('hello'))

//   function reverseString(str){
//     let reversed = '';
//     for (let i= str.length; i<0; i++){
//         reversed += str[i]
//     }
//     return reversed;
//  }
//  console.log(reverseString('hello'))

//OWN MAP METHOD

//  const array = [1, 2, 3, 4, 5];
// function myMap(callback, arr) {
//   const result = [];

//   for (let i = 0; i < array.length; i++){
//     result.push(callback(arr[i], i, arr))
//   }
//   return result
// }
// console.log(myMap((i,e, arr2)=>e ,array))

// const array = [1, 2, 3, 4, 5];
// function myMap(callback,arr){
//  let result = [];
//  for(let i=0; i<array.length; i++){
//   result.push(callback(arr[i],i))
//  }
//  return result;
// }
// console.log(myMap((i,e)=> e , array))

//SORTING METHOD

// let data = [23,99,12,34,2,1,99,32,21,4,89,45,12,39,798];
// let data = ["z", "d", "x", "y", "q", "u", "a", "c", "e"]
//  for(i=0; i<data.length; i++ ){
//   for(j=0; j<data.length; j++){
//      if(data[j] > data[j+1]){
//       let temp = data[j]
//       data[j] = data[j+1]
//       data[j+1] = temp
//      }
//   }
//  }
//  console.log(data);

// let data = [23,99,12,34,2,1,99,32,21,4,89,45,12,39,798];
// let data = ["z", "d", "x", "y", "q", "u", "a", "c", "e"]
// for(i=0; i<data.length; i++){
//   for(j=0; j<data.length; j++){
//     if(data[j] > data[j+1]){
//       let temp = data[j];
//       data[j] = data[j+1];
//       data[j+1] = temp;
//     }
//   }
// }
// console.log(data)

// let data = ["z", "d", "x", "y", "q", "u", "a", "c", "e"]
// function mySort(data){
//  for(i=0; i<data.length; i++ ){
//   for(j=0; j<data.length; j++){
//      if(data[j] > data[j+1]){
//       let temp = data[j]
//       data[j] = data[j+1]
//       data[j+1] = temp
//      }
//   }
//  }
// }
// mySort(data)
// console.log(data);

//ADD ELEMENT IN ARRAY

// let data =[23,45,12,34,13,34];
// let newEl = 40;
// let position = 3;
// for(let i=data.length-1; i>=0; i--){
//   if(i>=position){
//    data[i+1] = data [i];
//    if(i == position){
//       data[i] =newEl
//    }
//   }
// }
// console.log(data)

// let data =[23,45,12,34,13,34];
// let newEl = 69;
// let position = 3;
// for(let i=data.length-1; i>=0; i--){
//   if(i>=position){
//     data[i+1] = data[i];
//    if(i == position){
//     data[i] = newEl
//    }
//   }
// }
// console.log(data)

// let data =[23,45,12,34,13,34];
// let newEle = 80;
// let position = 2;
// for(let i=data.length-1; i>=0; i--){
//   if(i>=position){
//     data[i+1] = data[i];
//     if(i = position){
//       data[i]= newEle
//     }
//   }
// }
// console.log(data)

//DELETE ELEMENTS IN ARRAY

// let data =[23,45,12,34,13,34];
// let position = 3;
// for(let i=position; i<data.length-1; i++){
//   data[i] = data[i+1]
// }
// data.length =data.length-1
// console.log(data)

// let data =[23,45,12,34,13,34];
// let position = 2;
// for (let i=position; i>data.length-1; i++){
//   data[i] = data[i+1]
// }
// data.length =data.length-1;
// console.log(data)

//let data =[23,45,12,34,13,34];
// let position = 3;
// for(let i=1; i<data.length-1; i++){
//   data[1] = data[i+1]
// }
// data.length = data.length-1
// console.log(data)

//SEARCH ELEMENT IN ARRAY

// let data =[23,45,12,34,13,34];
// let element = 34;
// let index = undefined;

// for(i=0; i<data.length-1; i++){
//   if(data[i] == element){
//     index = [i]
//   }
// }
// console.log(index)

//MERGE TWO ARRAY

// const data =[23,34,12,35,26,99];
// const data2 = [14,59,33,65,88];
// const data3 = [];
// for(let i=0; i<data.length; i++){
//   data3[i] =data[i]
// }
// for(let i=0; i<data2.length; i++){
//   data3[data.length + i] =data2[i]
// }
// console.log(data3)

// const data1 =[23,34,12,35,26,99];
// const data2 = [14,59,33,65,88];
// const data3 = [];
// for(let i=0; i<data1.length; i++){
//   data3[i]= data1[i]
// }
// for(let i=0; i<data2.length; i++){
//   data3[data1.length + i]= data2[i]
// }
// console.log(data3)

// const data =[23,34,12,35,26,99];
// let element = 12;
// let index = [];

// for(let i=0; i<data.length-1; i++){
//   if(data[i] == element){
//     index = [i]
//   }
// }
// console.log(index)

// REMOVE DUBLICATE ARRAY

// const arr = [1,2,3,3,2,1,4,5,5,4];

// const newArr = arr.filter((val, ind)=>{
//   return arr.indexOf(val) === ind
// })
// console.log(newArr)

// const arr = [1,2,3,3,2,1,4,5,5,4];
// for(let i=0; i<arr.length; i++){
//   for(let j=i+1; j<arr.length; j++){
//         if(arr[i] == arr[j]){
//             arr.splice(j,1)
//         }
//     }
// }
// console.log(newArr)

//OWN FILTER METHOD
// const array = [1, 2, 3, 4, 5];
// function myFilter(callback, arr) {
//   const result = [];
//   for (let i = 0; i < array.length; i++){
//     if(callback(arr[i], i, arr)){
//       result.push(arr[i])
//     }
//   }
//   return result
// }
// console.log(myFilter((i,e, arr2)=>i ,array))

// const myArray = [["John", 23], ["dog", 3]];
// let position = 0;
// let newEle = ["Paul", 35];

// for(let i=myArray.length; i>=0; i++){
//   if(i >= position){
//     myArray[i+1] = myArray[i]
//     if(i == position){
//       myArray[i] = newEle
//     }
//   }
// }
// console.log(myArray)

//POST INCREMENT
// let num = 15;
// let newnum = num++;
// console.log(num)
// console.log(newnum)

// const fruits = ['apple', 'banana', 'orange'];
// fruits.forEach((fruit, ind) => {
//   console.log(ind);
// });

//FIND MIDDLE ELEMENT IN ARRAY


// const arr = [45,3,4,23,44,22,12,34];

// function middleElement(arr){
// const center = ~~(arr.length / 2);
// if(arr.length % 2 === 0){
//   console.log("Center Values for even length of array are: ", arr[center - 1], arr[center])
// }else {
//   console.log("Center Values for odd length of array are: ", arr[center - 1])
// }
// }
// middleElement(arr)


// let data = [23,99,12,34,2,1,99,32,21,4,89,45,12,39,798];
// let data = ["z", "d", "x", "y", "q", "u", "a", "c", "e"];

// function BubbleSort(data) {
//   for (i = 0; i < data.length; i++) {
//     for (j = 0; j < data.length; j++) {
//       if (data[j] > data[j + 1]) {
//         let temp = data[j];
//         data[j] = data[j + 1];
//         data[j + 1] = temp;
//       }
//     }
//   }
//   console.log(data);
// }
// BubbleSort(data)

let a, b;
function Mian(x,y,z,...a){
  // console.log(a.filter((a,e)=> e === 2))
  // const [x,b,c] = a;
  console.log([x,y,z])

}
Mian(1,4,6,8,6)