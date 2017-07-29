var keys = [];
var moveforce = 0.2;
var maxspeed = 2;
document.addEventListener('keydown', function(e){
  keys[e.keyCode] = true;
}, false);
document.addEventListener('keyup', function(e){
  keys[e.keyCode] = false;
}, false);

function checkInputs(up,down,left,right,obj){
  //up/down
  if(keys[down]&&obj.vel.y<maxspeed){
    obj.vel.y+=moveforce;
  };
  if(keys[down]&&obj.vel.y>=maxspeed){
    obj.vel.y=maxspeed
  }
  if(keys[up]&&obj.vel.y>-maxspeed){
    obj.vel.y-=moveforce;
  };
  if(keys[up]&&obj.vel.y<=-maxspeed){
    obj.vel.y=-maxspeed
  }
  //left/right
  if(keys[right]&&obj.vel.x<maxspeed){
    obj.vel.x+=moveforce;
  };
  if(keys[right]&&obj.vel.x>=maxspeed){
    obj.vel.x=maxspeed
  }
  if(keys[left]&&obj.vel.x>-maxspeed){
    obj.vel.x-=moveforce;
  };
  if(keys[left]&&obj.vel.x<=-maxspeed){
    obj.vel.x=-maxspeed
  }
}
