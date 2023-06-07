const fetch = require('node-fetch');
const API_KEY = '44D9A6F4-5C07-47B8-9F63-75977C7D713E';

const busStopController = {};

// respond to client request for bus stop info and send back relevant information
busStopController.getStopInfo = (req, res, next) => {
  const stop = req.params.stop;
  fetch(`http://api.thebus.org/arrivalsJSON/?key=${API_key}&stop=${stop}`)
  .then(response => {
    res.locals.stopInfo = response;
    return next();
  })
  .catch(error => {

  })
}

module.exports = busStopController;