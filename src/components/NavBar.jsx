import { Leaf, ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Leaf size={28} />
        <h1>Paradise Nursery</h1>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link cart-link">
          <ShoppingCart size={24} />
          {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
