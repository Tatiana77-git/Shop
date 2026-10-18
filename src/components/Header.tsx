import logo from '../assets/img/logo.svg'
import cart from '../assets/img/cart.svg'

type HeaderProps = {
  cartCount: number;
};

export const Header = ({ cartCount }: HeaderProps) => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="cartIcon">
        <img src={cart} alt="cart" />
        {cartCount > 0 && <span className="cartBadge">{cartCount}</span>}
      </div>
    </div>
  )
}