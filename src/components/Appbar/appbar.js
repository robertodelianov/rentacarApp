import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Appbar extends React.Component {
  render(){
    const { classes } = this.props;
    return(
      <Grid container className={classes.Container}>
          <Grid item xs={12} md={10} className={classes.Appbar}>
          RENT A CAR
          </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Appbar);
