import React from 'react';
import { Container, Grid, Card, Typography, CardMedia, Paper, Button, Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import Appbar from '../Appbar/appbar';
import Menu from '../Menu/menu';

class Rent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      days: '',months: '', year: 2021, daysUNTIL: '', monthsUNTIL: '', totalCost: [0], dateFROM: [0], dateUNTIL: [0],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.pushInMarket({
      imageFile: this.props.rentInfo.imageFile, brand: this.props.rentInfo.brand, model: this.props.rentInfo.model, year: this.props.rentInfo.year, fuelType: this.props.rentInfo.fuelType, priceDay: this.props.rentInfo.priceDay, totalCost: this.state.totalCost, dateFROM: this.state.dateFROM, dateUNTIL: this.state.dateUNTIL,
    },this.props.rentInfo.model)
  }

  render(){
    const { classes } = this.props;
    const months = [];
    const days = [];
    const daysUNTIL = [];

    switch (this.state.months) {
      case 2: days.length = 0;
              for(let i=1; i<=28; i++){
              days.push(i);
              }
        break;
      case 6:
      case 9:
      case 11:
      case 4: days.length = 0;
              for(let i=1; i<=30; i++){
              days.push(i);
              }
        break;
      default: for(let i=1; i<=31; i++){
               days.push(i);
      }
    };

    switch (this.state.monthsUNTIL) {
      case 2: daysUNTIL.length = 0;
              for(let i=1; i<=28; i++){
              daysUNTIL.push(i);
              }
        break;
      case 6:
      case 9:
      case 11:
      case 4: daysUNTIL.length = 0;
              for(let i=1; i<=30; i++){
              daysUNTIL.push(i);
              }
        break;
      default: for(let i=1; i<=31; i++){
               daysUNTIL.push(i);
      }
    };

    for(let i=1; i<=12; i++){
      months.push(i);
    };

    const dateFROM = new Date(`${this.state.months}/${this.state.days}/${this.state.year}`);
    this.state.dateFROM.splice(0,1,dateFROM);
    const dateUNTIL = new Date(`${this.state.monthsUNTIL}/${this.state.daysUNTIL}/${this.state.year}`);
    this.state.dateUNTIL.splice(0,1,dateUNTIL);
    const differenceInTime = dateUNTIL.getTime() - dateFROM.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const totalCost = this.state.totalCost.splice(0,1,this.props.rentInfo.priceDay * differenceInDays);
    return(
      <Container maxWidth='xl'>
          <Appbar />
          <Menu />
      <Grid container spacing={3} className={classes.GridContainer}>
        <Grid item xs={12} lg={4}>
          <Card className={classes.Container}>
            <CardMedia image={this.props.rentInfo.imageFile} className={classes.Image} />
            <Paper><Typography className={classes.Constants}>BRAND: </Typography> <span className={classes.Specs}>{this.props.rentInfo.brand}</span></Paper>
            <Paper><Typography className={classes.Constants}>MODEL: </Typography> <span className={classes.Specs}>{this.props.rentInfo.model}</span></Paper>
            <Paper><Typography className={classes.Constants}>YEAR: </Typography> <span className={classes.Specs}>{this.props.rentInfo.year}</span></Paper>
            <Paper><Typography className={classes.Constants}>FUEL: </Typography> <span className={classes.Specs}>{this.props.rentInfo.fuelType}</span></Paper>
            <Paper><Typography className={classes.Constants}>PRICE / Day: </Typography> <span className={classes.Specs}>$ {this.props.rentInfo.priceDay}</span></Paper>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className={classes.Container}>
            <form className={classes.Form} onSubmit={this.handleSubmit}>
                <Typography style={{ fontSize: '20px', letterSpacing: '2px'}}><b>FROM</b></Typography>
                Day<Select required onChange={ (e) => this.setState({ days: e.target.value })}>
                  { days.map( (info) => <MenuItem value={info}>{info}</MenuItem>)}
                </Select>
                Month<Select required onChange={ (e) => this.setState({ months: e.target.value })}>
                  { months.map( (info) => <MenuItem value={info}>{info}</MenuItem>)}
                </Select>
                Year<Select required>
                  <MenuItem value={this.state.year}>{this.state.year}</MenuItem>
                </Select>
                <Typography style={{ fontSize: '20px', letterSpacing: '2px'}}><b>UNTIL</b></Typography>
                Day<Select required onChange={ (e) => this.setState({ daysUNTIL: e.target.value })}>
                  { daysUNTIL.map( (info) => <MenuItem value={info}>{info}</MenuItem>)}
                </Select>
                Month<Select required onChange={ (e) => this.setState({ monthsUNTIL: e.target.value })}>
                  { months.map( (info) => <MenuItem value={info}>{info}</MenuItem>)}
                </Select>
                Year<Select required labelId='Day'>
                  <MenuItem value={this.state.year}>{this.state.year}</MenuItem>
                </Select>
                <Typography><span style={{ fontSize: '20px', fontWeight: 'bold'}}>TOTAL COST: </span>$ <span style={{ fontSize: '30px'}}>{ isNaN(differenceInDays) ? 0 : this.state.totalCost[0].toFixed(2) }</span><span style={{fontSize: '10px'}}>per day</span></Typography>
                <Button type='submit' variant='contained' color='secondary' fullWidth className={classes.RentButton} >CONFIRM RENT</Button>
            </form>
          </Card>
        </Grid>
      </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(Rent);
