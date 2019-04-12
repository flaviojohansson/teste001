import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = () => {
  return (
    <React.Fragment>
      <h1>Nav Bar</h1>
      <NavLink to="/">Home</NavLink>
    </React.Fragment>
  )
}

export default nav;