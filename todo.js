const form = document.getElementById("todoForm")
const input = document.getElementById("todoInput")
const button = document.getElementById("addBtn")
const charCount = document.getElementById("charCount")
const hoverMsg = document.getElementById("hoverMsg")
const list = document.getElementById("todoList")


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let text = input.value.trim()
    if(text===""){
        return
    }
    const li = document.createElement("li")
    li.textContent = text



    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("deleteBtn")
    li.appendChild(deleteBtn)



    
    list.appendChild(li)
    input.value = ""
    charCount.textContent = 0
    input.focus()
})

list.addEventListener("click", (event)=>{
    const targer = event.target;
    if(targer.classList.contains("deleteBtn"))
    {
        const li = targer.parentElement
        list.removeChild(li)
        return
    }
    if(targer.tagName === "LI")
    {
        // if(!targer.classList.contains("deleteBtn"))
        // {
            
        // }
        targer.classList.toggle("completed")
        
    }
})

input.addEventListener("input", (event)=>{
    charCount.textContent = `Entered symbols: ${event.target.value.length}`
})

button.addEventListener("mouseover", ()=>{
    hoverMsg.textContent = "Click to add text"
})

button.addEventListener("mouseout", ()=>{
    hoverMsg.textContent = ""
})

list.addEventListener("mouseover", (event)=>{
    const targer = event.target;
    if(targer.classList.contains("deleteBtn"))
    {
        hoverMsg.textContent = "Click to delete li"
    }
})


list.addEventListener("mouseout", (event)=>{
    const targer = event.target;
    if(targer.classList.contains("deleteBtn"))
    {
        hoverMsg.textContent = ""
    }
})
