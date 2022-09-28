/*
  WRITE YOUR SOLUTION HERE
*/

function clock(){
  const clockNode= document.getElementById("clock");
  setInterval(()=>{
    let date = new Date();
    let tick= date.toLocaleTimeString();
    console.log(tick);

clockNode.textContent=tick
        
  },1000)

}
clock()