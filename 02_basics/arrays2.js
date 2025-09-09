const marvel=["thor","iron man","capcy"]
const dc=["superman","padman","batman"]
  console.log(marvel.concat(dc));// combines two arrays

const otherarray=[1,2,3,[4,5,6],7,]
let real=otherarray.flat(Infinity)
console.log(real);

console.log(Array.from("nitin"))//converts in an array 
  let s1=100
  let s2=200
  let s3=300
  console.log(Array.of(s1,s2,s3))