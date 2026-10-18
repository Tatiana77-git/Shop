import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { productType } from "../types/types";

export const BestSellers = () => {
  // useState: «память» компонента. Сначала список пустой.
  // Когда мы вызовем setProducts, React перерисует страницу с товарами.
  const [products, setProducts] = useState<productType[]>([]);

  // useState для текста ошибки. null значит, что ошибки нет.
  const [error, setError] = useState<string | null>(null);

  // useEffect с пустым [] выполняется один раз, когда страница открылась.
  // Здесь мы ходим за данными, потому что запросы нельзя делать прямо в теле компонента.
  useEffect(() => {
    axios
      .get<productType[]>("/data/products.json") // Axios идёт за файлом из public/data
      .then((res) => {
        setProducts(res.data); // данные уже готовы в res.data, json() вызывать не надо
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products"); // сбой запроса попадает сюда
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bestSeller">
      <h2>Bestseller</h2>
      <div className="cards">
        {products.map((pr) => {
          return (
            <div className="card" key={pr.id}>
              <img src={pr.image} alt="img" />
              <h4>{pr.title}</h4>
              <p className="price">€{pr.price}</p>
              <Link to={"/product/" + pr.id}>Show more</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};