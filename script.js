const car = document.getElementById('car');
const green = document.getElementById('greenLight');
const red = document.getElementById('redLight');

var flag = 1;
var checkpoint = 0;
setInterval(trafficLight, 4500);
function trafficLight() {
    let random = (Math.random().toFixed(2)) * 100;
    if (random % 2 == 0) {
        red.style.backgroundColor = 'rgb(255, 24, 24)';
        green.style.backgroundColor = 'black';
        flag = 0;
    }
    else {
        red.style.backgroundColor = 'black';
        green.style.backgroundColor = 'rgb(0, 255, 76)';
        flag = 1;
    }

}

var pos = 0.8;
setInterval(drive, 20);
function drive() {
    if (pos <= 60) {
        pos += 0.2;
        car.style.left = `${pos}rem`;
    }
    else {
        if (flag == 1) {
            if (pos <= 95) {
                pos += 0.2;
                car.style.left = `${pos}rem`;
                checkpoint = 1;
            } else {
                pos = 0.8;
            }
        }
    }
}

