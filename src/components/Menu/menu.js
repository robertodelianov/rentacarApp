import React from 'react';
import { Container, Button } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Menu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Container maxWidth='sm' className={classes.Container}>
            <Link to='/app/form'>
            <Button variant='contained' color='secondary' className={classes.BuildButton}>
                <BuildIcon fontSize='large' />
            </Button>
            </Link>
            <Link to='/app'>
            <Button variant='contained' style={{ backgroundColor: '#ffc107'}} className={classes.BuildButton}>
                <AutorenewIcon fontSize='large' />
            </Button>
            </Link>
            <Link to='/app/market'>
            <Button variant='contained' color='secondary' className={classes.BuildButton}>
                <AddShoppingCartIcon fontSize='large' />
            </Button>
            </Link>
        </Container>
    )
  }
}

export default withStyles(styles)(Menu);
