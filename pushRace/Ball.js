class Ball {
    constructor(x, y, r, velocity) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.velocity = velocity;
        addEventListener('keydown', evt => {
            switch (evt.keyCode) {
                case 37:
                    this.velocity.add(new Vector(-1, 0))
                    break;
                case 38:
                    this.velocity.add(new Vector(0, -1))
                    break;
                case 39:
                    this.velocity.add(new Vector(1, 0))
                    break;
                case 40:
                    this.velocity.add(new Vector(0, 1))
                    break;
                default:

            }
        })
    }

    update() {
        this.x += this.velocity.dx;
        this.y += this.velocity.dy;
    }

    draw(context) {
        context.beginPath();
        context.lineWidth = 5;
        context.fillStyle = "#ffff00";
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.stroke();
        context.fill();
        context.closePath();
    }
}
