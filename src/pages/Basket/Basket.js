import "./Basket.css";
import CardBasket from "../../components/elements/cardBasket";
import ButtonBack from "../../components/ui/ButtonBack";
import Button from "../../components/ui/Button";

import { useSelector } from "react-redux";

import { useLogOut, useRedirectIfNotAuth } from "../../hooks/authHooks";

import { useGoBack } from "../../hooks/basketHooks";

function Basket() {
  const basket = useSelector((state) => state.basket.basket);

  const totalPrice = basket
    .map((item) => item.price)
    .reduce((sum, a) => sum + a, 0);

  console.log("basket", basket);

  const goBack = useGoBack();

  const logOut = useLogOut();

  useRedirectIfNotAuth();
  return (
    <div className="Cart">
      <header className="cart__header">
        <div className="wrapper">
          <ButtonBack onClick={() => goBack()} />

          <h1 className="cart__header-text">Корзина с выбранными товарами</h1>

          <Button onClick={() => logOut()}>Выйти</Button>
        </div>
      </header>

      <div className="container-cart">
        <main className="cart__cards">
          {basket.map((item) => {
            return (
              <CardBasket
                key={item.idx}
                id={item.id}
                idx={item.idx}
                img={item.img}
                name={item.name}
                price={item.price}
                url={`/details/${item.id}`}
              />
            );
          })}
        </main>
      </div>
      <footer className="cart__footer">
        <div className="container-cart footer">
          <p className="footer__text">
            Заказ на сумму: <span className="card__price">{totalPrice.toLocaleString("ru")} ₽</span>
          </p>
          <Button onClick={() => alert("Заказ принят!")}>Оформить заказ</Button>
        </div>
      </footer>
    </div>
  );
}

export default Basket;
