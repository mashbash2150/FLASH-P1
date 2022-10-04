//variables
let randSequence=[]
let userSequence=[]
let maxSeqItems=3
let maxArrItems=4
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
     
//maps color sequence to array of numbers
const mapSequence=(numSeq)=>{
  let colorSequence=numSeq.map((number)=>{
    return colorOrder[number-1]
    return colorSequence;
  })
  //return colorSequence
  setBlink(colorSequence)
}

  //generate number between 1 and number of Seq items in current level
 const generateSequence=(max)=>{
    let randNumber=0;
    for(i=1;i<=max;i++){
      randNumber=Math.floor(Math.random()*maxArrItems)+1
      randSequence.push(randNumber)
  }
  console.log(randSequence)
  mapSequence(randSequence)
 }

 const startTimer=()=>{

}

 const storeUserSequence=()=>{

 }

 const levelUp=()=>{
  maxSeqItems++;
  console.log(maxSeqItems)
  randSequence=[]
  userSequence=[]
  setTimeout(function(){
    document.querySelector(".over").innerText="";
  } , 2500)
  setTimeout(function(){
    generateSequence(maxSeqItems);
  },3500)
}

//handle user choices, check against random array 

 const compareSequences=(userArr,randArr)=>{
  for(let i=0;i<userArr.length;i++){
    if (userArr[i] != randArr[i]) {
      document.querySelector(".over").classList.add("next")
      document.querySelector(".over").innerText="GAME OVER"
    } 
 }
  if (userArr.length==randArr.length){
    document.querySelector(".over").classList.add("next")
    document.querySelector(".over").innerText="NEXT LEVEL"
    levelUp()
  }
 }



//





//event listeners


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


