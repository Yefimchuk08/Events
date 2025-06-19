const form = document.getElementById("todoForm")
const input = document.getElementById("todoInput")
const button = document.getElementById("addBtn")
const charCount = document.getElementById("charCount")
const hoverMsg = document.getElementById("hoverMsg")
const list = document.getElementById("todoList")
const deleteAllBtn = document.getElementById("deleteAll")
const taskCounter = document.getElementById("taskCounter")
const filterAll = document.getElementById("filterAll")
const filterActive = document.getElementById("filterActive")
const filterCompleted = document.getElementById("filterCompleted")

let tasks = []

function renderList() {
    list.innerHTML = ""
    const filter = document.querySelector(".filter-active")?.id

    tasks.forEach((task, index) => {
        if (
            filter === "filterActive" && task.completed ||
            filter === "filterCompleted" && !task.completed
        ) return

        const li = document.createElement("li")
        li.className = task.completed ? "completed" : ""

        const span = document.createElement("span")
        span.textContent = task.text
        li.appendChild(span)

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        editBtn.classList.add("editBtn")
        editBtn.onclick = () => {
            const newText = prompt("Редагувати завдання:", task.text)
            if (newText && newText.trim() && !tasks.some((t, i) => i !== index && t.text === newText.trim())) {
                task.text = newText.trim()
                renderList()
            }
        }
        li.appendChild(editBtn)

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.onclick = () => {
            tasks.splice(index, 1)
            renderList()
        }
        li.appendChild(deleteBtn)

        li.onclick = (e) => {
            if (e.target.tagName !== "BUTTON") {
                task.completed = !task.completed
                renderList()
            }
        }

        list.appendChild(li)
    })

    const activeCount = tasks.filter(t => !t.completed).length
    taskCounter.textContent = `Активних завдань: ${activeCount}`
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const text = input.value.trim()
    if (text === "" || tasks.some(t => t.text === text)) return

    tasks.push({ text, completed: false })
    input.value = ""
    charCount.textContent = "Entered symbols: 0"
    renderList()
})

input.addEventListener("input", (event) => {
    charCount.textContent = `Entered symbols: ${event.target.value.length}`
})

button.addEventListener("mouseover", () => {
    hoverMsg.textContent = "Click to add text"
})

button.addEventListener("mouseout", () => {
    hoverMsg.textContent = ""
})

deleteAllBtn.addEventListener("click", () => {
    tasks = []
    renderList()
})

filterAll.addEventListener("click", () => {
    setFilter("filterAll")
})

filterActive.addEventListener("click", () => {
    setFilter("filterActive")
})

filterCompleted.addEventListener("click", () => {
    setFilter("filterCompleted")
})

function setFilter(id) {
    document.querySelectorAll("#filterAll, #filterActive, #filterCompleted").forEach(btn => {
        btn.classList.remove("filter-active")
    })
    document.getElementById(id).classList.add("filter-active")
    renderList()
}

// Перший рендер
setFilter("filterAll")
