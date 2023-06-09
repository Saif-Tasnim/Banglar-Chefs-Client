import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="navbar bg-base-100 md:w-3/4 md:mx-auto justify-between">
            <div className="navbar-start">

                {/* mobile responsive */}
                <div className="dropdown ml-0">
                    <label tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setToggle(!toggle)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    {
                        toggle &&
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to="/"> Home </Link> </li>
                            <li> <Link to='/blog'> Blog </Link></li>
                            <li> <Link to='/login'> LogIn </Link></li>
                        </ul>
                    }

                </div>


                <Link to='/' className="btn btn-ghost normal-case text-2xl text-orange-700"> Banglar Chefs</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to='/blog'> Blog </Link></li>
                    <li> <Link to='/login'> LogIn </Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;