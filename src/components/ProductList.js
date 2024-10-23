import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';


const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products?limit=5&page=${page}`);
        setProducts(prevProducts => [...prevProducts, ...response.data]);
        setLoading(false);
      } catch (err) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const loadMore = () => setPage(prevPage => prevPage + 1);

  if (loading && products.length === 0) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <button onClick={loadMore} className="load-more">Load More</button>
    </div>
  );
};

export default ProductList;
