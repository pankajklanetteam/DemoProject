import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { LogOutAction } from '../redux/actions/uiReducerAction';
import { useHistory } from 'react-router-dom';
import CustomDrawer from './CustomDrawer';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = (props) => {

    let history = useHistory();

const isLoggedIn = useSelector(state => state.ui.isLoggedIn)
const dispatch = useDispatch()

    const classes = useStyles();

     const logoutButtonHandler = ()=> {
         dispatch(LogOutAction())

     }

     const loginButtonHandler = ()=> {
        history.push("/login");
     }

     const RegisterButtonHandler  = ()=> {
         history.push('/register')
}

const addEmployeeButtonHandler = ()=> [
        
]
    return (
        <div className={classes.root}>
      <AppBar  position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
  
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Employee
          </Typography>
          {!isLoggedIn &&  <Button onClick = {loginButtonHandler}  variant='outlined' color="inherit">Login</Button>}
          {!isLoggedIn && <Button onClick = {RegisterButtonHandler} variant='outlined' color='inherit'> Register</Button>}
          {isLoggedIn &&  <Button onClick ={addEmployeeButtonHandler}  variant='outlined' color="inherit">Add Employee</Button>}
          {isLoggedIn && <Button onClick = {logoutButtonHandler} variant='outlined' color='inherit'>Logout</Button>}
        </Toolbar>
      </AppBar>

      <CustomDrawer/>

    </div>
    )
}

const mapStateToProps = (state) => ({
isLoggedIn : state.ui.isLoggedIn
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
