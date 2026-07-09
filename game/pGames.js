//Plane Games

const buttonA = document.getElementById('buttonA')
const returnA = document.getElementById('returnA')

function PTravel() {
 const prop = window.prompt('Type in piston or jet')
 const WT = window.prompt('Type in aircraft weight in lbs')
 const T = window.prompt('Enter year built')
 let range = '';
 if(prop === 'piston' || prop === 'jet') { 
  if(WT > 100000 && prop === 'piston'){ range += 2000 } else if (WT >= 10000 && prop === 'piston') { range += 1500} 
 else if (WT < 10000 && prop === 'piston') { range += 1000 } 
 else if( WT > 100000 && prop === 'jet'){ range += 1700}
 else if(WT >= 10000 && prop === 'jet'){ range += 1300 }
 else if(WT < 10000 && prop === 'jet'){ range += 800}
  else {range += 0}
 } else {range += 'Enter correct values of Type and or Weight'}
 if ( T > 1980 ) { range += 1000 }
 else if (T >= 1950 && T <= 1980) {
 range += 500
 } else if (T >= 1935 && T < 1950) {
  range += 250
 } else if (T > 1920 && T < 1935) {
  range += 100
 } else if (T < 1920) {
  range += 0
 } else {range += 'Enter correct date'}
 returnA.innerHTML = range +'miles';
}

buttonA.addEventListener('mousedown',PTravel)