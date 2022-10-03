//variables
let randSequence=[]
let userSequence=[]
let maxSeqItems=4
const pink=document.querySelector(".pink")
const purple=document.querySelector(".purple")
const yellow=document.querySelector(".yellow")
const aqua=document.querySelector(".aqua")
const colorOrder=[pink,purple,yellow,aqua]

//functions
function levelParams() {
}
const playSequence=(seq)=>{

  //have a class that applies visual queues to circle that mimics a flash
    for(let i=0;i<seq.length;i++){
      seq[i].style.opacity=1.0
    }
    function task(i) {
      setTimeout(function() {
      }, 2000 * i);
    }
 }
const mapSequence=(numSeq)=>{
  let colorSequence=numSeq.map((number)=>{
    return colorOrder[number-1]
    return colorSequence;
  })
  //return colorSequence
  playSequence(colorSequence)
}


 const generateSequence=(max)=>{
  //generate number between 1 and number of Seq items in current level
    let randNumber=0;
    for(i=1;i<=max;i++){
      randNumber=Math.floor(Math.random()*max)+1
      randSequence.push(randNumber)
  }
  mapSequence(randSequence)
 }





 
 const startTimer=()=>{

}

 const storeUserSequence=()=>{

 }

 const compareSequences=()=>{

 }

//





//event listeners

const level=document.querySelector(".test")

const goEventListener = ()=>{
  level.addEventListener('click',function(){
    generateSequence(maxSeqItems)
  })
}

goEventListener()



