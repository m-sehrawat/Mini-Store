import axios from "axios";
import { notify } from "../../helpers/extrafunctions";


export const addFavouriteRequest = (payload, token, toast) => async () => {
    try {
        const options = {
            method: 'POST',
            headers: { 
                'content-type': 'application/json' ,
                'Authorization': `Bearer ${token}` 
            },
            data: JSON.stringify(payload),
            url : "/favourite",
          };
        await axios(options);
        notify(toast, "Product added to the favourite", "success");
    } catch (err) {
        console.log(err);
        notify(toast, err.response.data.message, "error");
    }
}
