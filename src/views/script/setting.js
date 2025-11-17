const apply = document.getElementById("apply");

apply.addEventListener("click", async () => {
  await localStorage.setItem("x", x.value);
  await localStorage.setItem("y", y.value);
});
