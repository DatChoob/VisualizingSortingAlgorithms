class Canvas {

    constructor(canvas, width, height) {
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext("2d");
        this.canvas.setAttribute('width', width);
        this.canvas.setAttribute('height', height);

    }

    background(fillStyle) {
        this.canvasCtx.fillStyle = fillStyle;
        this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setFillStyle(fillStyle) {
        this.canvasCtx.fillStyle = fillStyle;
    }

    stroke(strokeStyle) {
        this.canvasCtx.strokeStyle = strokeStyle
    }

    rect(x, y, width, height) {
        this.canvasCtx.beginPath();
        this.canvasCtx.moveTo(x, y);
        this.canvasCtx.rect(x, y, width, height);
        this.canvasCtx.fill();
        this.canvasCtx.stroke();
    }

    line(x, y, w, h) {
        this.canvasCtx.lineWidth = "1";
        this.canvasCtx.beginPath();
        this.canvasCtx.moveTo(x, y);
        this.canvasCtx.lineTo(w, h);
        this.canvasCtx.stroke();



    }
}