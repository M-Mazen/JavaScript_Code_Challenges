/*
  WRITE YOUR SOLUTION HERE
*/

// The total bill is $${total}
function coffeeDate(coffeeArr){
 const coffeeSum=  coffeeArr.reduce((totalCoffees,numCoffees)=>{
  
  return totalCoffees +=numCoffees;
})
return  `The total bill is $${coffeeSum * 1.25}`
}


console.log(coffeeDate([3,4,6,20]))