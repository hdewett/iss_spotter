
const request = require("request");

// const fetchMyIP = function(callback) {
//   request("https://api.ipify.org/?format=json", function(error, response, body) {
//     // error can be set if invalid domain, user is offline, etc.
//     if (error) {
//       callback(error, null);
//       return;
//     }
//     // if non-200 status, assume server error
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     let ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, function(error, response, body) {

    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }

    //converting string into object
    const parsedBody = JSON.parse(body);

    console.log("parsedBody.success:  ",parsedBody.success);

    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    } 

    const { latitude, longitude } = parsedBody;

    callback(null, {latitude, longitude});

  });
}


module.exports = { fetchCoordsByIP };