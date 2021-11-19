import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts-gantt';
import HighchartMore from 'highcharts/highcharts-more';
import isEqual from 'lodash/isEqual';
import moment from 'moment';

HighchartMore(Highcharts);

const LineChart = ({model, modelUpdate, triggerQuery}) => {
  const chartRef = useRef(null);
  const [series, setSeries] = useState({ data: []});
  const [chartOptions, setChartOptions] = useState({
    chart: { height: 500 },
    credits: {
      enabled: false
    },
    allowPointSelect: false,
    series,
    yAxis: {
      uniqueNames: true,
    },
    tooltip: {},
  });

  useEffect(()=>{
    if (!isEqual(model.series)) {
      setSeries(model.series)
    }
  },[model])

  useEffect(()=>{
    setChartOptions({
      series,
      chart: {
        height: document.body.clientHeight
      }
    })
  },[series])

  useLayoutEffect(() => {
    setChartOptions({
      chart: {
        height: document.body.clientHeight
      }
    });
  },[]);
  return (
    <>
      <HighchartsReact
        allowChartUpdate = { true }
        immutable = { false }
        updateArgs = { [true, true, false] }
        constructorType="ganttChart"
        highcharts={Highcharts}
        options={chartOptions}
        ref={chartRef}
      />
    </>
  );
};

export default LineChart;