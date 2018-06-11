var db=firebase.database();
var c = document.getElementById('c1');
var ctx = c.getContext('2d');
c.width = window.innerWidth/2;
c.height = window.innerHeight;

var img= ["170629_cristiano-ronaldo.jpg" , "Neymar_PSG.jpg" , "2014-06-24t215358z_559277706_gm1ea6p0f-copy.jpg" , "wpid-378549-robert-lewandowski-afp-crop.jpg" , "Lionel_Messi,_Player_of_FC_Barcelona_team.JPG" , "1521028131-mohamed-salah-liverpool_x13l3ib9a11fzmmo34d49wze.jpg" , "910317324.jpg.0.jpg" , "Shahter-Reak_M_2015_(10).jpg" , "gallery-1492764356-paul-pogba.jpg" , "Toni-Kroos-657599.jpg" , "Isco.jpg" , "9b2747a53b694f698dadfcd5577728e9.jpg" , "Marcelo_Brazil.jpg" , "GettyImages-879748310.jpg" , ""];




function greenField(){
ctx.fillStyle = "green";
ctx.beginPath();
ctx.fillRect(20,20,c.width-50,c.height-20);
ctx.fill();
ctx.closePath();
}

function centerCircle(){
ctx.lineWidth=10;
ctx.strokeStyle = 'white';
ctx.arc(c.width/2,c.height/2,75,0,2*Math.PI);
ctx.stroke();
ctx.closePath();
}

function centerLine(){
  ctx.linewidth = 10;
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(0,c.height/2);
  ctx.lineTo(c.width,c.height/2);
  ctx.stroke();
  ctx.closePath();
}
function test(){
  console.log(document.getElementById('LW').value)
}

test();
greenField();
centerCircle();
centerLine();


if (document.getElementById('LW').value=="Ronaldo"){
var pic1 = document.createElement("img");
pic1.id = "LW";
  pic1.src = img[0]}

  else{
    var pic1 = document.createElement("img");

    pic1.src = img[1];

};
if (document.getElementById('ST').value=="Suarez"){
  var pic2 = document.createElement("img");

  pic2.src = img[2]}
  else{
    var pic2 = document.createElement("img");
    pic2.id = "ST";
    pic2.src = img[3];
};
if (document.getElementById('RW').value=="Messi"){

  var pic3 = document.createElement("img");
  pic3.src = img[4]}
  else{
var pic3 = document.createElement("img");
    pic3.src = img[5];
};
if (document.getElementById('LCM').value=="Coutinho"){
var pic4 = document.createElement("img");
  pic4.src = img[6]}
  else{
var pic4 = document.createElement("img");
    pic4.src = img[7];
};
if (document.getElementById('CM').value=="Pogba"){
  pic5 = img[8]}
  else{
    pic5 = img[9];
};
if (document.getElementById('RCM').value=="Isco"){
  pic6 = img[10]}
  else{
    pic6 = img[11];
};
if (document.getElementById('LB').value=="Marcelo"){
  pic7 = img[12]}
  else{
    pic7 = img[13];
};
if (document.getElementById('LCB').value=="Ramos"){
  pic8 = img[14]}
  else{
    pic8 = img[15];
};
if (document.getElementById('RCB').value=="Silva"){
  pic9 = img[16]}
  else{
    pic9 = img[17];
};
if (document.getElementById('RB').value=="Alves"){
  pic10 = img[18]}
  else{
    pic10 = img[19];
};
if (document.getElementById('GK').value=="De Gea"){
  pic11 = img[20]}
  else{
    pic11 = img[21];
};

document.getElementById("GS").addEventListener("click",function(){
  ctx.drawImage(pic1, 20,20)
});

document.getElementById("GS").addEventListener("click",function(){
  ctx.drawImage(pic2, 355,20)
});
document.getElementById("GS").addEventListener("click",function(){
  ctx.drawImage(pic3, c.width-150,20)
});
document.getElementById("GS").addEventListener("click",function(){
  ctx.drawImage(pic4, c.width-150,20)
});
