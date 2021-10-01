const { response, request } = require('express');
const axios = require('axios');

const getPairsOfPlayers = async (req = request, resp = response, next) => {

  let hashTwoSum = (array, sum) => {
    let storageHash = {};
    let couples = [];

    for (let i in array) {
      let addend = sum - array[i].h_in;

      if (addend in storageHash) {
        couples.push([storageHash[addend], array[i]]);
      }
      storageHash[array[i].h_in] = array[i];
    }
    return couples;
  };
  //Implementar logica aquí
  const input = req.query.input;
  console.log(`input=${input}`);
  try {
    const response = await axios.get('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players');
    const players = response.data.values;
    const result = hashTwoSum(players, input);
    // const result = [[players[0], players[1]], [players[0], players[1]]];
    resp.send(result)
  }
  catch (err) {
    consoles.log(err)
  }
};




module.exports = { getPairsOfPlayers };

