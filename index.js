var num1=Math.floor(Math.random()*6)+1;
var num2=Math.floor(Math.random()*6)+1;
console.log(num1+num2);
var adr1,adr2;
adr1="images/dice"+num1+".png";
adr2="images/dice"+num2+".png";

document.querySelector(".img1").setAttribute('src',adr1);
document.querySelector('.img2').setAttribute('src',adr2);


var first_win="🚩 Player 1 Wins";
var second_win="Player 2 Wins 🚩";
var draw="Draw!";
var verdict;
if(num1<num2) verdict=second_win;
else if(num1===num2) verdict=draw;
else verdict=first_win;

document.querySelector('h1').textContent=verdict;