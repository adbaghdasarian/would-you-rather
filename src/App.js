import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard'
import './index.css';
import LoadingBar from 'react-redux-loading';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="main-container">
        <LoadingBar />
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
