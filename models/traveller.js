const Journey = require("./journey");

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) =>{
    return journey.transport === transport;
  });

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((acc, journey) =>{
    return acc += journey.distance;
  },0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let uniqueModes = [];
  this.journeys.forEach((journey) => {
    if (uniqueModes.indexOf(journey.transport) === -1) {
      uniqueModes.push(journey.transport);
    }
  });
  return uniqueModes;
}



module.exports = Traveller;
