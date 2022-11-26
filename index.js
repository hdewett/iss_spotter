const { fetchCoordsByIP } = require('./iss');

// const ip = fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
//   return ip;
// });

fetchCoordsByIP("8.8.8.8",(error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned coordinates: ", coordinates);
});

