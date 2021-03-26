import React from 'react';
import { Card, Typography, CardMedia, Paper, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles.js';

class Customer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time_left_start: 0,
      time_left_end: 0,
    }
    setInterval(() => {
      const dateobj = new Date();
      const timeLeft = new Date (this.props.marketStorage.dateFROM[0] - dateobj);
      let months = timeLeft.getUTCMonth();
      let days = timeLeft.getUTCDate();
      let hours = timeLeft.getUTCHours();
      let minutes = timeLeft.getUTCMinutes();
      let seconds = timeLeft.getUTCSeconds();
      const time_left_start = months + ' month and ' + days + ' days ' + ' CLOCK ' + hours + ':' + minutes + ':' + seconds;
      this.setState({ time_left_start: time_left_start })}, 1000);

      setInterval(() => {
        const timeLeft = new Date (this.props.marketStorage.dateUNTIL[0] - this.props.marketStorage.dateFROM[0]);
        let months = timeLeft.getUTCMonth();
        let days = timeLeft.getUTCDate();
        const time_left_start = months + ' month and ' + days + ' days ';
        this.setState({ time_left_end: time_left_start })}, 1000)
  }

  handleDelete = () => {
    this.props.createCar({
      imageFile: this.props.marketStorage.imageFile, brand: this.props.marketStorage.brand, model: this.props.marketStorage.model, year: this.props.marketStorage.year, fuelType: this.props.marketStorage.fuelType, priceDay: this.props.marketStorage.priceDay,
    })
    this.props.deleteFromMarket(this.props.marketStorage.model);
  }

  render(){
    const { classes } = this.props;
    const totalCost = this.props.marketStorage.totalCost[0];
    return(
      <Card className={classes.Card}>
          <CardMedia image={this.props.marketStorage.imageFile} className={classes.Image} />
          <Paper><Typography className={classes.Constants}>BRAND </Typography> <span className={classes.Specs}>{this.props.marketStorage.brand}</span></Paper>
          <Paper><Typography className={classes.Constants}>MODEL </Typography> <span className={classes.Specs}>{this.props.marketStorage.model}</span></Paper>
          <Paper><Typography className={classes.Constants}>YEAR </Typography> <span className={classes.Specs}>{this.props.marketStorage.year}</span></Paper>
          <Paper><Typography className={classes.Constants}>FUEL </Typography> <span className={classes.Specs}>{this.props.marketStorage.fuelType}</span></Paper>
          <Paper><Typography className={classes.Constants}>TOTAL COST </Typography> <span className={classes.Specs}>$ {totalCost.toFixed(2)}</span></Paper>
          <Paper><Typography className={classes.Constants}>TO START RENTING PERIOD</Typography> <span className={classes.Specs}>{this.state.time_left_start}</span></Paper>
          <Paper><Typography className={classes.Constants}>TO END RENTING PERIOD</Typography> <span className={classes.Specs}>{this.state.time_left_end}</span></Paper>
          <Button variant='contained' color='secondary' className={classes.DeleteButton} onClick={this.handleDelete}><DeleteIcon fontSize='large' /></Button>
      </Card>
    )
  }
}

export default withStyles(styles)(Customer);
