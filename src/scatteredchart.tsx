import React from 'react';
import ReactEcharts from 'echarts-for-react';
import data from './data'

const Scatterredchart: React.FC = () => {
 
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: data.filter((d,index)=>(index===10)||
      (index%14===10)),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.filter((d,index)=>(index===11)||
        (index%14===11)),
        type: 'scatter',
        name: 'alchohal vs molic acid',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (<>
     <h1 style={{textAlign:'center'}}>Scatter plot</h1>
     <h1 style={{textAlign:'center',color:'red'}}>Color Intensity vs Hue</h1>
  <ReactEcharts option={options} />
  </>
  );
};

export default Scatterredchart;