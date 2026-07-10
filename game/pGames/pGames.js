//Plane Games

const buttonA = document.getElementById('buttonA')
const returnA = document.getElementById('returnA')

function PTravel() {
 //Prompts
 const prop = window.prompt('Type in piston or jet')
 const PW = Number(window.prompt('Type in aircraft power in hp if piston or thrust in lbs if jet'))
 const WT = Number(window.prompt('Type in aircraft weight in lbs'))
 const t = Number(window.prompt('Type in aircraft flight time in hours'))
 const T = Number(window.prompt('Enter year built'))
 let PWtoWT = PW / WT;
 let rangeA = 0;
 let rangeB = 0;
 let speed = 0;
 //Getting speed based on type of aircraft and power to weight ratio
 if(prop === 'jet') { 
  if(PWtoWT > 0.7 && t < 1) { speed += 1700} 
  else if (PWtoWT > 0.7 && t >= 1) { speed += 1200} 
  else if (PWtoWT > 0.6 && t < 1) { speed += 1400}
  else if (PWtoWT > 0.6 && t >= 1) { speed += 900}
  else if (PWtoWT > 0.5 && t < 1) { speed += 800}
  else if (PWtoWT > 0.5 && t >= 1) { speed += 500}
  else if (PWtoWT > 0.25 && t < 1) { speed += 550}
  else if (PWtoWT > 0.25 && t >= 1) { speed += 300}
  else if (PWtoWT <= 0.25) { speed += 0}
  else {rangeA = 'Enter correct values of Type and or Weight'}
 }
 else {rangeA = 'Enter correct values of Type and or Weight'}
 rangeA = speed * t;
//Adding to range based on year built
 if ( T > 1980 ) { rangeB += 1000 }
 else if (T >= 1950 && T <= 1980) {
 rangeB += 500
 } else if (T >= 1935 && T < 1950) {
  rangeB += 250
 } else if (T > 1920 && T < 1935) {
  rangeB += 100
 } else if (T < 1920) {
  rangeB += 0
 } else {rangeB = 'Enter correct date'}
 let range = rangeA + rangeB;
 //console.log('The aircraft can travel ' + range +' miles distance' + ' with a speed of ' + speed + ' mph');
 returnA.innerHTML = range +' miles distance' + ' with a speed of ' + speed + ' mph';
}

buttonA.addEventListener('mousedown',PTravel);