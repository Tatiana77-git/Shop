import { Link } from "react-router";
import arrowBack from "../assets/img/arrowBack.svg";
import { CartItem } from "../types/types";

type CartProps = {
  cart: CartItem[];
  onRemove: (id: number) => void;
};

export const Cart = ({ cart, onRemove }: CartProps) => {
  // итог считается из списка: цена × количество, всё складывается
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cartPage">
      <div className="arrowBack">
        <Link to="/">
          <img src={arrowBack} alt="arrowBack" />
          Back to Best Seller
        </Link>
      </div>

      <h2>Your cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cartRow" key={item.id}>
              <img src={item.image} alt={item.title} />
              <p className="cartTitle">{item.title}</p>
              <p>€ {item.price} × {item.quantity}</p>
              <p className="cartLine">€ {(item.price * item.quantity).toFixed(2)}</p>
              <button className="removeBtn" onClick={() => onRemove(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <p className="cartTotal">Total: € {total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};