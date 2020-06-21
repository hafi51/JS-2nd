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

