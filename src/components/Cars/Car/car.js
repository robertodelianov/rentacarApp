import React from 'react';
import { Card, Typography, CardMedia, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Car extends React.Component {

  handleRent = () => {
    this.props.rentCar({
      imageFile: this.props.storage.imageFile, brand: this.props.storage.brand, model: this.props.storage.model, year: this.props.storage.year, fuelType: this.props.storage.fuelType, priceDay: this.props.storage.priceDay,
    })
  }

  render(){
    const { classes } = this.props;
    return(
      <Card className={classes.Container}>
        <CardMedia image={this.props.storage.imageFile} className={classes.Image} />
        <Paper><Typography className={classes.Constants}>BRAND: </Typography> <span className={classes.Specs}>{this.props.storage.brand}</span></Paper>
        <Paper><Typography className={classes.Constants}>MODEL: </Typography> <span className={classes.Specs}>{this.props.storage.model}</span></Paper>
        <Paper><Typography className={classes.Constants}>YEAR: </Typography> <span className={classes.Specs}>{this.props.storage.year}</span></Paper>
        <Paper><Typography className={classes.Constants}>FUEL: </Typography> <span className={classes.Specs}>{this.props.storage.fuelType}</span></Paper>
        <Paper><Typography className={classes.Constants}>PRICE / Day: </Typography> <span className={classes.Specs}>$ {this.props.storage.priceDay}</span></Paper>
        <Link to='/app/rent'>
          <Button variant='contained' color='secondary' fullWidth className={classes.RentButton} onClick={this.handleRent}>RENT</Button>
        </Link>
      </Card>
    )
  }
}

export default withStyles(styles)(Car);
