import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace URL with your actual backend URL later
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product._id} className="product-card">
          <img src={product.imageUrl} alt={product.name} style={{width: '100%'}}/>
          <h3>{product.name}</h3>
          <p>
  {new Intl.NumberFormat('id-ID', { 
    style: 'currency', 
    currency: 'IDR', 
    minimumFractionDigits: 0 
  }).format(product.price)}
</p>
          <Link to={`/product/${product._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;