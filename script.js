//variables
let randSequence=[]
let userSequence=[]
let maxSeqItems=1   //this is where game begins, gets incremented in levelUp function
let maxArrItems=4   //will increment this at heigher levels to introduce more colors/circles
let currentLevel=1
const lights=document.querySelector(".lights")
const pink=document.querySelector(".pink")
const purple=document.querySelector(".purple")
const yellow=document.querySelector(".yellow")
const aqua=document.querySelector(".aqua")
let orange=''
const colorOrder=[pink,purple,yellow,aqua]
const level=document.querySelector('.level')
const buttons=document.querySelector('.user-buttons')
let gameCountdown=4
const clock=document.querySelector(".clock")
const confirm=document.querySelector(".confirm")

//TIMER





//functions
const addDivs=()=>{
   const addLight=document.createElement('div')
   const addButton=document.createElement('p')
   addLight.setAttribute("class","orange")
   addButton.setAttribute("class","button5 zoom")
   addButton.setAttribute("id","5")
   addButton.innerText="BLIP"
   lights.append(addLight)
   buttons.append(addButton)
   orange=document.querySelector(".orange")
   colorOrder.push(orange)
}

 
const flashOff=(seq)=>{
  for(let i=0;i<(seq.length-1);i++){
     if((seq[i]).style.animation!=''){
     seq[i].style.animation=''}
   else {
  }
}
}
const setBlink=(seq)=>{

  for(let i=0;i<seq.length;i++){
    if((seq[i]).style.animation!=''){
    seq[i].style.animation=''}
  else {
 }
}
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
      // if (seq[i].style.animation!=""){
      //   seq[i].style.animation=""
      // }
      setTimeout(function(){
        seq[i].style.animation=""},i*900);
      setTimeout(function(){
          seq[i].style.animation="blink 0.5s"
        },i*1000)
    }
  
  };



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
  console.log(colorSequence)
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



 const levelUp=()=>{
  maxSeqItems++;
  console.log(maxSeqItems)
  randSequence=[]
  userSequence=[]
  setTimeout(function(){
    document.querySelector(".over").innerText="";
  } , 2000)
  setTimeout(function(){
    generateSequence(maxSeqItems);
  },2500)
  if (currentLevel==7){
    maxArrItems++;
    addDivs()
    maxSeqItems-=3;
  }
  flashOff(colorOrder)
}

//handle user choices, check against random array 

 const compareSequences=(userArr,randArr)=>{
  setTimeout(function(){confirm.innerText=""},500)
  for(let i=0;i<userArr.length;i++){
    if (userArr[i] != randArr[i]) {
      document.querySelector(".over").classList.add("next")
      document.querySelector(".over").innerText="GAME OVER"
    } 
 }
  if (userArr.length==randArr.length){
     if(currentLevel===6){
      document.querySelector(".over").classList.add("next")
      document.querySelector(".over").innerText=`NEW COLOR ADDED`
      currentLevel++;
      levelUp()
     } else {
      document.querySelector(".over").classList.add("next")
      currentLevel++;
      document.querySelector(".over").innerText=`LEVEL ${currentLevel}`
      levelUp()
     }
    
  } 
 }



//





//event listeners


const buttonListener=()=>{
  buttons.addEventListener('click',function(e){
   let tempSequence=userSequence.push(parseInt(e.target.id))
  confirm.innerText="NICE"
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

//TIMER


const countdown = () => {
  if(gameCountdown>1){
    gameCountdown--;
      clock.classList.add("next")
      clock.innerText = `Start in ${gameCountdown}`}
      else {
        clearInterval(leadInTimer)
        clock.classList.remove("next")
        clock.innerText=''
      }
}
const leadInTimer=()=>{ setInterval(countdown, 1000)}
const goAhead=(arg1)=>{setTimeout(generateSequence,4300,maxSeqItems)}

leadInTimer()
goAhead()
goEventListener()
buttonListener()


