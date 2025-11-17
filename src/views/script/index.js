const boxTodos = document.getElementById("todos");

async function getTodos() {
  try {
    const { msg, todos } = await window.myApi.getTodos();

    if (msg == "no") {
      alert("error");
      throw new Error("preload error");
    } else {
      console.log(todos);
      boxTodos.innerHTML = "";
      todos.forEach((todo) => {
        boxTodos.innerHTML += `
            <div
        class="flex justify-between items-center w-[80%] m-auto border-b pb-2 mt-3"
      >
        <p style="text-decoration: ${
          todo.dataValues.check ? "line-through" : "none"
        }">${todo.dataValues.todo}</p>
        <div>
          <i class="fa fa-remove text-red-700 cursor-pointer" onclick="deleteTodo('${
            todo.dataValues.id
          }')"></i>
          <i class="fa fa-check text-green-700 cursor-pointer" onclick="comTodo('${
            todo.dataValues.id
          }')"></i>
        </div>
      </div>
        `;
      });
    }
  } catch (err) {
    console.log(err);
  }
}

async function deleteTodo(id) {
  try {
    const { msg } = await window.myApi.deleteTodo(id);
    if (msg == "ok") {
      await getTodos();
    } else {
      alert("error");
    }
  } catch (err) {
    console.log(err);
  }
}
async function comTodo(id) {
  try {
    const { msg } = await window.myApi.comTodo(id);
    if (msg == "ok") {
      getTodos();
    } else {
      alert("error");
    }
  } catch (err) {
    console.log(err);
  }
}

getTodos();
