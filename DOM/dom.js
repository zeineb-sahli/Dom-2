
const ButtonMinus = document.querySelectorAll(".btnmoins");
const PlusButton = document.querySelectorAll(".btnplus");
const delateButton = document.querySelectorAll(".btnbin");
const quantitiesButton = document.querySelectorAll(".x");
const prices = document.querySelectorAll(".price"); 
const bigdivContents = document.querySelectorAll(".x");
const SumPr = document.querySelectorAll(".text-start");
const ButtonchangeImage = document.querySelectorAll(".btnheart"); 
const a = document.querySelectorAll(".t"); 
console.log(a)



function changeImage(){
 /*    if (document.getElementById("imgClickAndChange").src == "heart.png"){
        document.getElementById("imgClickAndChange").src = "heart(1).png";
    } else {
        document.getElementById("imgClickAndChange").src = "heart.png";
    } */
}

for ( let i=0;i<ButtonchangeImage.length; i++){
    ButtonchangeImage[i].addEventListener("click", function(){
     
      console.log(ButtonchangeImage[i].innerHTML=="<img src='heart.png' width='15px'>")
      ButtonchangeImage[i].innerHTML="<img src='heart (1).png' width='15px' class='t'/>"
    /*     if(ButtonchangeImage[i].innerHTML=="<img src='heart.png' width='15px'>"){
           
        } */
    
     
        
    


    });
}


 for ( let i=0;i<a.length; i++){
    a[i].addEventListener("click", function(){
        
  
      a[i].innerHTML="<img src='heart.png' width='15px'>"
  
    
     
   
    


    });
} 
for ( let i=0;i<delateButton.length; i++){
    delateButton[i].addEventListener("click", function(){
        bigdivContents[i].remove()
        parseInt(totalSum.textContent) -
        parseInt(quantitiesButton[i].textContent) *
        parseInt(prices[i].textContent);
    });
}

for (let i = 0; i < ButtonMinus.length; i++) {
    buttonMinus[i].addEventListener("click", function (e) {
      if (quantitiesButton[i].innerHTML > 0) {
        quantitiesButton[i].innerHTML--;
        SumPr.textContent =
          parseInt(SumPr.textContent) - parseInt(prices[i].innerHTML); 
      }
    });
} 
for (let i = 0; i < buttonMinus.length; i++) {
  buttonMinus[i].addEventListener("click", function (e) {
    if (quantitiesButton[i].innerHTML > 0) {
      quantitiesButton[i].innerHTML++;
      SumPr.textContent =
        parseInt(SumPr.textContent) - parseInt(prices[i].innerHTML); 
    }
  });
} 


