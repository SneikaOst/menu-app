import Card from "../../components/elements/card";
import { products } from "../../menuList";
import BasketButton from "../../components/ui/BasketButton";
import "./Products.css";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useLogOut, useRedirectIfNotAuth } from "../../hooks/authHooks";

function Products() {
  const prices = useSelector((state) => state.basket.pricesbasket);
  const count = useSelector((state) => state.basket.countProducts);

  function nameText(count) {
    if (count === 1) {
      return "товар";
    } else if (count > 1 && count < 5) {
      return "товара";
    } else {
      return "товаров";
    }
  }

  const logOut = useLogOut();

  useRedirectIfNotAuth();

  return (
    <div className="Products">
      <div className="container">
        <header className="products__header">
          <h1 className="products__header-text">наша продукция</h1>
          <div className="products__cart">
            <div className="products__cart-text">
              {count} {nameText(count)} <br></br>на сумму {prices} ₽
            </div>

            <Link to={"/basket"} className="products__cart-icon">
              <BasketButton></BasketButton>
            </Link>

            <Button onClick={() => logOut()}>Выйти</Button>
          </div>
        </header>

        <main className="products__cards">
          {products.map((product) => {
            const { id, img, name, description, price, weight } = product;
            return (
              <Card
                id={id}
                idx={uuidv4(id)}
                key={id}
                name={name}
                img={img}
                description={description}
                price={price}
                weight={weight}
                url={`/details/${id}`}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default Products;
