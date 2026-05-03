import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  // useParams grabs the ':id' from the URL (e.g., /product/12345)
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the single product using the ID from the URL
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  // Show a loading message while waiting for the backend
  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Loading product details...</h2>;
  
  // Show an error if the product doesn't exist
  if (!product) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Product not found.</h2>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff', marginBottom: '20px', display: 'inline-block' }}>
        &larr; Back to Home
      </Link>
      
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}>
        {/* We use conditional rendering for the image in case it's missing */}
        {product.imageUrl && (
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            style={{ width: '100%', borderRadius: '8px', marginBottom: '15px' }} 
          />
        )}
        <h2 style={{ margin: '0 0 10px 0' }}>{product.name}</h2>
        <h3 style={{ color: 'green', margin: '0 0 15px 0' }}>
  {new Intl.NumberFormat('id-ID', { 
    style: 'currency', 
    currency: 'IDR', 
    minimumFractionDigits: 0 
  }).format(product.price)}
</h3>
        <p style={{ lineHeight: '1.6', color: '#555' }}>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;