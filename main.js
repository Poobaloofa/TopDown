var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var me = new ball(new vector2(50,50),new vector2(0,0),10,1,true);
var you = new ball(new vector2(450,450),new vector2(0,0),10,1,true);
setInterval(function(){
  ctx.clearRect(0,0,c.height,c.width);
  me.draw("cyan");
  you.draw("red");
  me.update();
  you.update();
  pUpdate(me);
  pUpdate(you);
  checkInputs(87,83,65,68,me);
  checkInputs(38,40,37,39,you)
}, 10)
