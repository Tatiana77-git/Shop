import { Link } from "react-router";

export const OrderConfirmed = () => {
  return (
    <div className="orderConfirmed">
      <h2>Order confirmed</h2>
      <p>Thank you for your order!</p>
      <p className="demoNote">This is a demo store. No real payment was made.</p>
      <Link to="/" className="backLink">Back to Best Seller</Link>
    </div>
  );
};