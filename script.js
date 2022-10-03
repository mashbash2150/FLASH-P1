//variables
let randSequence=[]
let userSequence=[]
let maxSeqItems=4

//functions
const levelParams =()=>{
  
}

 const generateSequence=(max)=>{
  //generate number between 1 and number of Seq items in current level
    let randNumber=0;
    for(i=1;i<=max;i++){
      randNumber=Math.floor(Math.random()*max)+1
      randSequence.push(randNumber)
  }
  console.log(randSequence)
 }

 const playSequence=()=>{

  //have a class that applies visual queues to circle that mimics a flash
  // randSequence.forEach((number)=>{
     
  // }
 }
 
 const startTimer=()=>{

}

 const storeUserSequence=()=>{

 }

 const compareSequences=()=>{

 }

generateSequence(maxSeqItems)





//event listeners

