import "./card.css";
import CardButton from "../ui/CardButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addProductInBasket } from "../../store/reducers/basketStore";

function Card({ id, img, name, description, price, weight, url }) {
  const dispatch = useDispatch();

  const addProduct = () => {
    const item = {
      id: id,
      idx: uuidv4(),
      name: name,
      url: url,
      price: price,
      img: img,
    };

    dispatch(addProductInBasket(item));
  };
  const formatPrice = price.toLocaleString("ru");

  return (
    <div className="card">
      <Link to={url} className="card__link">
        <img src={img} alt={name} />
        <h1 className="card__name">{name}</h1>
        <p className="card__description">{description}</p>
      </Link>

      <div className="card__bottom">
        <div className="card__price">
          {formatPrice} ₽ <span> / {weight}</span>
        </div>

        <CardButton onClick={addProduct} />
      </div>
    </div>
  );
}

export default Card;
