import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import Car from './Car/car';

class Cars extends React.Component {
  render(){
    const { classes } = this.props;
    return(
      <Grid container spacing={10} className={classes.Container}>
        {this.props.storage.map( (storage) =>
          <Grid item xs={12} md={5} lg={4} key={storage.model}>
          <Car storage={storage} rentCar={this.props.rentCar} />
          </Grid>)}
      </Grid>
    )
  }
}

export default withStyles(styles)(Cars);
