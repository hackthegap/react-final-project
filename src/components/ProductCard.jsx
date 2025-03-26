import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { Check } from 'lucide-react';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const alreadyInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="card">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="desc">{product.description}</p>

      {alreadyInCart ? (
        <button className="btn-disabled" disabled>
          <Check size={16} style={{ marginRight: '6px' }} />
          Added to Cart
        </button>
      ) : (
        <button className="btn-add" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
