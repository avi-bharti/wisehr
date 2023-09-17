import { BRAND } from "../../constants";
import { Link } from 'react-router-dom';
import '../../assets/root.css';

const Header = () => {
   return ( 
      <header>
         <nav className="container flex">
            <h2 className="brand"><Link to='/'>{BRAND}</Link></h2>
            <div className="navbar">
               <Link to='/categories'>Categories</Link>
               <Link to='/wishlist'>Wishlist</Link>
               <Link to='/cart'>Cart</Link>
               <Link to='/me'>My Account</Link>
            </div>
         </nav>
      </header>
   );
}
 
export default Header;