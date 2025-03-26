import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../features/cart/cartSlice';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="main">
      <h2>Your Shopping Cart 🛒</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-card">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>Unit: ${item.price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  </div>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button className="delete-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <Link to="/products">
              <button className="action-btn">Continue Shopping</button>
            </Link>
            <button className="action-btn checkout">Checkout</button>
          </div>

          <h3>Total Amount: ${totalAmount}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
