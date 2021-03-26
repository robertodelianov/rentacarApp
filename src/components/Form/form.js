import React from 'react';
import { Container, Grid, Button, TextField, Paper, InputLabel, Select, MenuItem } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import Appbar from '../Appbar/appbar';
import Menu from '../Menu/menu';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: '', brand: '', model: '', year: '', fuelType: '', priceDay: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createCar({
      imageFile: this.state.imageFile, brand: this.state.brand, model: this.state.model, year: this.state.year, fuelType: this.state.fuelType, priceDay: this.state.priceDay,
    });
    this.setState({
      imageFile: '', brand: '', model: '', year: '', fuelType: '', priceDay: '',
    })
  }

  render(){
    const { classes } = this.props;
    return(
      <Container maxWidth='xl'>
        <Appbar />
        <Menu />
        <Grid container className={classes.Container}>
          <Grid item xs={12} md={4}>
            <Paper>
              <form className={classes.Form} onSubmit={this.handleSubmit}>
                  <TextField variant='outlined' color='secondary' label='brand' fullWidth required className={classes.FormElements} value={this.state.brand} onChange={ (e) => this.setState({ brand: e.target.value })} />
                  <TextField variant='outlined' color='secondary' label='model' fullWidth required className={classes.FormElements} value={this.state.model} onChange={ (e) => this.setState({ model: e.target.value })} />
                  <TextField variant='outlined' color='secondary' label='year' fullWidth required className={classes.FormElements} value={this.state.year} onChange={ (e) => this.setState({ year: e.target.value })} />
                  <InputLabel id='fuelType' className={classes.FormElements}>Fuel Type</InputLabel>
                  <Select labelId='fuelType' color='secondary' fullWidth required className={classes.FormElements} value={this.state.fuelType} onChange={ (e) => this.setState({ fuelType: e.target.value })} >
                  <MenuItem value='DIESEL'>DIESEL</MenuItem>
                  <MenuItem value='PETROL'>PETROL</MenuItem>
                  <MenuItem value='PETROL/GAS'>PETROL/GAS</MenuItem>
                  </Select>
                  <TextField variant='outlined' color='secondary' label='price per day' fullWidth required className={classes.FormElements} value={this.state.priceDay} onChange={ (e) => this.setState({ priceDay: e.target.value })} />
                  <p></p>
                  <FileBase64 required type='file' multiple={false} onDone={ ({base64}) => this.setState({ imageFile: base64 }) } />
                  <Button type='submit' variant='contained' fullWidth className={classes.SubmitButton}>ADD CAR</Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(Form);
