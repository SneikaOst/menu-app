import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutAction } from "../store/reducers/authStore";

export const useAuth = () => {
  return useSelector((state) => state.auth);
};

export const useRedirectIfNotAuth = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  useEffect(() => {
    if (!auth) {
      navigate("/auth");
    }
  }, [auth]);
};

export const useLogOut = () => {
  const dispatch = useDispatch();
  return () => dispatch(logOutAction());
};
