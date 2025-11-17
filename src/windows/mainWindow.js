const path = require("path");

const { BrowserWindow, app, Menu, ipcMain } = require("electron");

let addTodoWindow = null;
let mainWindow = null;
let settingWindow = null;

const menu = Menu.buildFromTemplate([
  { label: "add todo", click: () => addTodo() },
  { label: "setting", click: () => setting() },
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

    parent: mainWindow,
    modal: true,
  });

  addTodoWindow.loadFile("./views/addtodo.html");
};
const setting = () => {
  settingWindow = new BrowserWindow({
    width: 400,
    height: 280,
    x: 0,
    y: 0,
    // movable: false,
    show: true,
  });

  settingWindow.loadFile("./views/settings.html");
};

module.exports = main = () => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 280,
    x: 0,
    y: 0,
    resizable: false,
    movable: false,
    transparent: true,
    webPreferences: {
      preload: path.join(app.getAppPath(), "preload", "preloadMainwindow.js"),
      contextIsolation: true,
    },
    // modal: addTodoWindow,
  });

  //? set menu
  mainWindow.setMenu(menu);
  // mainWindow.webContents.openDevTools();
  mainWindow.loadFile("./views/index.html");

  ipcMain.on("pos", (e, { x, y }) => {
    mainWindow.setPosition(+x, +y);
  });
};

ipcMain.on("closeAddTodoWindow", () => {
  addTodoWindow.close();
  mainWindow.reload();
});
