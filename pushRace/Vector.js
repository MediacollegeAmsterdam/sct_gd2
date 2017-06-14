class Vector{
  constructor(dx,dy){
    this._dx = dx;
    this._dy = dy;
    this._r = Math.sqrt(this._dx*this._dx + this._dy * this._dy);
    this._angle = Math.atan2(this._dy,this._dx);
  }

  set dx(dx){
    this._dx = dx;
    this._r = Math.sqrt(this._dx*this._dx + this._dy * this._dy);
    this._angle = Math.atan2(this._dy,this._dx);
  }

  get dx(){
    return this._dx;
  }

  set dy(dy){
    this._dy = dy;
    this._r = Math.sqrt(this._dx*this._dx + this._dy * this._dy);
    this._angle = Math.atan2(this._dy,this._dx);
  }

  get dy(){
    return this._dy;
  }

  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }

  draw(context,x,y,mag){
    var height = 3;
    var arrowHeight = 7;
    var arrowWidth = 15;
    context.save();
    context.translate(x,y);
    context.rotate(this._angle);
    context.beginPath();
    context.lineWidth = 3;
    context.fillStyle = "#ff0000";
    context.moveTo(0,0);
    context.lineTo(0,height);
    context.lineTo(this._r * mag,height);
    context.lineTo(this._r*mag,arrowHeight);
    context.lineTo(this._r*mag + arrowWidth,0);
    context.lineTo(this._r*mag,-arrowHeight);
    context.lineTo(this._r * mag,-height);
    context.lineTo(0,-height);
    context.lineTo(0,0);
    context.stroke();
    context.fill();
    context.closePath();
    context.restore();
  }
}
