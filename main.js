// import Quicksort from './quicksort.js';
let width = 500;
let height = 500;
let sourceArray = new Array();
let scale = 10;
let steps;
let canvas;
setup();
var sortingTimer = setInterval(draw, 50);

var successCounter = 0;
var isSortingFinished = false;
var isSuccessAnimationFinished = false;

function createCanvas(width, height) {
    canvas = new Canvas(document.getElementById("myCanvas"), width, height);
}

function setup() {
    createCanvas(width, height);
    sourceArray = shuffleArray(generatePoints());
    steps = doQuickSort();
    drawPoints(sourceArray);
}


function draw() {
    if (!isSortingFinished) {
        step = steps.shift();
        if (step == null) {
            isSortingFinished = true;
            return;
        }
        swap(sourceArray, step.indexA, step.indexB);
        drawPoints(sourceArray, step.indexA, step.indexB);
    } else if (!isSuccessAnimationFinished && successCounter != sourceArray.length) {
        drawSuccess(sourceArray, successCounter++);
        if (successCounter == sourceArray.length) {
            isSuccessAnimationFinished = true;
            clearInterval(sortingTimer);
        }
    }

}


function drawPoints(array, swappedIndexA, swappedIndexB) {
    canvas.background('grey');
    for (let i = 0; i < array.length; i++) {
        if (scale == 1) {
            if (i == swappedIndexA || i == swappedIndexB) {
                canvas.stroke('red');
            } else canvas.stroke('white');
            canvas.line((i * scale), height, ((i + 1) * scale), height - array[i])
        } else {
            canvas.stroke('black')
            if (i == swappedIndexA || i == swappedIndexB) {
                canvas.setFillStyle('red');
            } else canvas.setFillStyle('white');
            canvas.rect((i * scale), height - array[i], scale, array[i]);
        }
    }
}


function drawSuccess(array, successCounter) {
    canvas.background('grey');
    for (let i = 0; i < array.length; i++) {
        if (scale == 1) {
            if (i <= successCounter) {
                canvas.stroke('green');
            } else canvas.stroke('white');
            canvas.line((i * scale), height, ((i + 1) * scale), height - array[i]);
        } else {
            if (i <= successCounter) {
                canvas.setFillStyle('green');
            } else canvas.setFillStyle('white');
            canvas.rect((i * scale), height - array[i], scale, array[i]);

        }
    }
}

function generatePoints() {
    let points = new Array();
    for (let i = 0; i < width / scale; i++) {
        points.push(scale * height / width * (i + 1));
    }
    return points;
}

function shuffleArray(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

function swap(array, indexA, indexB) {
    let temp = array[indexB];
    array[indexB] = array[indexA];
    array[indexA] = temp;
}


