document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed"); // спрацює тоді, коли вся сторінка загрузиться
})
const clickBtn = document.getElementById('clickBtn');

// clickBtn.onclick = () => {
//     alert("Button clicked!")
// }

function handleClick()
{
    alert("Button clicked!");
}

clickBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log(event.type + ` on ${event.currentTarget}`);
    console.log(`Coord : ${event.clientX}, ${event.clientY}`);
})