import "./cardBasket.css";
import ButtonDelete from "../ui/ButtonDelete";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProductBasket } from "../../store/reducers/basketStore";

function CardBasket({ idx, img, name, price, url }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeProductBasket(idx));
  };
  const formatPrice = price.toLocaleString("ru");
  return (
    <div className="card-basket cards">
      <Link to={url} className="card__link">
        <div className="card-basket">
          <img src={img} alt="" />
          <h1 className="card-basket__name">{name}</h1>
        </div>
      </Link>
      <div className="card-basket__right">
        <div className="card-basket__price">{formatPrice} ₽ </div>
        <ButtonDelete onClick={handleDelete} />
      </div>
    </div>
  );
}

export default CardBasket;
