import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import App from './App';
import Form from './components/Form/form';
import Rent from './components/Rent/rent';
import Market from './components/Market/market';

class RouteredApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      storage: [{ imageFile: 'https://frankfurt.apollo.olxcdn.com/v1/files/wtea878dvlli1-BG/image;s=585x461', brand: 'AUDI', model: 'S3', year: '2004', fuelType: 'Petrol', priceDay: 40.99 },{ imageFile: 'https://www.auto-data.net/images/f96/Renault-Clio-V.jpg', brand: 'RENAULT', model: 'CLIO', year: '2018', fuelType: 'DIESEL', priceDay: 51.99 }],
      rentInfo: '',
      marketStorage: [],
    }
  }

  createCar = (car) => {
    this.state.storage.push(car);
  }

  rentCar = (info) => {
    this.setState({ rentInfo: info });
  }

  pushInMarket = (car,key) => {
    this.state.marketStorage.push(car);
    const data = this.state.storage.findIndex( (e) => e.model === key);
    this.state.storage.splice(data,1)
  }

  deleteFromMarket = (key) => {
    const data = this.state.marketStorage.findIndex( (e) => e.model === key);
    const dataMarketStorage = this.state.marketStorage;
    dataMarketStorage.splice(data,1);
    this.setState({ marketStorage: dataMarketStorage });
  }

  render(){
  return(
  <HashRouter>
    <Redirect from='/' to='/app' />
    <Route exact path='/app' component={ () => <App storage={this.state.storage} rentCar={this.rentCar} />} />
    <Route exact path='/app/form' component={ () => <Form createCar={this.createCar} />} />
    <Route exact path='/app/rent' component={ () => <Rent rentInfo={this.state.rentInfo} pushInMarket={this.pushInMarket} /> } />
    <Route exact path='/app/market' component={ () => <Market marketStorage={this.state.marketStorage} createCar={this.createCar} deleteFromMarket={this.deleteFromMarket} />} />
  </HashRouter>
  )}
}

ReactDOM.render(<RouteredApp />, document.getElementById("root"));
