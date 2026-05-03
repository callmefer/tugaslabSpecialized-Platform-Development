import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the POST request to your Node.js backend
    axios.post('http://localhost:5000/api/products', formData)
      .then(res => {
        alert('Product added successfully!');
        navigate('/'); // Send user back to the home page
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" name="name" placeholder="Product Name" required
          value={formData.name} onChange={handleChange}
          style={{ padding: '10px' }}
        />
        <textarea 
          name="description" placeholder="Product Description" required
          value={formData.description} onChange={handleChange}
          style={{ padding: '10px', minHeight: '80px' }}
        />
        <input 
          type="number" name="price" placeholder="Price (Rp)" required
          value={formData.price} onChange={handleChange}
          style={{ padding: '10px' }}
        />
        <input 
          type="text" name="imageUrl" placeholder="Image URL (e.g., https://via.placeholder.com/250)" required
          value={formData.imageUrl} onChange={handleChange}
          style={{ padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#282c34', color: 'white', cursor: 'pointer' }}>
          Save Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;