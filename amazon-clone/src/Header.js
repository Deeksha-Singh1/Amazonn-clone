import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return <nav className="header">
    
     {/* logo on the left  */}

     <Link to="/login">

     <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png " alt="not visible"/>

     </Link>

     
     {/* search-box */}
    

     <input type="text" className="header__searchInput" />
     <SearchIcon className="header__searchIcon" />
     {/* 3 Links */}
     {/* basket icon with numbers */}
    </nav>
}

export default Header
