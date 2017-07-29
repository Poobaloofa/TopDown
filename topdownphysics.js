//friction
var μ = 0.025
//μ * obj.mass * Math.abs(obj.vel.THING / obj.vel.dist)
function friction(obj){
  if (obj.vel.x > 0){
    obj.vel.x -= μ * obj.mass * Math.abs(obj.vel.x / obj.vel.dist)
  }
  if (obj.vel.x < 0){
    obj.vel.x += μ * obj.mass * Math.abs(obj.vel.x / obj.vel.dist)
  }
  if (obj.vel.y > 0){
    obj.vel.y -= μ * obj.mass * Math.abs(obj.vel.y / obj.vel.dist)
  }
  if (obj.vel.y < 0){
    obj.vel.y += μ * obj.mass * Math.abs(obj.vel.y / obj.vel.dist)
  }
  if (obj.vel.x < μ * obj.mass * Math.abs(obj.vel.x / obj.vel.dist) && obj.vel.x > -μ * obj.mass * Math.abs(obj.vel.x / obj.vel.dist)){
    obj.vel.x = 0
  }
  if (obj.vel.y < μ * obj.mass * Math.abs(obj.vel.y / obj.vel.dist) && obj.vel.y > -μ * obj.mass * Math.abs(obj.vel.y / obj.vel.dist)){
    obj.vel.y = 0
  }
}

function pUpdate(obj){
  friction(obj);
}
