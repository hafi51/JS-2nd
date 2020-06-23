// 21-25
var fullName = prompt("Enter First Name: ") + " " + prompt("Enter Last Name:");
alert("Hello " + fullName);

var model = prompt("Enter mobile model: ");
alert("My fav phone is: " + model + "\n" + "Length of string: " + model.length);

var str = "Pakistani"
document.write("String: " + str + "<br>" + "Index of 'n': " + str.indexOf("n"))

var str1 = "Hello World";
document.write("Last index of l in Hello World is: " + str1.lastIndexOf("l"));

document.write("String: " + str + "<br>" + "Char at index 3: " + str.charAt(3));
                                        //  task 6 works alone
var fullName = prompt("enter first name: ").concat(prompt("enter last name: "));
alert("Hello " + fullName);

var str3 ="Hyderabad";
document.write("city: " + str3 + "<br>" + "after replacement: " + str3.replace("Hyder", "Islam"));

var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Before: "+ message + " <br>" + "after: " + message.replace(/and/g, "&"))

var str4= "472";
document.write("value: " + str4 +"<br>" + "type: " + typeof(str4) + "<br>" + "value: " + str4 + "<br>" + "type: "  + typeof(parseInt(str4)));

alert(prompt("Enter: ").toUpperCase());

var str5 =prompt("Enter: ");
var str7 = str5.slice(1)
var str6 = str5.slice(0,1).toUpperCase();
alert("Uppercase: " + str6 + str7);

var num = 35.36;
alert(num + "\n" + num.toString().replace(".", "") );

var username = prompt("Enter username: ");
for(i=0; i < username.length; i++){
    var code = username.charCodeAt(i)
    switch(code){
        case 33:
            alert("Enter valid username: ! not allowed")
            break
        case 44:
            alert("Enter valid username: , not allowed")
            break
        case 46:
            alert("Enter valid username: . not allowed")
            break
        case 64:
            alert("Enter valid username: @ not allowed")
            break
    }
}


var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var toSearch= prompt("Input item to search");
for(i =0 ; i< A.length; i++){
    if(toSearch === A[i]){
        alert("item found");
        break;
    }else{
        alert("item not found");
        break;
    }

}

                                            //  it works if conditions apllied seperataley
var password = prompt("Enter Password");
if(password.length<6){
    alert("Enter paswword more than 6 characters")
}else if(password.charCodeAt(0) > 47 && password.charCodeAt(0) < 58){
    alert("Password must not start with a number")
}

for(i =1; i<password.length;i++){
    if((password.charCodeAt(i) < 97 || password.charCodeAt(i) > 122) && password.charCodeAt(i) < 65 || password.charCodeAt(i) > 90 && password.charCodeAt(i) < 48 || password.charCodeAt(i) > 57){
        alert("Only a-z, A-Z & numbers allowed")
        break
    }
    
}

var university = "University of Karachi";
for(i=0;i<university.length;i++){
    document.write(university.split("")[i] + "<br>")
}

var str = prompt("Enter Input");
alert(str.charAt(str.length-1));

var str = "The quick brown fox jumps over the lazy dog";
document.write(str.search("the"));

// 26-30
var inte = prompt("Enter a positive integer");
if(inte < 0){
    alert("Enter only positive integer");
}
document.write("Number: " + inte + "<br>");
document.write("round off value: " + Math.round(inte) + "<br>");
document.write("floor value: " + Math.floor(inte) + "<br>");
document.write("ceil value: " + Math.ceil(inte) + "<br>")

var integ = prompt("Enter a negative integer");
if(integ > 0){
    alert("Enter only negative integer");
}
document.write("Number: " + integ + "<br>");
document.write("round off value: " + Math.round(integ) + "<br>");
document.write("floor value: " + Math.floor(integ) + "<br>");
document.write("ceil value: " + Math.ceil(integ) + "<br>");

var abs = prompt("Enter value");
document.write("The abosulte value of " + abs + " is " + Math.abs(abs) + "<br>");

document.write("Random dice value: " + Math.floor(Math.random()*6 + 1) + "<br>")
document.write("Random value from 1 to 100: " + Math.floor(Math.random()*100 + 1) + "<br>")

