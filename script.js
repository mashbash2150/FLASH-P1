//variables
let randSequence=[]
let userSequence=[]
let maxSeqItems=1   //this is where game begins, gets incremented in levelUp function
let maxArrItems=4   //will increment this at heigher levels to introduce more colors/circles
let currentLevel=1
let currentScore=0
let gameCountdown=4
let mode="summer"
const lights=document.querySelector(".lights")
const lightsArr=document.querySelectorAll(".lights div")
const light1=document.querySelector(".light1")
const light2=document.querySelector(".light2")
const light3=document.querySelector(".light3")
const light4=document.querySelector(".light4")
let light5=''
const colorOrder=[light1,light2,light3,light4]
const level=document.querySelector('.level')
const buttons=document.querySelector(".user-buttons")
const buttonsArr=document.querySelectorAll(".user-buttons p")
const clock=document.querySelector(".clock")
const confirm=document.querySelector(".confirm")
let score=document.querySelector(".score")
const gamePage=document.querySelector(".game-page")
const entryPage=document.querySelector(".entry-page")
const modeButton=document.querySelector(".mode")
const exitButton=document.querySelector(".exit")
const over=document.querySelector(".over")
let highScore=localStorage.getItem("HS")
const rounds=[
{
  roundNo:"1",
  beginLevel:1,
  endLevel:3,
  interval:0.8,
  phrase:"",
  removeTO:800,
  addTO:900,
  points:5
},
{
  roundNo:"2",
  beginLevel:4,
  endLevel:6,
  interval:0.8,
  phrase:"NEW COLOR ADDED",
  removeTO:800,
  addTO:900,
  points:10,
},
{
  roundNo:"3",
  beginLevel:7,
  endLevel:25,
  interval:0.25,
  phrase:"FASTER!",
  removeTO:400,
  addTO:500,
  points:15,
}]
let x=0
let round=rounds[x]



//FUNCTIONS

//Adding a color at level specified in Round 2 object
const addDivs=()=>{
  // if (mode==="summer"){
   const addLight=document.createElement('div')
   const addButton=document.createElement('div')
   addLight.setAttribute("class"," light light5")
   addButton.setAttribute("class","button5 zoom")
   addButton.setAttribute("id","5")
   addButton.innerText="."
   lights.append(addLight)
   buttons.append(addButton)
   light5=document.querySelector(".light5")
   colorOrder.push(light5)
  }

  //REMOVED DURING REFACTOR - DARK MODE NOW HANDLED BY CSS ENTIRELY

  //  else if (mode==="fall") {
  //   const addLight=document.createElement('div')
  //   const addButton=document.createElement('p')
  //   addLight.setAttribute("class","light light5fall")
  //   addButton.setAttribute("class","button5fall zoom")
  //   addButton.setAttribute("id","5")
  //   addButton.innerText="."
  //   lights.append(addLight)
  //   buttons.append(addButton)
  //   let light5fall=document.querySelector(".light5fall")
  //   colorOrder.push(light5fall)}

  //  }


 //removes animation - though not working reliablly
const flashOff=(seq)=>{
  for(let i=0;i<(seq.length);i++){
     if((seq[i]).style.animation!=''){
     seq[i].style.animation=''}
   else {
  }
}
}


//operates blinking feature
const setBlink=(seq)=>{

  for(let i=0;i<seq.length;i++){
    if((seq[i]).style.animation!=''){
    seq[i].style.animation=''}}

  for(let i=0;i<seq.length;i++){
      setTimeout(function(){
        seq[i].style.animation=""},i*round.removeTO);
      setTimeout(function(){
          seq[i].style.animation=`blink ${round.interval}s`
        },i*round.addTO)
    }
  };

//maps color sequence to array of numbers
const mapSequence=(numSeq)=>{
  let colorSequence=numSeq.map((number)=>{
    return colorOrder[number-1]
    return colorSequence;
  })
   setBlink(colorSequence)
  }


  //generate random sequence 
 const generateSequence=(max)=>{
    let randNumber=0;
    for(i=1;i<=max;i++){
      randNumber=Math.floor(Math.random()*maxArrItems)+1
      randSequence.push(randNumber)
  }
  console.log(randSequence)
  mapSequence(randSequence)
 }


const incrementScore=()=>{
  currentScore+=round.points
  score.innerText=`SCORE: ${currentScore}`
}
  //load high score from local storage
const checkHighScore=()=>{
 if (currentScore>highScore){
  highScore=currentScore;
  localStorage.setItem("HS", highScore)
 }
}


 const levelUp=()=>{
  maxSeqItems++;
  console.log(maxSeqItems)
  randSequence=[]
  userSequence=[]
  setTimeout(function(){
    document.querySelector(".over").innerText="";
  } , 1500)
  setTimeout(function(){
    generateSequence(maxSeqItems);
  },3000)
  if (currentLevel==rounds[1].beginLevel){
    maxArrItems++;
    addDivs()
    maxSeqItems=1;
  } else if (currentLevel==rounds[2].beginLevel){
    maxSeqItems=1;
  }
 // flashOff(colorOrder)
}

