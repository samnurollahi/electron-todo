const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("myApi", {
  addTodo: async (todo) => await ipcRenderer.invoke("addTodo", todo),
  closeAddTodoWindow: async () => await ipcRenderer.send("closeAddTodoWindow"),
});
