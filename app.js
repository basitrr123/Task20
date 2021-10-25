
const dayTime = new Date();
// console.log('daytime', dayTime);
const weekday = new Array(7);
weekday[0]= "Sunday";
weekday[1]= "Monday";
weekday[2]= "Tuesday";
weekday[3]= "Wednesday";
weekday[4]= "Thursday";
weekday[5]= "Friday";
weekday[6]= "Saturday";

let day = weekday[dayTime.getDay()];

console.log('day',day)

document.getElementById('prnt').innerText = `Today is: ${day},`;

var today = new Date();
var time = today.getHours()+ ":" + today.getMinutes()+":"+today.getSeconds();

document.getElementById('prnt1').innerText = `Current Time  is: ${time},`;

function timer(){ 
    const dayTime = new Date();
    document.getElementById('prnt1').innerText = `Current Time  is: ${time},`; 
var hours = time.getHours();
  var mins = time.getMinutes();
  var sec = time.getSeconds();

  if( mins < 10)
  {
      mins =  "0" + mins;
  }
 if ( sec < 10 )
 {
     sec =  "0" +sec;
 }}
//TASK 2
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);

today = mm+'/'+dd+'/'+yyyy;
console.log(today);

today = dd+'-'+mm+'-'+yyyy;
console.log(today);

today = dd+'/'+mm+'/'+yyyy;
console.log(today);

document.getElementById('prnt4').innerText = `Date Format is: ${today},`;

//Task # 3 
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);
document.getElementById('prnt2').innerText = `Area of Triangle is: ${area},`;


//TASK # 4

let str1 = "Saylani";
let str2 = [];

for (let i = 1; i <= str1.length; i++) {
    str2[i] = str1[str1.length - i];
}
//console.log(str2.join(""));
document.getElementById('prnt3').innerText = `Rotate the string 'Saylani': ${str2},`;


//Task 5

function isLeapYear() {
    var year= document.getElementById("year").value;
      
    document.getElementById("GFG").innerHTML = (year % 100 === 0) ? (year % 400 === 0): (year % 4 === 0);
}

//Task # 7

function check() {
    var x = Math.floor((Math.random() * 10) + 1);
    var i = document.getElementById('inputFiled').value;
    var feedback = document.getElementById('feedback');
 
    if (i == x) {
        feedback.innerHTML = 'Good Work';
    } else {
        feedback.innerHTML = 'Not matched';
    }
}




//Task # 6
function firstsunday(){
console.log("****************")

for(var year = 2024; year<=2050; year++)
{
var d = new Date(year , 0, 1);
if(d.getDay === 0){
    console.log("1st Juanuary is being a Sunday " , +year);
}
}}
firstsunday();



//task 9
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
}

//Task 10

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}
console.log(cToF(36))

function FtoC(fahrenheit){
    let celcius = fahrenheit*5/9 -32;
    return celcius;
}
console.log(FtoC(20));