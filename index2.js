const {nextISSTimesForMyLocation} = require('./iss_promised')

const printPassTimes = function(passTimes){
  for (let flyover of passTimes) {
    let date = new Date(0);
    date.setUTCSeconds(flyover.risetime);
    let time = flyover.duration;
    console.log(`Next pass at ${time} for ${time} seconds.`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });