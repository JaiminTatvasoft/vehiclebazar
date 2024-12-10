import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/userSlice";

export const useLoadUsers = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    dispatchUser();
  }, []);

  const dispatchUser = () => {
    dispatch(loadUser());
  };
  return { data };
};
