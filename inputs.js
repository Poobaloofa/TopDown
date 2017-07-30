var keys = [];
var moveforce = 0.2;
var maxspeed = 3
document.addEventListener('keydown', function(e){
  keys[e.keyCode] = true;
}, false);
document.addEventListener('keyup', function(e){
  keys[e.keyCode] = false;
}, false);

function checkInputs(up,down,left,right,obj){
  //up/down
  if(keys[down]){
    if (obj.vel.y<maxspeed){
      obj.vel.y+=moveforce;
    }
  };
  if(keys[up]){
    if (obj.vel.y>-maxspeed){
      obj.vel.y-=moveforce;
    }
  };
  if(keys[right]){
    if (obj.vel.x<maxspeed){
      obj.vel.x+=moveforce;
    }
  };
  if(keys[left]){
    if (obj.vel.x>-maxspeed){
      obj.vel.x-=moveforce;
    }
  };

}
