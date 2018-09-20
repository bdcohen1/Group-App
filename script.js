// /*this for slider based - setting up slider*/
// let slider = document.getElementById("myRange");
// let output = document.getElementById("demo");
// output.innerHTML = slider.value;
//
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }
//
//
// // Time Controller
// function clock() {
//     const time = new Date();
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();
//
//     if (hours > 12) {
//         hours = hours - 12;
//     }
//
//     document.querySelectorAll('.clock')[0].innerHTML = hours + ":" + minutes + ":" + seconds;
//
// }
// setInterval(clock, 1000);
//
//
// //Get time funtion - it passes time to the animation control function gettimeofday
// function updatetime() {
//     const now = new Date();
//     gettimeofday(now.getHours());
//     //reset the slider to the actual time
//     slider.value = now.getHours();
//     output.innerHTML = now.getHours();
// }
//
// //Animation control function - you could split these into rise and set funtions but I have'nt done that yet
// function gettimeofday(now) {
//     hour = now;
//     if (hour >= 0 && hour < 5) {
//         timeofdaypercent = hour - 0;
//         timeofdaypercent = (timeofdaypercent / 4) * 100;
//         var moon = document.getElementById('moon');
//         var moonheight = (timeofdaypercent * 2.5) + 50;
//         moon.style.top = moonheight + "px";
//         var sun = document.getElementById('sun');
//         sun.style.top = "450px";
//         document.body.style.backgroundColor = "#002551";
//         var world = document.getElementById('world');
//         world.style.borderBottom = "5px solid #67a8f1";
//         document.getElementById('toggle-label-left').style.color = "#d3d3d3";
//         document.getElementById('toggle-label-right').style.color = "#d3d3d3";
//         document.getElementsByClassName('simtime')[0].style.color = "#d3d3d3";
//     }
//     if (hour >= 5 && hour < 12) {
//         timeofdaypercent = hour - 5;
//         timeofdaypercent = (timeofdaypercent / 7) * 100;
//         var sun = document.getElementById('sun');
//         var sunheight = 300 - (timeofdaypercent * 2.9);
//         sun.style.top = sunheight + "px";
//         var moon = document.getElementById('moon');
//         moon.style.top = "400px";
//         document.body.style.backgroundColor = "#f4c042";
//         var world = document.getElementById('world');
//         world.style.borderBottom = "5px solid #7a6021";
//         document.getElementById('toggle-label-left').style.color = "#7a6021";
//         document.getElementById('toggle-label-right').style.color = "#7a6021";
//         document.getElementsByClassName('simtime')[0].style.color = "#7a6021";
//     }
//     if (hour >= 12 && hour < 19) {
//         timeofdaypercent = hour - 12;
//         timeofdaypercent = (timeofdaypercent / 7) * 100;
//         var sun = document.getElementById('sun');
//         var sunheight = (timeofdaypercent * 2.9) + 50;
//         sun.style.top = sunheight + "px";
//         var moon = document.getElementById('moon');
//         moon.style.top = "400px";
//         document.body.style.backgroundColor = "#f4c042";
//         var world = document.getElementById('world');
//         world.style.borderBottom = "5px solid #7a6021";
//         document.getElementById('toggle-label-left').style.color = "#7a6021";
//         document.getElementById('toggle-label-right').style.color = "#7a6021";
//         document.getElementsByClassName('simtime')[0].style.color = "#7a6021";
//     }
//     if (hour >= 19 && hour <= 24) {
//         timeofdaypercent = hour - 20;
//         timeofdaypercent = (timeofdaypercent / 5) * 100;
//         var moon = document.getElementById('moon');
//         var moonheight = 200 - (timeofdaypercent * 2.5) + 50;
//         moon.style.top = moonheight + "px";
//         var sun = document.getElementById('sun');
//         sun.style.top = "450px";
//         document.body.style.backgroundColor = "#002551";
//         var world = document.getElementById('world');
//         world.style.borderBottom = "5px solid #67a8f1";
//         document.getElementById('toggle-label-left').style.color = "#d3d3d3";
//         document.getElementById('toggle-label-right').style.color = "#d3d3d3";
//         document.getElementsByClassName('simtime')[0].style.color = "#d3d3d3";
//     }
// }
//
//
// //Start the loop going based of real time
// updatetime();
// var timeloop = setInterval(updatetime, 1000);
//
// //Toggle switch functions
// var togglestate=0;
// document.getElementsByClassName('toggle')[0].onclick = function() {
//     this.classList.toggle('on');
//     if (togglestate == 0) {
//         togglestate = 1;
//         clearInterval(timeloop);
//         slider.oninput = function() {
//             output.innerHTML = this.value;
//             gettimeofday(this.value);
//         }
//         document.getElementById('slidecontainer').style.maxHeight = "300px";
//         document.getElementById('toggle-label-left').style.opacity = "0.2";
//         document.getElementById('toggle-label-right').style.opacity = "1";
//     } else if (togglestate == 1) {
//         togglestate = 0;
//         updatetime();
//         timeloop = setInterval(updatetime, 1000);
//         slider.oninput = null;
//         document.getElementById('slidecontainer').style.maxHeight = "0px";
//         document.getElementById('toggle-label-left').style.opacity = "1";
//         document.getElementById('toggle-label-right').style.opacity = "0.2";
//     }
// }

