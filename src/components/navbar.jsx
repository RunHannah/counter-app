import React from "react";

// Stateless Functional Component
// Returns a React element, rather than use class component

const NavBar = ({ totalCounters }) => {
  console.log("NavBar Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="">
        Navbar Counter{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
