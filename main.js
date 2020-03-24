
let section = document.createElement("section")
for (let i = 0; i < 100; i++) {
    let div = document.createElement("div")
    section.appendChild(div)
    section.id = "snakeField"
    div.className = "item"


}
document.body.appendChild(section)

for (let i = 0; i < document.getElementsByClassName("item").length; i++) {
    document.getElementsByClassName("item")[i].addEventListener("mouseover", (e) => {
        e.target.style.background = "orange"
        setTimeout(() => {
            e.target.style.background = "lightblue"
        }, 500)
    })
}

setTimeout()