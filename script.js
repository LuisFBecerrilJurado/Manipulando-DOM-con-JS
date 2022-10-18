const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

( () =>{
    const createTask = (event) => {
    event.preventDefault();
    const input         = document.querySelector("[data-form-input]");
    const value         = input.value;
    const task          = document.createElement("li");
    const list          = document.querySelector("[data-list]");
    const taskContent   = document.createElement('div');
    const title         = document.createElement('span');
    input.value         = '';
    task.classList.add("card");
    title.classList.add("task");
    title.innerText     = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(title);
    const content       = `
                       <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.appendChild(taskContent);
    list.appendChild(task);
}

btn.addEventListener("click", createTask);

const checkComplete = () =>{
    const i = document.createElement('i');
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click",completeTask);
    return i;
}

const completeTask= (event) =>{
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}
}) ()