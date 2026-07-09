//Plane Games

const buttonA = document.getElementById('buttonA')
const returnA = document.getElementById('returnA')

function PTravel() {
 const prop = window.prompt('Type in piston or jet')
 const WT = window.prompt('Type in aircraft weight in lbs')
 const T = window.prompt('Enter year built')
 let rangeA = '';
 let rangeB = '';
 if(prop === 'piston' || prop === 'jet') { 
  if(WT > 100000 && prop === 'piston'){ rangeA += 2000 } else if (WT >= 10000 && prop === 'piston') { range += 1500} 
 else if (WT < 10000 && prop === 'piston') { rangeA += 1000 } 
 else if( WT > 100000 && prop === 'jet'){ rangeA += 1700}
 else if(WT >= 10000 && prop === 'jet'){ rangeA += 1300 }
 else if(WT < 10000 && prop === 'jet'){ rangeA += 800}
  else {rangeA += 0}
 } else {rangeA += 'Enter correct values of Type and or Weight'}
 if ( T > 1980 ) { rangeB += 1000 }
 else if (T >= 1950 && T <= 1980) {
 rangeB += 500
 } else if (T >= 1935 && T < 1950) {
  rangeB += 250
 } else if (T > 1920 && T < 1935) {
  rangeB += 100
 } else if (T < 1920) {
  rangeB += 0
 } else {rangeB += 'Enter correct date'}
 let range = rangeA+rangeB;
 returnA.innerHTML = range +'miles';
}

buttonA.addEventListener('mousedown',PTravel)