import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <div>
        {this.props.loading
          ? null
          : <Dashboard />}
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return{
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
