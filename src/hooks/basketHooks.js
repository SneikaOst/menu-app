import { useNavigate } from "react-router-dom";

export function useGoBack() {
  const navigate = useNavigate();
  return () => {
    if (
      window.history.length > 1 &&
      document.referrer.indexOf(window.location.host) !== -1
    ) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
}
