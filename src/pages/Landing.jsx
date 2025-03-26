import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-left">
        <h1 className="company-name">🌿 Paradise Nursery</h1>
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>

      <div className="landing-right">
        <h2>Welcome to our green paradise!</h2>
        <p>
          At Paradise Nursery, we believe plants are more than decoration — they’re a way of life.
        </p>
        <p>
          Our team of passionate botanists and plant lovers carefully curates each product to ensure top quality and care. Whether you're a seasoned gardener or just starting out, we offer personalized guidance to help you grow your perfect plant collection.
        </p>
        <p>
          Experience the benefits of having greenery in your home or office: cleaner air, reduced stress, and a happier, more vibrant life. 🌱
        </p>
      </div>
    </div>
  );
};

export default Landing;