//handle user choices, check against random array, display result based on choices

 const compareSequences=(userArr,randArr)=>{
  flashOff(colorOrder)

  //click confirm text
 setTimeout(function(){confirm.innerText=""},300)
  for(let i=0;i<userArr.length;i++){
    if (userArr[i] != randArr[i]) {
      console.log((userArr[i] != randArr[i]))
      over.classList.add("next")
      over.innerText=`GAME OVER \n PLAY AGAIN?`
      document.querySelector(".Y").classList.replace("YNOFF","YNON")
      document.querySelector(".N").classList.replace("YNOFF","YNON")
      checkHighScore()
      
    }
  }
  if ((userArr[i] == randArr[i]) && userArr.length==randArr.length){
    if(currentLevel===(round.endLevel)){
     currentLevel++;
     document.querySelector(".over").classList.add("next")
     document.querySelector(".over").innerText=`LEVEL ${currentLevel}`
     x=x+1;
     round=rounds[x];
     document.querySelector(".over").innerText=`ROUND ${round.roundNo} \n ${round.phrase}`
     level.innerText=`LEVEL ${currentLevel}`
     levelUp()
    } else {
     currentLevel++;
     document.querySelector(".over").classList.add("next")
     document.querySelector(".over").innerText=`LEVEL ${currentLevel}`
     level.innerText=`LEVEL ${currentLevel}`
     levelUp()
    }
 }
   }
   
//  userArr.forEach((choice,i)=>{
   
//    if (choice === randArr[i]){
//      console.log(userArr[i],i)
//      if (userArr.length==randArr.length){
//        if(currentLevel===(round.endLevel)){
//          currentLevel++;
//          over.classList.add("next")
//          over.innerText=`LEVEL ${currentLevel}`
//          x=x+1;
//          round=rounds[x];
//          over.innerText=`ROUND ${round.roundNo} \n ${round.phrase}`
//          level.innerText=`LEVEL ${currentLevel}`
//          levelUp()
//         }} } else {
//         }
//       } )}
       
  

 



//fall/summer mode  NEEDS WORK


//REMOVED AFTER REFACTOR

// const toggleMode=()=>{
//   if (mode==="fall"){
//   for(let i=0;i<lightsArr.length;i++){
//     lightsArr[i].classList.replace(`light${i+1}fall`,`light${i+1}`)
//   }
//   for(let i=0;i<buttonsArr.length;i++){
//     buttonsArr[i].classList.replace(`button${i+1}fall`,`button${i+1}`)
//   }
//   gamePage.classList.replace("game-page-fall","game-page-summer")
//   mode="summer"
//   } else if (mode==="summer"){
//     for(let i=0;i<lightsArr.length;i++){
//       lightsArr[i].classList.replace(`light${i+1}`,`light${i+1}fall`)
//     }
//     for(let i=0;i<buttonsArr.length;i++){
//       buttonsArr[i].classList.replace(`button${i+1}`,`button${i+1}fall`)
//     }
//     gamePage.classList.replace("game-page-summer","game-page-fall")
//     mode="fall"
//   }
// }



//event listeners

//REMOVED AFTER REFACTOR

// const modeListener=()=>{
//   modeButton.addEventListener("click",toggleMode)
//   //document.querySelector(".mode-entry").addEventListener("click",toggleMode)
// }

//displays a click comfirm when user has the correct choice
const buttonListener=()=>{
  buttons.addEventListener('click',function(e){
   let tempSequence=userSequence.push(parseInt(e.target.id))
   console.log(e)
   confirm.innerText=`GREAT`
   incrementScore()
   tempSequence=userSequence
   console.log(userSequence)
   compareSequences(userSequence,randSequence)
  })
   
}

//fires off the app
const goEventListener = ()=>{
  level.addEventListener('click',function(){
    generateSequence(maxSeqItems)
  })
}



//TIMERS & STORAGE

const countdown = () => {
  document.querySelector(".highscore").innerText=`HIGH SCORE ${highScore}`
  if(gameCountdown>1){
    gameCountdown--;
      clock.classList.add("next")
      clock.innerText = `BEGIN IN ${gameCountdown}`}
      else {
        clearInterval(leadInTimer)
        clock.classList.remove("next")
        clock.innerText=null
      }
}
const leadInTimer=()=>{ setInterval(countdown, 1000)}
const goAhead=(arg1)=>{setTimeout(generateSequence,4300,maxSeqItems)}





//EXECUTE

// modeListener()
leadInTimer()
goAhead()
goEventListener()
buttonListener()


