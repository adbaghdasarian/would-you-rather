import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

import { logOutUser } from '../actions/authedUser';
import { connect } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import icons from './wyr-icons/index.js'

class Nav extends Component {

  state = {

    toHome: 'false',
  }

  history = createHistory()

  logOut = (e) => {
      e.preventDefault()
      console.log('history', this.history)
      //console.log(e);
      this.history.push("/");
      const{ dispatch } = this.props;
      dispatch(logOutUser());
  }



  render() {

    const { user } = this.props;
    const image = user.avatarURL;
    /*

    if (!user ){
      return(<Redirect to='/' />)

    }
    */

    return (
      <nav className='nav'
      style={{display: 'flex',
              backGroundColor: 'grey'}}>
        <ul style={{display: 'flex',}}>
          <li
            className='navLink'>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li  className='navLink'>
            <NavLink to='/add' exact activeClassName='active' >
              New Question
            </NavLink>
          </li>
          <li  className='navLink'>
            <NavLink to='/leaderboard' exact activeClassName='active' >
              Leader Board
            </NavLink>
          </li>
          <li className='navLink' style={{marginLeft: '40px'}}>
            <NavLink to='/' exact activeClassName='active' onClick={this.logOut}>
              Log Out
            </NavLink>
          </li>
          <span style={{textAlign: 'right',
                    display: 'inline',
                    flex: 6,
                    width: '800px',
                  }}
              className='logOut'>
            <div style={{display: 'inline', marginRight: '20px'}}>
            Hello, {user.name}
            </div>
            <img
              className='avatar logInAvatar'
              src={icons[image]}
              alt={`avatar of ${user.name}`}
              style={{display: 'inline-block',
                      margin: '0px auto',
                      height: '100px',
                      width: '200px'}}
            />
        </span>




        </ul>

      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }){
  console.log(users, authedUser)
  return{
    authedUser,
    user: users[authedUser],
  }
}

export default connect(mapStateToProps)(Nav);