import "./404.css";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

function NotFound() {
  return (
    <div className="NotFound">
      <div className="container">
        <h1 className="error__title">404</h1>
        <p className="error__text">Данной страницы не существует</p>
        <Link to="/">
          <Button>На главную</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
