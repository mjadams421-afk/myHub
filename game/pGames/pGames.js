//Plane Games

const buttonA = document.getElementById('buttonA')
const returnA = document.getElementById('returnA')

function PTravel() {
 //Prompts Goal is to find distance
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
  if(PWtoWT < 0.9 && PWtoWT >= 0.8) { speed += 1500} 
  else if (PWtoWT < 0.8 && PWtoWT >= 0.7) { speed += 1450} 
  else if (PWtoWT < 0.7 && PWtoWT >= 0.6) { speed += 1400}
  else if (PWtoWT < 0.6 && PWtoWT >= 0.5) { speed += 1000}
  else if (PWtoWT < 0.5 && PWtoWT >= 0.4) { speed += 600}
  else if (PWtoWT < 0.4 && PWtoWT >= 0.3) { speed += 550}
  else if (PWtoWT < 0.3 && t >= 0.2) { speed += 500}
  else if (PWtoWT < 0.2 && PWtoWT >= 0.1) { speed += 300}
  else if (PWtoWT < 0.1) { speed += 200}
  else {speed += 'Enter correct values for power and or Weight'}
 }
 else {speed += 0}

//.30 - .40 Power jet adjustmanet
 if(prop === 'jet' && PW >= 100000) {
  if(PWtoWT >= 0.3 && PWtoWT < 0.4) {
   speed += 500;
  } }
 if(prop === 'jet' && PW >= 200000) {
  if(PWtoWT >= 0.3 && PWtoWT < 0.4) {
   speed += 500;
  } }
//.40 - .50 power jet adjustment
if(prop === 'jet' && PW >= 100000) {
 if(PWtoWT >= 0.4 && PWtoWT < 0.5) {
   speed += 500;
 } }
if (prop === 'jet' && PW >= 200000) {
  if(PWtoWT >= 0.4 && PWtoWT < 0.5) {
    speed += 500;
  } }
//.50 - .60 Power jet adjustment
if (prop === 'jet' && PW >= 10000) {
  if(PWtoWT >= 0.5 && PWtoWT < 0.6) {
    speed += 250;
  } }
if(prop === 'jet' && PW >= 20000) {
  if(PWtoWT >= 0.5 && PWtoWT < 0.6) {
    speed += 250;
  } }
  //.60 - .70 power jet adjustment
  if(prop === 'jet' && PW >= 40000) {
   if(PWtoWT >= 0.6 && PWtoWT < 0.7) {
    speed += 200;
  } }
  if(prop === 'jet' && PW >= 60000) {
    if(PWtoWT >= 0.6 && PWtoWT < 0.7) {
      speed += 200;
  } }
  //.70 - .80 power jet adjustment
  if(prop === 'jet' && PW >= 50000) {
    if(PWtoWT >= 0.7 && PWtoWT < 0.8) {
      speed += 150;
    } }
  //.80 - .90 power jet adjustment 
  if(prop === 'jet' && PW >= 60000) {
    if(PWtoWT >= 0.8 && PWtoWT < 0.9) {
      speed += 100;
    } }
 
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