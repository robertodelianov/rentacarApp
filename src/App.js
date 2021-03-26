import React from 'react';

import './styles.css';
import Appbar from './components/Appbar/appbar';
import Menu from './components/Menu/menu';
import Cars from './components/Cars/cars';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      storage: this.props.storage
    }
  }
  render(){
    return (
      <div>
          <Appbar />
          <Menu />
          <Cars storage={this.state.storage} rentCar={this.props.rentCar} />
      </div>
    )
  }
}

export default App;
