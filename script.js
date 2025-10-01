const submit = document.querySelector(".form-todo");
const inputText = document.querySelector(".form-todo textarea");
const ul = document.querySelector(".todoList");

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  let todoHeading = inputText.value;

  if (todoHeading != "") {
    const newLi = document.createElement("li");

    newLi.innerHTML = `<span class="text">${todoHeading}</span>  
        <div class = "div-todo">
        <button class="btn btn-todo todo-done">Done</button><button class="btn btn-todo todo-remove">Remove</button>
        </div>`;

    ul.append(newLi);
    inputText.value = "";
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-done")) {
    e.target.parentNode.previousElementSibling.style.textDecoration =
      "line-through";
  }

  if (e.target.classList.contains("todo-remove")) {
    e.target.parentNode.parentNode.remove();
  }
});
