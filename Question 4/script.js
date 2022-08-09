
//GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript
//Fix the code to get the largest of three.

Code:

aa = (f,s,t) => {
 //let f,s,t;
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);

//— — — — — — — — — — — — — — — — — — — — — — — — —
//Fix the code to Sum of the digits present in the number

//Code:

let n = "123";
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+=parseInt(n[i]);
 }
 return sum;
}


//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to Sum of all numbers using IIFE function

//Code:

const arr = [9,8,5,6,4,3,2,1];

const add1=(function(arr) {
 let sum2 = 0;
 for (let i = 0; i <arr.length; i++);{
   // console.log(i)
 sum2 += parseInt(arr[i]);
 }
 return sum2;


 //return sum2;
})(arr);
console.log(add1);
//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to gen Title caps.

//Code:

var arr1 = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
    let temp=[];
 for (var i = 0; i < arro.length; i++) {
temp.push(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
 console.log(temp);
}
ano(arr1);

//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to return the Prime numbers

//Code:

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return num >1;
});
console.log(myPrime);
//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to sum the number in that array

//Code:

const number = [10, 20, 30, 40,50,60,70,80,90,100] 
let sumnum= (a, b) =>
 a + b
 sumnum = number.reduce(sumnum)
console.log(sumnum);

//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to rotate an array by k times and return rotated array using IIFE function

//Code:

var arrayno = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arrayno.length % k;
(function() {
 //arrayno = {};
 let out = arrayno.slice(k + 1, arrayno.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arrayno[i];
 count += 1;
 }
 console.log(out);})();
 
//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to gen Title caps.

//Code:

var tarr = ["guvi", "geek", "zen", "fullstack"];
(function() {
    let val=[];
 for (var i = 0; i < tarr.length; i++) {
 val[i]=tarr[i][0].toUpperCase() + tarr[i].substr(1);
 }
 console.log(val);
})();

//— — — — — — — — — — — — — — — — — — — — — — — — —

//print all odd numbers in an array using IIFE function

//Code:

var oarr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < oarr.length; i++) {
 if (oarr[i] % 2 != 0) {
 console.log(oarr[i]);
 }}
})();

//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to reverse.

//Code:

(function(str){
 str1 = str.split("").reverse().join("");
 console.log(str1); 
})("abcd")

//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to remove duplicates.

//Code:

let chars=["guvi","geek","guvi","duplicate","geeK"];
 let uniqueChars= chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars.join());

//— — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to give the below output:

//Expected Output:
/*

[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]

Code:
*/

var earray =[
    [["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],
    [["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]
];
/*
var final=[]
let new_object=[];
while(earray.length!=0)
{
 var outer_remove = earray.shift();
// let new_object;
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)
}
console.log(final);
*/
let finalArray = []
let newArr = []
for (var i = 0; i < earray.length; i++) {
    for (var j = 0; j < earray[i].length; j++) {
        newArr[earray[i][j][0]] = earray[i][j][1]
    }
    finalArray.push(newArr)
}
console.log(finalArray)



//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to give the below output:

//Sum of odd numbers in an array

//Code:


var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;});
console.log(s);


//— — — — — — — — — — — — — — — — — — — — — — — — —

//Fix the code to give the below output:

//Swap the odd and even digits

//Code:

aa = (data) =>{
    var a=data;
    var l='';
   for(i=0;i<a.length-1;i++){
   // var l='';
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");
   /* output
      script.js:9 1 2 3
script.js:15 3
script.js:25 6
script.js:55 NaN
script.js:68 (4) ['Guvi', 'Geek', 'Zen', 'Fullstack']
script.js:88 (3) [3, 2, 5]
script.js:99 550
script.js:118 (11) [6, 8, 6, 1, 9, 10, 12, 13, 1, 2, 3]
script.js:132 (4) ['Guvi', 'Geek', 'Zen', 'Fullstack']
script.js:145 1
script.js:145 3
script.js:145 5
script.js:145 7
script.js:145 79
script.js:145 7
script.js:145 9
script.js:157 dcba
script.js:171 guvi,geek,duplicate,geeK
script.js:218 (2) [Array(0), Array(0)]
script.js:238 18
script.js:263 2143

   */