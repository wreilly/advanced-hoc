import React,{ Component } from 'react';
import { Link } from 'react-router';


// REDUX CONTAINER NOW - access to state
import { connect } from 'react-redux';
import * as actions from '../actions'; // authenticate() function


class Header extends Component {

  authButton() {
    if (this.props.authenticated) {
      // You are signed in (very nice), so, we're going to sign you O-U-T
      return <button onClick={ () => {this.props.authenticate(false)} }>Sign Out</button>;
    }
      // Y'ain't signed in (poor thing!), so, we're about to sign you I-N (ain't that sweet)
    return <button onClick={ () => this.props.authenticate(true)}>Sign In</button>;
  }
  render() {

    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  // this thing here shows up as props inside of our Header --> this.props.authenticated
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
