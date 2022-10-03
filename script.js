//variables
let randSequence=[]
let userSequence=[]
let maxSeqItems=4
const pink=document.querySelector(".pink")
const purple=document.querySelector(".purple")
const yellow=document.querySelector(".yellow")
const aqua=document.querySelector(".aqua")
const colorOrder=[pink,purple,yellow,aqua]
const level=document.querySelector('.level')
const buttons=document.querySelector('.user-buttons')
//functions
function levelParams() {
}
 
const setBlink=(seq)=>{
     
  //have a class that applies visual queues to circle that mimics a flash
    // for(let i=0;i<seq.length;i++){
    //   setTimeout(flashOn(seq),1000)
    // 
  //   for(let i=0;i<seq.length;i++){
      
  //     setTimeout(function(test){
  //       seq[i].style.animation="blink 3s"
  //   },i*1000)
  //       seq[i].style.animation=""
  
    for(let i=0;i<seq.length;i++){
     
      setTimeout(function(){
        seq[i].style.animation=""},i*800);
        setTimeout(function(){
          seq[i].style.animation="blink 0.5s"
        },i*1000)
      
    }};


    //this kind of works?
    // for(let i=0;i<seq.length;i++){
    
    //   setTimeout(function(){
    //   setTimeout(function(){
    //   seq[i].style.animation="blink 2s"
    // },i*1000)
    //   seq[i].style.animation=""},i*900)}
      
    // };
     
  


  // }
//   for(let i=0;i<seq.length;i++){
      
//     let intTimer=setTimeout(function(test){
//       seq[i].style.animation="blink 3s"
//   },i*1000) 
// }






const mapSequence=(numSeq)=>{
  let colorSequence=numSeq.map((number)=>{
    return colorOrder[number-1]
    return colorSequence;
  })
  //return colorSequence
  setBlink(colorSequence)
}


 const generateSequence=(max)=>{
  //generate number between 1 and number of Seq items in current level
    let randNumber=0;
    for(i=1;i<=max;i++){
      randNumber=Math.floor(Math.random()*max)+1
      randSequence.push(randNumber)
  }
  console.log(randSequence)
  mapSequence(randSequence)
 }





 
 const startTimer=()=>{

}

 const storeUserSequence=()=>{

 }

 const compareSequences=(userArr,randArr)=>{
  for(let i=0;i<userArr.length;i++){
    if (userArr[i] != randArr[i]) {
      alert("GAME OVER")
    } else if (userArr.length==randArr.length){
      alert("NEXT LEVEL")
    } else{}
 }
 }
//





//event listeners
// const buttonListener=()=>{
//  buttons.addEventListener('click',function(e){
//   let tempSequence=userSequence.push(e.target.id)
//   tempSequence=userSequence
//  })
//  console.log(userSequence)
// }

const buttonListener=()=>{
  buttons.addEventListener('click',function(e){
   let tempSequence=userSequence.push(parseInt(e.target.id))
   tempSequence=userSequence
   console.log(userSequence)
   compareSequences(userSequence,randSequence)
  })
   
  
}
 
 


const goEventListener = ()=>{
  level.addEventListener('click',function(){
    generateSequence(maxSeqItems)
  })
}








goEventListener()
buttonListener()


