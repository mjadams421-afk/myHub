//Setting variables
const Casual = document.getElementById('casual');
const Bussy = document.getElementById('bussy');
const Fast = document.getElementById('fast');

//functions
const walking = (type,speed) => {
const speedMPH = speed*1.47;
const CSpeed = speed-5;
const CSpeedMPH = CSpeed*1.47;
const BSpeed = speed-3;
const BSpeedMPH = BSpeed*1.47;
 if(type==="casual"){
return "Casual speed is: " + CSpeed + " ft/s  " + CSpeedMPH + " mph"} 
else if(type==="bussy"){
return "Bussy speed is: " + BSpeed + " ft/s  " + BSpeedMPH + " mph"}
else if(type==="fast"){
return "Fast speed is: " + speed + " ft/s  " + speedMPH + " mph"
} else {return `${type} speed is: ${speed} ft/s  ${speedMPH} mph` }
}

//Setting Interaction
const CasualS = walking("casual",8);
const BussyS = walking("bussy",8);
const FastS = walking("fast",8);

function DisCasual() {
 Casual.innerHTML = CasualS;
}
function DisBussy() {
 Bussy.innerHTML = BussyS;
}
function DusFast() {
 Fast.innerHTML = FastS;
}

Casual.addEventListener('mousedown',DisCasual);
Bussy.addEventListener('mousedown',DisBussy);
Fast.addEventListener('mousedown',DisFast);