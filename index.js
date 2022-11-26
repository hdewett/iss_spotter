// index.js

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes){
  for (let flyover of passTimes) {
    let date = new Date(0);
    date.setUTCSeconds(flyover.risetime);
    let time = flyover.duration;
    console.log(`Next pass at ${time} for ${time} seconds.`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});









// const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("8.8.8.8",(error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates: ", coordinates);
// });

// fetchISSFlyOverTimes({ latitude: 37.3860517, longitude: -122.0838511 }, (error, flyover) => {
//   console.log(error);
//   console.log(flyover);
// });

