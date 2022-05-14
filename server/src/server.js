const mongoConnect = require("./configs/db");
const app = require("./index");

const port = process.env.PORT || 5500;

app.listen(port, async () => {
    await mongoConnect();
    console.log(`listening to port ${port}`);
});