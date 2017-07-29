var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var me = new ball(new vector2(50,100),new vector2(2,0),10,5,true);
setInterval(function(){
  ctx.clearRect(0,0,c.height,c.width);
  me.draw("cyan");
  me.update();
  pUpdate(me);
  checkInputs(87,83,65,68,me);
}, 10)
