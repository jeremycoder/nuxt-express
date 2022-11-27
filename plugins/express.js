import express from "express";
const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("PORT: ", process.env.PORT);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default defineNuxtPlugin(() => {
  return {
    provide: {
      auth: "Express ready",
    },
  };
});
