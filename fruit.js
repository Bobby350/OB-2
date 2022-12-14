img = "";
status = "";

function preload() {
    img = loadImage("afrut.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw() {
    image(img, 0, 0, 640, 420);
}

function modelLoaded() {
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results)
    }
}