var inn = parseFloat(prompt("Enter your weight in kilograms"));
document.write("weight of user is " + inn + " kilograms")

var Num = parseInt(prompt("Enter value b/w 1 to 10"));
if(Num == Math.round(Math.random()*10 + 1)){
    alert("Congragulations")
}else{
    alert("try again!")
}

// 31-34
document.write(Date() + "<br>");

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var month = date.getMonth() 
alert("Current Month: " + monthNames[month])

alert(date.toString().slice(0 ,3))

if(date.getDay() == 0 ||date.getDay() == 6){
    alert("Its Fun day")
}

if(date.getDate() <= 15){
    alert("First fifteen days of the month")
    }else{
    alert("Last fifteen days of the month")
    }

var min = (date.getTime()/1000)/60;
alert("Elapsed miliseconds since jan 1, 1970: " + date.getTime() + "\n" + "Elapsed minutes since jan 1, 1970: " + min)

if(date.getHours() < 12){
    alert("It's AM")
}else{
    alert("It's PM")
}

var laterDate = new Date("Sun May 31 2020 15:34:18 GMT+0500 (Pakistan Standard Time)")
document.write(laterDate)

var ramadan = new Date("Fri Apr 24 2020")
var ramday = (date.getTime() - ramadan.getTime())/86400000
alert(Math.floor(ramday) + " days have passed since 1st Ramadan, 2020")

var date2015 = new Date("Thr Jan 01 2015")
document.write(date2015)

var sec_passed_2015 = (date.getTime() - date2015.getTime())/1000
alert(Math.floor(sec_passed_2015) + " seconds have passed since Jan 01 2015")

document.write("Current date: Tue Jun 23 2020 16:19:24 GMT+0500 (Pakistan Standard Time)<br>")
var hourAgo = new Date("Tue Jun 23 2020 15:19:24 GMT+0500 (Pakistan Standard Time")
document.write("1 hour ago , " + hourAgo + "<br>")

document.write("Current date: Tue Jun 23 2020 16:19:24 GMT+0500 (Pakistan Standard Time)<br>")
var centAgo = new Date("Tue Jun 23 1920 16:19:24 GMT+0500 (Pakistan Standard Time")
document.write("100 years back , " + centAgo)

var userAge = parseInt(prompt("Enter your age: "))
alert("Your birth year is: " + (date.getFullYear()-userAge))

document.write("<h3>Your K-Electric bill</h3> <br> Customer name: " + prompt("Enter your name: ") + "<br>" + "Current Month: " + monthNames[month])
var numOfUnits = parseInt(prompt("Enter number of units"))
var netAmount = numOfUnits * 16
document.write("<br> Number of units: " + numOfUnits + "<br> Charges per unit: 16" + " <br> Net Amount Payable (within Due Date): " + netAmount + "<br>Late Payment Surcharge: 350")
document.write("<br> Gross Amount Payable (after Due Date): " + (netAmount + 350))

// 35-38
function date(){
    document.write(Date())
}
date()

function userName(firstName, lastName){
    alert("Hello " + firstName + " " + lastName)
}
userName(prompt("Enter your First name"), prompt("Enter your Last name"))

function sum(a, b){
    return a+b;
}
sum(parseInt(prompt("Enter first number")), parseInt(prompt("Enter second number")))

function calc(a, b, o){
    var result;
    switch(o){
        case "+":
            result = a + b
            break
        case "-":
            result = a - b
            break
        case "*":
            result = a * b
            break
        case "/":
            result = a / b
            break
        case "%":
            result = a % b
            break
    }
    document.write(result)
    return result;
}
calc(parseInt(prompt("Enter first value:")), parseInt(prompt("Enter second value:")), prompt("Enter operator (+, -, *, /, %)"))

function sqr(a){
    document.write(a*a)
}
sqr(parseInt(prompt("Enter number to be squared")))

function fac(a){
    for(i=a;i>=0;i--){
        document.write(a * fac(a-1))
    }
}
fac(parseInt(prompt("Enter number to find factorial:")))

function counter(start, end){
    for(i=start;i<=end;i++){
        document.write(i+ "<br>")
    }
}
counter(parseInt(prompt("Enter start number")), parseInt(prompt("Enter end number")))