//Plane Games

const buttonA = document.getElementById('buttonA')
const returnA = document.getElementById('returnA')

function PTravel() {
 const prop = window.prompt('Type in piston or jet')
 const WT = Number(window.prompt('Type in aircraft weight in lbs'))
 const T = Number(window.prompt('Enter year built'))
 let rangeA = 0;
 let rangeB = 0;
 if(prop === 'piston' || prop === 'jet') { 
  if(WT > 100000 && prop === 'piston'){ rangeA += 2000 } else if (WT >= 10000 && prop === 'piston') { rangeA += 1500} 
 else if (WT < 10000 && prop === 'piston') { rangeA += 1000 } 
 else if( WT > 100000 && prop === 'jet'){ rangeA += 1700}
 else if(WT >= 10000 && prop === 'jet'){ rangeA += 1300 }
 else if(WT < 10000 && prop === 'jet'){ rangeA += 800}
  else {rangeA += 0}
 } else {rangeA = 'Enter correct values of Type and or Weight'}
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
 returnA.innerHTML = range +' miles distance';
}

buttonA.addEventListener('mousedown',PTravel)