console.log("H")

function saymyname(){
   console.log("n")
   console.log("i")
   console.log("t")
   console.log("i")
   console.log("n")
} 
saymyname()

// function add(number1,number2){
//     console.log(
//      number1+number2);

// }
function add(number1,number2){
   let result=number1+number2
   return result

}

const result=add(3,4)
//  console.log(result);


function loginuser(username ="nikhilyadav12"){
    if (username== undefined){
        console.log("please enter a username");
        return 
        
    }
    return `${username} just logged in`

}
console.log(loginuser("nitinpal4216"))


function calculatecartprice(...num1){
    return num1

}
console.log(calculatecartprice(200,400,500));





