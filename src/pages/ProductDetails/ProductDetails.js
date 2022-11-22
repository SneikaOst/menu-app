import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { addProductInBasket } from "../../store/reducers/basketStore";
import ButtonBack from "../../components/ui/ButtonBack";
import Button from "../../components/ui/Button";
import BasketButton from "../../components/ui/BasketButton";
import { Link } from "react-router-dom";
import { useGoBack } from "../../hooks/basketHooks";
import { useLogOut, useRedirectIfNotAuth } from "../../hooks/authHooks";
import { v4 as uuidv4 } from "uuid";

export default function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
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

  const productList = useSelector((state) => state.product);
  const product = productList.find((e) => e.id === Number(productId));
  const goBack = useGoBack();
  const logOut = useLogOut();

  useRedirectIfNotAuth();

  if (!product) {
    return "";
  }

  const weight = product.weight?.toLocaleString("ru");
  const { id, img, name, description, price } = product;

  const addProduct = () => {
    const item = {
      id: id,
      idx: uuidv4(),
      name: name,
      price: price,
      img: img,
    };

    dispatch(addProductInBasket(item));
  };
  const formatPrice = price.toLocaleString("ru");

  return (
    <div className="ProductDetails">
      <header className="details__header">
        <div className="wrapper">
          <ButtonBack onClick={() => goBack()} />

          <div className="products__cart">
            <div className="products__cart-text">
              {count} {nameText(count)} <br></br>на сумму {prices} ₽
            </div>

            <Link to={"/basket"} className="products__cart-icon">
              <BasketButton></BasketButton>
            </Link>

            <Link to="/auth">
              <Button onClick={() => logOut()}>Выйти</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="details__card">
        <div className="card-details">
          <div>
            <img src={img} alt={name} className="card-details__img" />
          </div>
          <div className="card-details__content">
            <div className="card-details__text">
              <h1 className="card-details__name">{name}</h1>
              <p className="card-details__description">{description}</p>
            </div>

            <div className="card-details__bottom">
              <div className="card-details__price">
                {formatPrice} ₽ <span> / {weight}</span>
              </div>

              <Button onClick={addProduct}>В корзину</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
