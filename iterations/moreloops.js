//for of 
const arr=[1,2,3,4,5,56,78,76,5,43]
for(const val of arr){
    console.log(val);
}

const name ="Nitin Pal"
for(const ch of name ){
    console.log (ch);
}

// maps
const map=new Map()
map.set("nitin","india")
map.set("nikhil","pakistani")
console.log(map);

for (const [key,value] of map){
    console.log(key ,"->", value);
}

//for objects 
const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}

for (const key in myobj){
    console.log(key);
    console.log(myobj[key])
}
/// in for in loops we get keys of an arrays directly 
 const arr=[1,2,3,4,5,56,78,76,5,43]
 for (const key in arr){
    console.log(arr[key])
 }

 //for each

 const code=["js","ruby","cpp","java"]
 code.forEach(function (val) {
    console.log(val);
 })