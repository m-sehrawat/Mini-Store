import { Navigate } from "react-router-dom";
import { getItemFromLocal } from "../helpers/localStorage";

export const Private = ({ children }) => {

    const token = getItemFromLocal("token");

    return !!token ? (<div>{children}</div>) : (<Navigate to={"/login"} />);
};