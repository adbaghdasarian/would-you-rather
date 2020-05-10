import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'
import LeaderBoard from './components/LeaderBoard'
import NewQuestion from './components/NewQuestion'
import QuestionPage from './components/QuestionPage'
import './index.css';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="main-container">
            <Nav />
            {this.props.loading
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard}/>
                  <Route path='/new' component={NewQuestion}/>
                  <Route path='/leaderboard' component={LeaderBoard}/>
                  <Route path='/question/:id' component={QuestionPage} />
                </div>}
          </div>
         </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return{
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
