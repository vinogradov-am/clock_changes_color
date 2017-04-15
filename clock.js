function displayTime(){
  var elt=document.getElementById("clock");
  var now=new Date();
  elt.innerHTML=now.toLocaleTimeString();
  var h=document.getElementById('fort');
  elt.style.fontSize=size();
  h.style.color=colortext();
  var color=colortext();
  var b=document.getElementById('tort');
  b.style.backgroundColor=colortext();
  elt.style.color=colortext();
  setTimeout(displayTime,100);




}
displayTime();

console.log(colortext(0-255));

function size() {
  var a=color(10,250);
  return a+'px';
}

function colortext() {
  var a=color(0,255);
  var b=color(0,255);
  var c=color(0,255);



  return 'rgb'+'('+a+','+b+','+c+')'
}
function color(min,max) {
  var t=Math.random()*(max-min);
  return Math.round(t);
}
