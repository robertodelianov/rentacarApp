import React from 'react';
import { Container, Grid, CircularProgress } from '@material-ui/core';

import Appbar from '../Appbar/appbar';
import Menu from '../Menu/menu';

import Customer from './Customer/customer';

class Market extends React.Component {
  render(){
    return(
      <Container maxWidth='xl'>
          <Appbar />
          <Menu />
          <Grid container>
              {this.props.marketStorage.length >0 ? this.props.marketStorage.map( (marketStorage) =>
                <Grid item xs={12} key={marketStorage.model}>
                    <Customer marketStorage={marketStorage} createCar={this.props.createCar} deleteFromMarket={this.props.deleteFromMarket} />
                </Grid>
              ) : <CircularProgress color='secondary' size='30rem' style={{ marginTop: '100px' }} /> }
          </Grid>
      </Container>
    )
  }
}

export default Market;
