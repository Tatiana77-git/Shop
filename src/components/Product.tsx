import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import rating from "../assets/img/rating.svg";
import cartWhite from "../assets/img/cartWhite.svg";
import arrowBack from "../assets/img/arrowBack.svg";
import { productType } from "../types/types";

type ProductProps = {
  onAddToCart: (product: productType) => void;
};

export const Product = ({ onAddToCart }: ProductProps) => {
  // useState: здесь хранится один товар. Пока данных нет, там null.
  const [product, setProduct] = useState<productType | null>(null);

  // useState для текста ошибки. null значит, что ошибки нет.
  const [error, setError] = useState<string | null>(null);

  // useParams: достаёт id из адреса. Для /product/3 получится id = "3" (строка).
  const { id } = useParams();

  // useEffect: запрос за данными. [id] в конце значит: выполнить при открытии
  // страницы и повторить, если id в адресе изменился.
  useEffect(() => {
    axios
      .get<productType[]>("/data/products.json") // грузим весь список
      .then((res) => {
        // id из адреса это строка, а в данных число, поэтому Number(id)
        const found = res.data.find((p) => p.id === Number(id));
        if (found) {
          setProduct(found);
        } else {
          setError("Product not found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load product");
      });
  }, [id]);

  if (error) {
    return <h1>{error}</h1>;
  }

  // Пока данные не пришли, показываем загрузку
  if (product === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="arrowBack">
        <Link to={"/"}>
          <img src={arrowBack} alt="arrowBack" />
          Back to Best Seller
        </Link>
      </div>

      <div className="product">
        <img src={product.image} alt={product.title} />
        <div className="info">
          <p className="title">{product.title}</p>
          <p className="price">€ {product.price}</p>
          <div className="rating">
            <p>Rating: {product.rating.rate}</p>
            <img src={rating} alt="" />
          </div>
          <div className="category">
            <span>Category:</span>
            <p>{product.category}</p>
          </div>
          <p className="description">{product.description}</p>
          <button onClick={() => onAddToCart(product)}>
            <img src={cartWhite} alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};