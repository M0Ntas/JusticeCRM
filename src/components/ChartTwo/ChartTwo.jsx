import * as React from 'react';
import Paper from '@material-ui/core/Paper';

import {
  Chart,
  LineSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { confidence as dataViz } from './dataVizualization';
import { useState } from "react";
import './style.scss'
import { withStyles } from "@material-ui/core/styles";

const ChartTwo = ({classes}) => {

  const titleStyles = {
    title: {
      whiteSpace: 'pre',
    },
  };
  const TitleText = withStyles(titleStyles)(({classes, ...props}) => (
    <Title.Text {...props} className={classes.title}/>
  ));


  const [data, setData] = useState(dataViz)

  return (
    <Paper>
      <Chart
        data={data}
        className={classes}
        height={'455'}
        width={"220"}
      >
        <LineSeries
          height={'455'}
          width={"220"}
          name="TV news"
          valueField="tvNews"
          argumentField="year"
        />
        <Title
          text={`Total earned`}
          textComponent={TitleText}
        />
        <Animation/>
      </Chart>
    </Paper>
  );
}

export default ChartTwo;