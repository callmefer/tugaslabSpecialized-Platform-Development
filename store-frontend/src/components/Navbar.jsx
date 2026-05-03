import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '10px 20px', backgroundColor: '#282c34', color: 'white', marginBottom: '20px'
    }}>
      <h2 style={{ margin: 0 }}>Toko Online</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/add-product" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>+ Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;