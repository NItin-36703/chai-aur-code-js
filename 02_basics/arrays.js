const myarr=[1,2,3,4,45,6,6,7]
console.log(myarr[1]);
myarr[1]=39;
// console.log(myarr);

// array methods
myarr.push(6)
myarr.pop()
myarr.unshift(9)
myarr.shift()
console.log(myarr);

console.log(myarr.slice(1,4))//it just prints the part 
console.log(myarr);

console.log(myarr.splice(1,4));//it removes the part from index 1to 4 from original array
console.log (myarr)
