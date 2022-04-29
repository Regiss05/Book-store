import React from 'react';
import { Link } from 'react-router-dom';
import './Heading.css';

const heading = () => (
  <>
    <header className="heading">
      <div className="nav">
        <Link to="/">
          <h2 className="store">BookStore</h2>
        </Link>
        <Link to="/Books" className="books">
          <p>Books</p>
        </Link>
        <Link to="/Categories" className="categories">
          <p>Categories</p>
        </Link>
      </div>
    </header>
  </>
);
export default heading;
