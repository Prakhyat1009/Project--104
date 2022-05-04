//https://teachablemachine.withgoogle.com/models/Rp5fRlDu6/
Webcam.set({
    height: 400,
    width: 400,
    image_format: "png",
    png_quality: 90,
    crop_width: 400,
    crop_height: 300
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Rp5fRlDu6/model.json', Modelloaded);

function Modelloaded() {
    console.log("Model Loaded");
}

function check() {
    image = document.getElementById("captured_image");
    classifier.classify(image, got_results);
}

function got_results(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}