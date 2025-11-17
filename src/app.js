const electorn = require("electron");

const db = require("./config/db");

const mainWindow = require("./windows/mainWindow");

electorn.app.on("ready", () => {
  mainWindow();
});

// handel
require("./handel");

db.sync({
  alter: true,
})
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("err", err);
  });
