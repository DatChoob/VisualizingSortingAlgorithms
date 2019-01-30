// import Quicksort from './quicksort.js';
let width = 500;
let height = 500;
let sourceArray = new Array();
let scale = 20;
let steps;


function setup() {
    createCanvas(width, height);
    sourceArray = shuffleArray(generatePoints());
    steps = doQuickSort();
}

let loops = 0;
let isSortingFinished = false;
let isSuccessAnimationFinished = false;
let successCounter = 0;
function draw() {

    if (!isSortingFinished) {
        if (loops++ % 2 == 0) {
            step = steps.shift();
            if (step == null) {
                isSortingFinished = true;
                return;
            }
            swap(sourceArray, step.indexA, step.indexB);
            drawPoints(sourceArray, step.indexA, step.indexB);
        }
    } else if (!isSuccessAnimationFinished && successCounter != sourceArray.length) {
        drawSuccess(sourceArray, successCounter++);
        if(successCounter== sourceArray.length)
        isSuccessAnimationFinished=true;
    }

}


function drawPoints(array, swappedIndexA, swappedIndexB) {
    background(150);
    for (let i = 0; i < array.length; i++) {

        if (scale == 1) {
            if (i == swappedIndexA || i == swappedIndexB) {
                stroke('red');
            } else stroke(255);

            line((i * scale), height, ((i + 1) * scale), height - array[i])
        } else {
            if (i == swappedIndexA || i == swappedIndexB) {
                fill('red');
            } else fill(255);
            rect((i * scale), height - array[i], scale, array[i]);
        }
    }
}


function drawSuccess(array, successCounter) {
    background(150);
    for (let i = 0; i < array.length; i++) {
        if (scale == 1) {
            if (i <= successCounter) {
                stroke('green');
            } else stroke(255);
            line((i * scale), height, ((i + 1) * scale), height - array[i]);
        } else {
            if (i <= successCounter) {
                fill('green');
            } else fill(255);
            rect((i * scale), height - array[i], scale, array[i]);

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


