const transform = require("jsonpath-object-transform");
const baseItinerary = require("./baseItinerary");

const template = {
  id: "$.id",
  noOfNights: "$.noOfNights",
  name: "$.name.title.english",
  cities: [
    "$.cities",
    {
      id: "$.id",
      name: "$.place.name",
      noOfNights: "$.noOfNights",
      services: [
        "$.services",
        {
          id: "$.id",
          name: "$.service.name",
          tsId: "$.service.tsId",
          serviceId: "$.service.id",
          option: "$.option",
          type: "$.serviceType.name",
          rooms: "$.rooms"
        }
      ]
    }
  ]
};

console.log(JSON.stringify(transform(baseItinerary, template), null, 2));
