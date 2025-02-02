import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
         <li><Link href="/">HOME</Link></li> {/*Link to Home */}
        <li><Link href="/form">SIGN IN</Link></li> {/*Link to Form */}
      </ul>
    </nav>
  );
};

export default Navbar;