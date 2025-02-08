import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/watchlist">Watchlist</Link>
      {isAuthenticated ? <button onClick={() => dispatch(logout())}>Logout</button> : <Link to="/login">Login</Link>}
    </nav>
  );
};

export default Navbar;
