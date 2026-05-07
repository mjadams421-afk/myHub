//Road Width and depth
console.log('Road Width, Depth & Speeds:=============>');

//Width and Depth calculations
const width = (W) => {
 if (W > 20) { return `Road ${W}ft is wide enough`} else { return `Road ${W}ft is too narrow`}
};
const depth = (D) => {
 if (D >= 2) { return `, Road ${D}ft is deep enough`} else if (D > 1 && D < 2) { return `, Road ${D}ft may not be deep enough`} else {return `, Road ${D}ft is not deep enough`}
};



//Speed Calulations design speeds for an array of posted speeds
 const NYmph= [25,30,40,55,65];
 //Speeds to add
 const Speeds = (A,B,C) => {
  NYmph.push(A,B,C);
  NYmph.sort();
  const High = NYmph.filter(y => {return y >= 55});
  const Street = NYmph.filter(z => {return z < 55});
  const SDes = Street.map(s => {return s+5 });
  const HDes = High.map(h => {return h+7});
  const result = 'Posted MPH speeds: ' + NYmph + ' | Street design speeds: '+ SDes + ' | Highway design speeds: '+ HDes;
  console.log(result);
  return result;
 };
//Accident chance 
//Target hit at 1
const C = 1;
//Random Generator N% chance at T iterations to equal C number
const Per = (N,T) => {  
  for (let x = 0; x < T; x++) {
    let Rand = Math.floor(Math.random() * N);
    if (Rand === C) {
      return `There was an accident at ${x} months` + ' | ' + `Probability of a crash is 1 in ${N} for ${T} months`;
    } else { 
      return `No accident at ${T} months` + ' | ' + `Probability of a crash is 1 in ${N} for ${T} months`}
    }
};



//propertues of the road
 /*
 console.log('Road Properties:=============>')
  const RoadA={
   _type: 'Concrete',
   _length: 15,
   _grade: 10,
   _terrain: 'rolling',
   _LOS: 'C', 
   _speed: 40,
   _median: 50,
   //Testing design criteria
   get Type() {
   if(RoadA._type === 'Asphalt') {
   return this._type + ': temperate climate'
   } else if(RoadA._type === 'Concrete') {
   return this._type + ': hot/humid climate'
   } else {return 'Enter a valid type'}
   },
   get Length() {
   if(RoadA._length >= 10) {
   return this._length + 'miles :is a long project expect major delays over a year'
   } else if (RoadA._length < 10 && RoadA._length >= 4) {
   return this._length + 'miles :is a medium length project expect delays for about a year'} else {return this._length + 'miles: is a short length project expect completion within a year'}
   },
   get Terrain() {
   if (RoadA._grade <= 6 && RoadA._terrain === 'rolling') {
   return this._grade + '% is acceptable, refer to ' + this._speed + 'mph for details. Also check Sight distance' 
   } else if (RoadA._grade <= 8 && RoadA._terrain === 'mountainous') {return this._grade + '% is acceptable, refer to ' + this._speed + 'mph for details. Also critically check sight distance b/c mountainous terrain'}
   else if (RoadA._grade <= 4 && RoadA._terrain === 'level') {return this._grade + '% is acceptable, refer to ' + this._speed + 'mph for details.'} else {return this._speed + 'mph ,' + this._grade + '% and' + this._terrain + ' needs to be checked again'}
   },
   get Safe() {
   if(RoadA._LOS === 'A' && RoadA._median <= 50) {return 'This speed ' + this._speed + 'mph is safe'} else if (RoadA._LOS === 'B' && RoadA._median <= 50) {return 'This speed ' + this._speed + 'mph is somewhat safe. Check median barriers, shoulder widths and clearence widths'} else if(RoadA._LOS === 'C' && RoadA._median <= 50) {return 'This speed ' + this._speed + 'mph is somewhat unsafe. Check median barriers, shoulder widths, clearence widths, if roadway departure is greater than 15deg, terminal types and rail types'} else if (RoadA.median > 50) {return 'This speed ' + this._speed + 'mph is safe' } else {return this._speed + 'mph and ' + this._median + 'ft median is unsafe. Check over all design criteria and details of design'}
   }
   }
  //output
  const Sa = RoadA.Safe;
  console.log(Sa);
  const Te = RoadA.Terrain;
  console.log(Te);
  const Tp = RoadA.Type;
  console.log(Tp);
  const L = RoadA.Length;
  console.log(L);
  */


  //input/output for width and depth
  const D = depth(1);
  const W = width(22);
  const volume = W + D;
  //Speeds Calcs Add 3 if needed
  const S = Speeds(15,70,75);
  //Probability of a crash
  const P1 = Per(5,20);
  const P2 = Per(10,20);
  const P3 = Per(15,20);
 
  
  //html DOM 
  //Width & depth output
  document.getElementById('volume').innerHTML = 
  'Parameters are: ' + volume;

  //Speeds output
 document.getElementById('speeds').innerHTML = S;

  //Probability of a crash output
 const runScenarioA = document.getElementById('statisticsA')
 function runA() {
  runScenarioA.innerHTML = P1;
 }
 runScenarioA.addEventListener('mousedown', runA);

 const runScenarioB = document.getElementById('statisticsB')
 function runB() {
  runScenarioB.innerHTML = P2;
 }
 runScenarioB.addEventListener('mousedown', runB);

 const runScenarioC = document.getElementById('statisticsC')
 function runC() {
  runScenarioC.innerHTML = P;
 }
 runScenarioC.addEventListener('mousedown', runC);


