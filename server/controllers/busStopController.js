// const fetch = require('node-fetch');
const API_KEY = '44D9A6F4-5C07-47B8-9F63-75977C7D713E';

const busStopController = {};

// respond to client request for bus stop info and send back relevant information
busStopController.getStopInfo = (req, res, next) => {
  console.log('GETTING STOP INFO IN busStopController.js')
  // const stopNum = document.getElementById('stopNum').value;
  const { stopNum } = req.params
  console.log(`busStopController running! stopNum = ${stopNum}`)
  fetch(`http://api.thebus.org/arrivalsJSON/?key=${API_KEY}&stop=${stopNum}`)
    .then(response => response.json())
    .then(response => {
    res.locals.stopInfo = response;
    return next();
    })
    .catch(error => {
      return next({err: 'Error getting stop info in busStopController.js'})
  })
}

module.exports = busStopController;