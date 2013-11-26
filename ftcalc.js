function calculateTime() {
    var numBytes = document.ftCalc.fileSize.value * Math.pow(10, document.ftCalc.fileSizeSuffix.value);
    var bandwidth = document.ftCalc.bandwidth.value * document.ftCalc.bandwidthSuffix.value;
    var timeValue = document.ftCalc.time.value;
    document.getElementById("answer").innerHTML = parseFloat(numBytes / bandwidth / timeValue).toFixed(2);
}

window.onload = function () {
    calculateTime();
};