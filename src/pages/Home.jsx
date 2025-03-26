import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <main className="main">
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
