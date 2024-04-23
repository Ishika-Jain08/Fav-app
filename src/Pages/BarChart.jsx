import React from 'react';
import Chart from 'react-apexcharts';

function BarChart(){

  return(
 <>
  <div className='graph'>


    <Chart
    type="bar"
    width={280}
    height={290}

    series={[
      {
        name:"Tracking Hours",
        data:[1,2,3,4,5,6]
      }
    ]}

    options={{

     title:{text:"Tracking Hours",
     style:{
      fontSize:15
     }},
    //  subtitle:{text:""},

    //  colors:['blue']
    theme:{mode:'light'},

    xaxis:{
      categories:["M","T","W","T","F","S"],
      title:{text:"Working Hours" ,
      style:{fontSize:20,fontWeight:900}
    }
    },

    yaxis:{
      labels:{
        formatter:(val)=>{return `$${val}`},
        style:{fontSize:14}
      },
        // title:{text:"Working Hours"}
    },

    legend:{
      show:true,
      position:'bottom'
    },

    dataLabels:{
      formatter:(val)=>{return `$${val}`}
    }
      
    }}
   
    >

    </Chart>

  </div>
 </>
  );
}

export default BarChart;


