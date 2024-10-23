import React, { useState } from 'react';


const Checkout = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', payment: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return <div className="confirmation">Thank you for your order, {formData.name}!</div>;
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Payment:
          <input type="text" name="payment" value={formData.payment} onChange={handleChange} required />
        </label>
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default Checkout;
