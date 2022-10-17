const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

const createTask = (event) => {
    event.preventDefault();

    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

btn.addEventListener("click", createTask);

