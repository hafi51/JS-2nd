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