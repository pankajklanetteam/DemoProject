import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Route, Switch } from 'react-router';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import RegisterFrom from './components/Register';
import { useSelector } from 'react-redux';




function App() {

  const isLoggedIn = useSelector(state => state.ui.isLoggedIn)
  return (
    <>
      
      <BrowserRouter>
      <Header/>
      <Switch>
        
       { !isLoggedIn && <Route path= '/login' component = { Login } />  }
        { !isLoggedIn && <Route path= '/register' component = {RegisterFrom} />}  
      </Switch>
      </BrowserRouter>
  </>
  );
}

export default App;
