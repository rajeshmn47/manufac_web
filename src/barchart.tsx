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
        name: 'alchohal vs molic acid',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <>
    <h1 style={{textAlign:'center'}}>bar chart</h1>
    <h1 style={{textAlign:'center',color:'red'}}>Alchohal vs Malic acid</h1>
  <ReactEcharts option={options} />;
  </>)
};

export default Barchart;