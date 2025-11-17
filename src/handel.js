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

electron.ipcMain.handle("getTodos", async () => {
  try {
    const todos = await Todo.findAll();
    return { msg: "ok", todos };
  } catch (err) {
    console.log(err);
    return { msg: "no", error: err };
  }
});

electron.ipcMain.handle("deleteTodo", async (e, id) => {
  try {
    await Todo.destroy({
      where: {
        id,
      },
    });

    return { msg: "ok" };
  } catch (err) {
    console.log(err);
    return { msg: "no", error: err };
  }
});

electron.ipcMain.handle("comTodo", async (e, id) => {
  try {
    await Todo.update(
      {
        check: true,
      },
      {
        where: {
          id,
        },
      }
    );
    return { msg: "ok" };
  } catch (err) {
    console.log(err);
    return { msg: "no", error: err };
  }
});
