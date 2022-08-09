// GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops
// Write a code to print the numbers in the array

// Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = " ";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);


//Write a code to print the numbers in the array

//Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] + ',';
}
console.log(new_string);

//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

//Output: 11 10 9 8 7 6 5 4 3 2 1

var new_string = "";
 
for (var i = 10; i >=0; i -- ) {
 new_string += numsArr[i] + " "
}
console.log(new_string);

//Write a code to replace the array value — If the number is even, replace it with ‘even’.

//Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even";
 }
}
console.log(numsArr);

//Write a code to replace the array value — If the index is odd, replace it with ‘even’.

//Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 != 0 )
 {
 numsArr[i] = 'even';
 }
}
console.log(numsArr);

//Write a code to add all the numbers in the array

//Output: 66

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum=0;
for (var i = 0; i <=10; i++) {

 sum += numsArr[i]
}
console.log(sum);

//Write a code to add the even numbers only
//Output: 30

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1=0;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0){
 sum1 += numsArr[i]
}}
console.log(sum1);

//Write a code to add the even numbers and subract the odd numbers
//Output: 94

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0)
 {
 sum2 += numsArr[i]
 }
 else
 {
 sum2 -= numsArr[i]
 }
}
console.log(sum2);

//Write a code to print inner arrays
//Output:

//Array(5) [ 1, 2, 3, 4, 5 ]
//Array(6) [ 6, 7, 8, 9, 10, 11 ]

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
let temparr=[];
for (var i = 0; i < numsArr.length; i++){
     for(let j=0;j<numsArr[i].length;j++){
       temparr[j]=numsArr[i][j];
     }
     console.log(temparr);
}

//Write a code to print elements in the inner arrays
//Output: 1234567891011

var numsArr1 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=[];
let t=[];
for (var i = 0; i < numsArr1.length; i++) {

 for(var j = 0 ; j < numsArr1[i].length;j++ ){
     str_all[j]=numsArr1[i][j];
}
t[i]=str_all.join();
}
console.log(`${t[0]},${t[1]}`);

//Write a code to replace the array value — If the index is even, replace it with ‘even’.

//Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

var numsArr2 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all2=[];
for (var i = 0; i < numsArr2.length; i++) {

 for(var j = 0 ; j < numsArr2[i].length;j++ ){
      if(numsArr2[i][j]!= 0 )
      {
         numsArr2[i][j]= "even";
       }
}}
console.log(numsArr2);

//Write a code to print elements in the inner arrays in reverse
//Output: 11 10 9 8 7 6 5 4 3 2 1

var anumsArr1 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var astr_all=[];
let at=[];
for (var i = 0; i < anumsArr1.length; i++) {

 for(var j = 0 ; j < anumsArr1[i].length;j++ ){
     astr_all[j]=anumsArr1[i][j];
}
at[i]=astr_all.join();
}
let nubers=`${t[0]},${t[1]}`;
let rev=nubers.split(",");
console.log(rev.reverse().join());

//Write a code to add elements in the inner arrays based on odd or even values
//Output:
//36
//30

var numsArr4 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr4.length; i++) {
 var inner_array4 = numsArr4[i];
 for(var j = 0 ; j < inner_array4.length;j++ ){
 if(inner_array4[j]%2!=0)
 {
 sum_odd += numsArr4[i][j];
 }
 else
 {
 sum_even += numsArr4[i][j];
 }
}
}
console.log(sum_odd);
console.log(sum_even);

/*----Output----

script.js:12  1234567891011
script.js:25 1,2,3,4,5,6,7,8,9,10,11,
script.js:36 11 10 9 8 7 6 5 4 3 2 1 
script.js:49 (11) [1, 'even', 3, 'even', 5, 'even', 7, 'even', 9, 'even', 11]
script.js:62 (11) ['even', 2, 'even', 4, 'even', 6, 'even', 8, 'even', 10, 'even']
script.js:74 66
script.js:85 30
script.js:102 94
script.js:116 (5) [1, 2, 3, 4, 5]
script.js:116 (6) [6, 7, 8, 9, 10, 11]
script.js:132 1,2,3,4,5,6,7,8,9,10,11
script.js:148 (2) [Array(5), Array(6)]
script.js:165 11,10,9,8,7,6,5,4,3,2,1
script.js:188 36
script.js:189 30


*/
