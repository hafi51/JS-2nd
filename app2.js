
var password = prompt("Enter Password");
// if(password.length<6){
//     alert("Enter paswword more than 6 characters")
// }else if(password.charCodeAt(0) == 48 || 49 || 50 || 51 || 52 || 53 || 54 || 55 || 56 || 57){
//     alert("Password must not start with a number")
// }

for(i =0; i<password.length;i++){
    // if(password.charCodeAt(i) != 48 || password.charCodeAt(i) != 49 || password.charCodeAt(i) != 50){
    //     alert("Only 0,1,2 allowed")
    //     break
    // }
    for(j=48;j<=57;j++){
        if(password.charCodeAt(i) != j){
            alert("only numbers allowed")
            break
        }
    }
}