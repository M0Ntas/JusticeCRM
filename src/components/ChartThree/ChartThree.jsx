import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import './style.scss'
import { useState } from "react";


const ChartThree = () => {

  const [data, setData] = useState([
    {day: 'Mon', sales: 500000},
    {day: 'Tue', sales: 150000},
    {day: 'Wed', sales: 250000},
    {day: 'Thu', sales: 70000},
    {day: 'Fri', sales: 160000},
    {day: 'Sat', sales: 600000},
    {day: 'Sun', sales: 400000},
  ])

  return (
    <Paper>
      <Chart
        data={data}
        height={'569'}
      >
        <ArgumentAxis/>
        <ValueAxis max={7}/>

        <BarSeries
          valueField="sales"
          argumentField="day"
        />
        <Title
          text="Sales Overview"
        />
        <Animation/>
      </Chart>
    </Paper>
  );

}

export default ChartThree;
