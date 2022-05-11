import axios from "axios";
import { notify } from "../../helpers/extrafunctions";


export const addFavouriteRequest = (payload, toast) => async () => {
    try {
        await axios.post("/favourite", payload);
        notify(toast, "Product added to the favourite", "success");
    } catch (err) {
        console.log(err);
        notify(toast, "Something went wrong", "error");
    }
}