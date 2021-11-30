import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  Legend,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { useState } from "react";
import './style.scss'
import { withStyles } from "@material-ui/core/styles";

const ChartOne = () => {

  const [data, setData] = useState([
    {goods: 'Auto1', area: 1},
    {goods: 'Auto2', area: 1},
    {goods: 'Auto3', area: 2.5},
    {goods: 'Auto4', area: 1},
  ])

  const legendStyles = () => ({
    root: {
      display: 'flex',
      margin: 'auto',
      flexDirection: 'column',
    },
  });

  const legendLabelStyles = theme => ({
    label: {
      paddingTop: theme.spacing(1),
      whiteSpace: 'nowrap',
    },
  });

  const legendItemStyles = () => ({
    item: {
      flexDirection: 'column',
    },
  });

  const legendRootBase = ({classes, ...restProps}) => (
    <Legend.Root {...restProps} className={classes.root}/>
  );

  const legendLabelBase = ({classes, ...restProps}) => (
    <Legend.Label className={classes.label} {...restProps} />
  );
  const legendItemBase = ({classes, ...restProps}) => (
    <Legend.Item className={classes.item} {...restProps}  />
  );
  const Root = withStyles(legendStyles, {name: 'LegendRoot'})(legendRootBase);
  const Label = withStyles(legendLabelStyles, {name: 'LegendLabel'})(legendLabelBase);
  const Item = withStyles(legendItemStyles, {name: 'LegendItem'})(legendItemBase);

  return (
    <div className='chart-one'>
      <Paper
        className='paper-all'
        height={"325"}>
        <Chart
          className='chart-test'
          data={data}
          height={'325px'}
        >
          <PieSeries
            valueField="area"
            argumentField="goods"
            height={'200px'}
          />
          <Legend
            position="right"
            rootComponent={Root}
            itemComponent={Item}
            labelComponent={Label}
          />
          <Title
            text="Sales schedule by day"
            text-align={'left'}
          />
          <Animation/>
        </Chart>
      </Paper>
    </div>

  );
}
export default ChartOne;

