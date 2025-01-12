let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelectorAll("#reset-btn");
let newGameBtn=document.querySelectorAll("#new-btn");
let msgContainer= documentquerySelectorAll(".msg-container");
let msgBox= document.querySelectorAll("msg");

let turn0=true;
let count=0;

const winPettern=[
    [0,1,2]
    [0,3,6]
    [0,4,8]
    [1,4,7]
    [2,5,8]
    [2,4,6]
    [3,4,5]
    [6,7,8]
];

const resetGame =()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.ClassList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     if(turn0){
        box.innerText="O";
        turn0=false;
     }else{
        box.innerText="X";
        turn0=true;
     }
     box.disabled=true;
     count++;
     let isWinner=CheckWinner();
     if(count===9 && !isWinner){
      gameDraw();
     }
    });
});