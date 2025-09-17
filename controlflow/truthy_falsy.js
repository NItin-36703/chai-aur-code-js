// falsy values 
// false, 0,-0, BigInt 0n, "", null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},true,function(){}

const value=-0;
if (value){
    console.log("false");
    
}else{
    console.log("true");
    
}