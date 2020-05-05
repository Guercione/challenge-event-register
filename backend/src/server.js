const app = require("./app");
const PORT = process.env.PORT || 3333;

app.listen(PORT, (err) => {
  if (err) {
    console.log("There was an uncaught error", err);
    process.exit(1);
  }

  console.log("Server running on port 3333");
});
