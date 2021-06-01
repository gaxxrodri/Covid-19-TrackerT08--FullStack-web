import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './style.scss';

const Login = () => {
  const {
    loginWithRedirect, logout, isAuthenticated, user
  } = useAuth0();

  const loggOutTemplate = () => (
    <div className="container-login">
      <h3>
        Welcome
        {' '}
        {user.name}
      </h3>
      <img className="login__photo" src={user.picture} alt="user_photo" />
      <button className="login__button" type="button" onClick={() => logout()}>Logout</button>
    </div>
  );

  const loggInTemplate = () => (
    <>
      <h3>Please access with your credentials</h3>
      <button className="login__button" type="button" onClick={() => loginWithRedirect()}>Login</button>
    </>
  );
  return (
    <>
      <div className="login">
        {isAuthenticated
          ? loggOutTemplate()
          : loggInTemplate()}
      </div>
    </>
  );
};

Login.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired
  }).isRequired
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Login);
