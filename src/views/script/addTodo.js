const input = document.getElementById("todo");
const btnAddTodo = document.getElementById("btnAddTodo");

btnAddTodo.addEventListener("click", async () => {
  const response = await window.myApi.addTodo(input.value);
  console.log(response);

  if (response.msg == "ok") {
    window.myApi.closeAddTodoWindow();
  } else {
    alert("error");
  }
});
