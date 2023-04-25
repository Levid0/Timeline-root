import population from "../data/dataPreviews.js"



function data(cardid){
  const labels = [ 'Cost'];
    return {
        labels,
        datasets: [ 
          {
            label: 'Cost',
            data: [population[cardid].cost],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          }
        ],
      };
}

  export default data