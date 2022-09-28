/*
  WRITE YOUR SOLUTION HERE
*/
let userName=Symbol("userName")
let Password=Symbol("Password")
let user = new Object({
[userName]:"Mazen",
  [Password]:"123",
  Age:16
})
console.log(user.Password)
console.log(user.userName)