import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import axios from 'axios';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    this.props.dispatch(fetchSmurfs())
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, null)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.