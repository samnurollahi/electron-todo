const electron = require("electron");

const Todo = require("./models/Todo");

electron.ipcMain.handle("addTodo", async (e, todo) => {
  try {
    await Todo.create({
      todo: todo.length > 0 ? todo : "todo",
    });
    return { msg: "ok" };
  } catch (err) {
    console.log(err);
    return { msg: "no", error: err };
  }
});
