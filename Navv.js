import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navv = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  };
  return (
     <div >
          <img 
          alt="logo"
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlakjsZnCdpH7AKlQOqgyxeqib5dljPw1jMg&usqp=CAU" />
    {auth ?<ul className="Nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>

       <li>
        <Link to="/Booking">Booking</Link>
       </li>
       <li>
        <Link to="/Weather">Weather report</Link>
       </li>
         <li> <Link onClick={logout} to="/Login">
            Logout
          </Link></li>
        <li className="cart">
            <Link to="/cart">
            cart
           </Link>
        </li>
          </ul>
        : 
          <ul className="Nav nav-right">
            <li> <Link to="/Login">Register</Link></li>
            
             <li> <Link to="/SignUp">Login</Link></li>

            
      </ul>
}
    </div>
  );
};
export default Navv;
