import React from 'react'
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div>
      <h2>ContactPage</h2>
      <Link to="/">HomePage</Link> <br />
      <Link to="/about">AboutPage</Link> <br />
      <Link to="/careers">CareersPage</Link> <br />
      <Link to="/contact">ContactPage</Link> <br />
      <Link to="/about">AboutPage</Link> <br />
      <Link to="/selectproject">SelectProject</Link> <br />
      <Link to="/services">ServicePage</Link> <br />
      <Link to="/ourteams">TeamsPage</Link> <br />
      <Link to="/ourworks">WorkPage</Link> <br />
    </div>
  );
}

export default ContactPage