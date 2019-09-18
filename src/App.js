import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import LandingPage from './routes/LandingPage/LandingPage';
import Planner from './routes/Planner/Planner';
import Login from './routes/Login/Login';
import Signup from './routes/Signup/Signup';
import './App.css'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={LandingPage} />
          <Route path="/planner" exact component={Planner} />
          <Route path="/planner/:week" component={Planner} />
          <Route path="/signin/" component={Login} />
          <Route path="/signup/" component={Signup} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
