import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import Homepage from './Components/HomePage';
import TakeAquiz from './Components/TakeAquiz';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Quiz from './Components/QuizeSample'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
                    <Switch>
                            <Route path = "/"  component= { Homepage }  exact/>
                            <Route path = "/Main"  component= {Main }/>
                            <Route path = "/TakeAquiz"  component= {TakeAquiz }/> 
                            <Route path = "/QuizSample"  component= {Quiz }/> 

                    </Switch>      
      </div>
  </BrowserRouter>  
    );
  }
}

export default App;
