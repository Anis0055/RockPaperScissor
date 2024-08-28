let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let userScorepara=document.querySelector("#scre");
let compScorepara=document.querySelector("#cmpe");
let resetBtn=document.querySelector("#btn");
let disPlay=document.querySelector("#msg");
//console.log(choices);
const playGame=(userChoice)=>{
      const options=["rock","paper","scissors"];
      const randInt=Math.floor(Math.random()*3); //Math.random()->[0,1);
      // console.log(randInt);
      const compChoice=options[randInt];
      // console.log(compChoice);
      if(compChoice==="rock" && userChoice==="paper"){
           disPlay.innerText="Hurranh! You win";
           userScore++;
           userScorepara.innerText=userScore;
      }
      else if(compChoice==="rock" && userChoice==="scissors"){
           disPlay.innerText="Ohh! Computer win";
           compScore++;
           compScorepara.innerText=compScore;
      }
      else if(compChoice==="paper" && userChoice==="scissors")
      {
          disPlay.innerText="Hurranh! You win";
          userScore++;
          userScorepara.innerText=userScore;
      }
      else if(compChoice==="paper" && userChoice==="rock")
      {
           disPlay.innerText="Ohh! Computer win";
           compScore++;
           compScorepara.innerText=compScore;
      }
      else if(compChoice==="scissors" && userChoice==="paper")
      {
           disPlay.innerText="Ohh! Computer win";
           compScore++;
           compScorepara.innerText=compScore;
      }
      else if(compChoice==="scissors" && userChoice==="rock")
      {
           disPlay.innerText="Hurranh! You win";
           userScore++;
           userScorepara.innerText=userScore;
      }
      else{
        disPlay.innerText="Match drawn";
      }
}
choices.forEach((choice)=>{
   // console.log(choice);
    const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    choice.addEventListener("click",()=>{
             playGame(userChoice);
    });
})
resetBtn.addEventListener("click",()=>{
   userScorepara.innerText=0;
   compScorepara.innerText=0;
   userScore=0;
   compScore=0;
   disPlay.innerText="Play Game!";
});