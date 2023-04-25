import population from "../data/dataPreviews.js"



function data(cardid){
  console.log(population[cardid].population)
  const labels = ['People'];
    return {
        labels,
        datasets: [
          {
            label: 'Pop',
            data: [population[cardid].population],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
}

  export default data