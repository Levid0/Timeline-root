import population from "../data/dataPreviews.js"



function data(cardid){
  const labels = [ 'Cost'];
    return {
        labels,
        datasets: [ 
          {
            label: 'Cost',
            data: [population[cardid].cost],
            backgroundColor: 'rgb(0, 182, 46)',
          }
        ],
      };
}

  export default data