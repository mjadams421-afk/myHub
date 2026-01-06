  //Speed from fts to mph

  //mph
  let vMPH = [20,30,40,55,60];

  //fts
  let vFTS = [];

  for (let i = 0; i < vMPH.length; i++) {
   vFTS.push(vMPH[i] * 1.47);
   console.log(`for ${vMPH[i]} mph, the speed in fts is ${vFTS[i]}`);
  }