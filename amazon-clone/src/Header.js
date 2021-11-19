import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue} from "./StateProvider";


function Header() {
  const [{basket}, dispatch] = useStateValue();

  // console.log(basket);

  return (
  <div className="header">
    
     {/* logo on the left  */}

     <Link to="/">

     <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png " alt="not visible"/>

     </Link>

     
     {/* search-box */}
     <div className="header__search">
       <input type="text" className="header__searchInput" />
       <SearchIcon className="header__searchIcon" /></div>
     
     {/* 3 Links */}
     <div className="header__nav">

       {/* first Link */}

        <Link to="/login" className="header__link">

        <div className="header__option">
          <span className="header__optionLineOne" >Hello,</span>
          <span className="header__optionLineTwo" >Sign In</span>
        </div>
         
        </Link>

       {/* second link */}
       <Link to="/" className="header__link">

        <div className="header__option">
          <span className="header__optionLineOne" >Returns</span>
          <span className="header__optionLineTwo" >& Orders</span>
        </div>
         
        </Link>

       {/* third link */}
       <Link to="/" className="header__link">

        <div className="header__option">
          <span className="header__optionLineOne" >Your</span>
          <span className="header__optionLineTwo" >Prime</span>
        </div>
         
        </Link>

        {/* fourth link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* shopping basket icon */}
            <ShoppingBasketIcon/>
            {/* number of icons in the basket */}

            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        
        </Link>

     </div>

    </div>
    );
}

export default Header
