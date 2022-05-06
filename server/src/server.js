const connect = require("./configs/db");
const app = require("./index");

const port = process.env.PORT || 5500

app.listen(port, async () => {
    await connect();
    console.log(`listening to port ${port}`);
});