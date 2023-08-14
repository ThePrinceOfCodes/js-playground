let count = 0
const displayCount = document.getElementById("count")
function countCar() {
    document.getElementById("counting").style.display = "block";
    document. getElementById("save-count"). style. display = "none";
    count += 1
    document.getElementById("count").innerHTML = count
}

function displayCarCount() {
    document.getElementById("counting").style.display = "none";
    document.getElementById("save-count").style.display = "block";
    document.getElementById("count").innerHTML = count
    count = 0
}