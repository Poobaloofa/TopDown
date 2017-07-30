function vector2(x,y){
  this.x = x;
  this.y = y;
  this.dist = function(){
    return (Math.sqrt(this.x*this.x+this.y*this.y))
  }
  this.add = function(v2){
    this.x += v2.x;
    this.y += v2.y;
  }
  this.mult = function(scalar){
    this.x *= scalar;
    this.y *= scalar;
  }
}

function ball(v2pos,v2vel,r,m,player){
  this.pos = v2pos;
  this.vel = v2vel;
  this.r = r;
  this.mass = m;
  this.draw = function(color){
    ctx.beginPath();
    ctx.arc(this.pos.x,this.pos.y,this.r,0,2*Math.PI);
    ctx.fillStyle = color
    ctx.fill();
    ctx.stroke();
    }
    this.update = function(){
      this.pos.add(this.vel);
    }
  this.colliding = function(){

  }
}
