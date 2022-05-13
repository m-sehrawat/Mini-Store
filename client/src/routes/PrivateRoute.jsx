import { Navigate } from "react-router-dom";
import { getItemFromLocal } from "../utils/localStorage";

export const Private = ({ children }) => {

    const token = getItemFromLocal("token");

    return !!token ? (<div>{children}</div>) : (<Navigate to={"/login"} />);
};