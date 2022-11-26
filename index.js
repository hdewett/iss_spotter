const { fetchISSFlyOverTimes } = require('./iss');

// const ip = fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
//   return ip;
// });

// fetchCoordsByIP("8.8.8.8",(error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates: ", coordinates);
// });

fetchISSFlyOverTimes({ latitude: 37.3860517, longitude: -122.0838511 }, (error, flyover) => {
  console.log(error);
  console.log(flyover);
});

