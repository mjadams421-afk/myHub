//Setting variables
const Casual = document.getElementById('casual');
const Bussy = document.getElementById('bussy');
const Fast = document.getElementById('fast');
const Reset = document.getElementById('reset');
const Car = document.getElementById('car');
const Truck = document.getElementById('truck');
const Motorcycle = document.getElementById('motorcycle');
const Age1 = document.getElementById('age1');
const Age2 = document.getElementById('age2');
const Age3 = document.getElementById('age3');
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

const DrivingType = (type) => {
  const M1 = 5000
  const KE1 = .5*M1*9216
  const M2 = 3000
  const KE2 = .5*M2*9216
  const M3 = 500
  const KE3 = .5*M3*9216
 if(type === "car") {
  return type + " is used average weight is " + M2 + "lb and Kinetic energy is " + KE2 + "ft-lb/sec"
  } 
  else if(type === "truck") {
  return type + " is used average weight is " + M1 + "lb and Kinteic energy is " + KE1 + "ft-lb/sec"
 } else if(type === "motorcycle") {
  return type + " is used average weight is " + M3 + "lb and Kinetic energy is " + KE3 + "ft-lb/sec"
 } else {
  return type + " is not in records"
 }
}
const DrivingParam = (age) => {
 const ageDiff = age-65;
 if(age >= 65) {
 return "For age " + age + " and difference " + ageDiff + " the design speed of a posted 65 mph would be 65 mph and 96 fps"
 } else if(age < 65) {
 return "For age " + age + " and difference " + ageDiff + " the design speed of a posted 65 mph would be 73 mph and 107 fps"
 } else {
 return "Enter valid age"
 }
}





//Setting Interaction
const CasualS = walking("casual",8);
const BussyS = walking("bussy",8);
const FastS = walking("fast",8);
const CarS = DrivingType("car");
const TruckS = DrivingType("truck");
const MotorcycleS = DrivingType("motorcycle");
const Age1S = DrivingParam(60);
const Age2S = DrivingParam(65);
const Age3S = DrivingParam(70);


function DisCasual() {
 Casual.innerHTML = CasualS;
}
function DisBussy() {
 Bussy.innerHTML = BussyS;
}
function DisFast() {
 Fast.innerHTML = FastS;
}
function DisCar() {
 Car.innerHTML = CarS;
}
function DisTruck() {
 Truck.innerHTML = TruckS;
}
function DisMotorcycle() {
 Motorcycle.innerHTML = MotorcycleS;
}
function DisAge1() {
 Age1.innerHTML = Age1S;
}
function DisAge2() {
 Age2.innerHTML = Age2S;
}
function DisAge3() {
 Age3.innerHTML = Age3S;
}
function DisReset() {
 Casual.innerHTML = "Casual";
 Bussy.innerHTML = "Bussy";
 Fast.innerHTML = "Fast";
 Car.innerHTML = "Car";
 Truck.innerHTML = "Truck";
 Motorcycle.innerHTML = "Motorcycle";
 Age1.innerHTML = "60";
 Age2.innerHTML = "65";
 Age3.innerHTML = "70";
}

//Adding Event Listeners
Casual.addEventListener('mousedown',DisCasual);
Bussy.addEventListener('mousedown',DisBussy);
Fast.addEventListener('mousedown',DisFast);
Car.addEventListener('mousedown',DisCar);
Truck.addEventListener('mousedown',DisTruck);
Motorcycle.addEventListener('mousedown',DisMotorcycle);
Age1.addEventListener('mousedown',DisAge1);
Age2.addEventListener('mousedown',DisAge2);
Age3.addEventListener('mousedown',DisAge3);
Reset.addEventListener('mousedown',DisReset);
