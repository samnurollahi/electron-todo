const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("myApi", {
  getTodos: async () => await ipcRenderer.invoke("getTodos"),
  deleteTodo: async (id) => await ipcRenderer.invoke("deleteTodo", id),
  comTodo: async (id) => await ipcRenderer.invoke("comTodo", id),
});

ipcRenderer.send("pos", {
  x: localStorage.getItem("x"),
  y: localStorage.getItem("y"),
});
