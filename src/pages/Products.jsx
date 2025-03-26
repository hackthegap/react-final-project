import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className="main">
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
