let a=2346543;
if (true){
    
    let a=10;
const b=20;
console.log("block scpoe:",a);

}
console.log("global scope:",a);



//nestedscopes
function one(){
 const user="nitin";
 function two(){
    const web="yt"
    console.log(user);
    //here it will print user bcz function one acts as global for two 
 }
 two();
 console.log("this is the function one ");
}
one()


if (true){
    console.log("hii nitin");
    const roll=122;

    if (roll==122){
  console.log("true");
  
    }
}
