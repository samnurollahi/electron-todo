const path = require("path");

const { BrowserWindow, app, Menu, ipcMain } = require("electron");

let addTodoWindow = null;
let mainWindow = null;

const menu = Menu.buildFromTemplate([
  { label: "add todo", click: () => addTodo() },
  { label: "setting" },
]);

const addTodo = () => {
  addTodoWindow = new BrowserWindow({
    width: 400,
    height: 280,
    x: 0,
    y: 0,
    // movable: false,
    show: true,
    webPreferences: {
      preload: path.join(app.getAppPath(), "preload", "preload.js"),
      contextIsolation: true,
    },
  });

  addTodoWindow.loadFile("./views/addtodo.html");
};

module.exports = main = () => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 280,
    x: 0,
    y: 0,
    // resizable: false,
    movable: false,
    transparent: true,
    webPreferences: {
      preload: path.join(app.getAppPath(), "preload", "preloadMainwindow.js"),
      contextIsolation: true,
    },
  });

  //? set menu
  mainWindow.setMenu(menu);
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile("./views/index.html");
};

ipcMain.on("closeAddTodoWindow", () => {
  addTodoWindow.close();
  mainWindow.reload();
});
