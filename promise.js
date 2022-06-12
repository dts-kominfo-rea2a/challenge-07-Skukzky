const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  try{
    let sumEmotion = 0
    let dataIXX = await promiseTheaterIXX();
    let dataVGC = await promiseTheaterVGC();
    const data = dataIXX.concat(dataVGC);

    data.map(dataFilm => dataFilm.hasil === emotion && (sumEmotion += 1))
    return sumEmotion;
  } catch (err) {
    return err
  }
}

module.exports = {
  promiseOutput,
};
