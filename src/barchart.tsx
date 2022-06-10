import React from 'react';
import ReactEcharts from 'echarts-for-react';
import data from './data'

const Barchart: React.FC = () => {

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: data.filter((d,index)=>(index===0)||
      (index%14===0)),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.filter((d,index)=>(index===1)||
        (index%14===1)),
        type: 'bar',
        name: 'Alchohal vs Molic Acid',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <>
    <h1 style={{textAlign:'center'}}>Bar Chart</h1>
    <h1 style={{textAlign:'center',color:'red'}}>Alchohal (x-axis) vs Malic acid (y-axis)</h1>
  <ReactEcharts option={options} />;
  </>)
};

export default Barchart;