const axios = require("axios");

const options = {
  method: "GET",
  url: "https://api-football-v1.p.rapidapi.com/v3/timezone",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
