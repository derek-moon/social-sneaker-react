import React, {Component} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

//Components
import Navbar from './components/Navbar';

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a05050',
      main: '#e57373',
      dark: '#ea8f8f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9a1e00',
      main: '#dd2c00',
      dark: '#e35633',
      contrastText: '#fff',
    },
  },
  typography:{
    useNextVariants:true
  }
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
        <Router>
        <Navbar/>
          <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/signup" component={signup}/>
          </Switch>
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