// Test Area
let isCloudy = true;
let isDaytime = true;
let isSunny = true;

const Size = ["3", "2"];
let ColorGDot = ["fead46", "fffffb"];
let ColorSDot = ["e3fcf8", "e3fcf8", "e3fcf8", "e3fcf8", "e3fcf8", "d5c89c"];
let ground_Dot_Counter = 0;
let sky_Dot_Counter = 0;
let cloud_Counter = 0;

// initial onLoad function
window.onload = function Start() {
    dayNightController();
    const Dot = document.getElementsByClassName("dot");
    while (Dot.length > 0) {
        Dot[0].parentNode.removeChild(Dot[0]);
    }
    ground_Dot_Counter = 0;
    sky_Dot_Counter = 0;
    Ground_Dot_Controller();
    Sky_Dot_Controller();
    Cloud_Controller()
    if (isCloudy) {
        Cloud_Controller()
    }
    if (isSunny) {
        Sun_Moon_Controller();
    }
}

function dayNightController(){
    const sky = document.getElementById("sky");
    const ground = document.getElementById("ground");
    if (isDaytime){
        sky.style.backgroundColor = "#bee1dd";
        ground.style.backgroundColor = "#fed375";
        ColorGDot = ["fead46", "fffffb"];
        ColorSDot = ["e3fcf8", "e3fcf8", "e3fcf8", "e3fcf8", "e3fcf8", "d5c89c"];
        document.getElementById('sun').style.display = 'block';
        document.getElementById('moon').style.display = 'none';
    } else {
        sky.style.backgroundColor = "#5B0F0F";
        ground.style.backgroundColor = "#FB9D33";
        ColorGDot = ["F08630", "c24825"];
        ColorSDot = ["FC9E32", "C44625"];
        document.getElementById('sun').style.display = 'none';
        document.getElementById('moon').style.display = 'block';
    }
}

function dayToNight(){
    isDaytime = !isDaytime;
    dayNightController();
    ReloadDots();
}

// Element Creation Controller
function createDot(dotLeft, dotTop, dotColor, dotSize, skyOrGround) {
    const elem = document.createElement("div");
    elem.setAttribute("class", "dot");
    elem.setAttribute("style", "left:" + dotLeft + "px;top:" + dotTop + "px;background:#" + dotColor + ";width:" + dotSize + "px;height:" + dotSize + "px;" + "position: absolute; border-radius: 50%;");
    document.getElementsByClassName(skyOrGround)[0].appendChild(elem);
    return elem;
}

function createCloud(cloudLeft, cloudTop, cloudImg) {
    const elem = document.createElement("img");
    elem.setAttribute("class", "cloud");
    elem.setAttribute("src", "img/Clouds/Cloud" + cloudImg + ".svg");
    elem.setAttribute("style", "left:" + cloudLeft + "%;top:" + cloudTop + "%;");
    document.getElementsByClassName("sky")[0].appendChild(elem);
    return elem;
}

// create the environment dots on page load and remake on page resize
function Ground_Dot_Controller() {
    while (ground_Dot_Counter < document.body.offsetHeight / 2) {
        createDot(Math.floor(Math.random() * document.body.offsetWidth - 3), Math.floor(Math.random() * document.body.offsetHeight * 0.34), ColorGDot[Math.floor(Math.random() * ColorGDot.length)], Size[Math.floor(Math.random() * Size.length)], "ground");
        ground_Dot_Counter++;
    }
}

function Sky_Dot_Controller() {
    while (sky_Dot_Counter < document.body.offsetWidth / 3) {
        createDot(Math.floor(Math.random() * document.body.offsetWidth - 3), Math.floor(Math.random() * document.body.offsetHeight * 0.64), ColorSDot[Math.floor(Math.random() * ColorSDot.length)], Size[Math.floor(Math.random() * Size.length)], "sky");
        sky_Dot_Counter++;
    }
}

function Cloud_Controller() {
    if (isCloudy){
        while (cloud_Counter < document.body.offsetWidth / 200) {
            createCloud(Math.floor((Math.random() * 107) + -7), Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 4) + 1));
            cloud_Counter++;
        }

    }
}

function Sun_Moon_Controller() {
    if (isDaytime) {

    }
}

// Reload dots on page resize
function ReloadDots() {
    const Dot = document.getElementsByClassName("dot");
    while (Dot.length > 0) {
        Dot[0].parentNode.removeChild(Dot[0]);
    }
    ground_Dot_Counter = 0;
    sky_Dot_Counter = 0;
    Ground_Dot_Controller();
    Sky_Dot_Controller();
}