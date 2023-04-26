import population from "../data/dataPreviews.js"



function data(cardid){
  console.log(population[cardid].population)
  const labels = ['People'];
    return {
        labels,
        datasets: [
          {
            label: 'People detained this year',
            data: [population[cardid].population],
            backgroundColor: 'rgb(235, 106, 0)',
          },
        ],
      };
}

  export default data