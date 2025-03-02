function countUp(clas, val) {
    let elements = document.querySelectorAll(`.${clas}`);
    elements.forEach(element => {
        let count = 0;
        let interval = setInterval(() => {
            element.innerHTML = count++;
            if (count > val) {
                clearInterval(interval);
            }
        }, 1);
    });
}

countUp('count1', 232)
countUp('count2', 521)
countUp('count3', 1453)
countUp('count4', 32)

let contnt = document.querySelector(".fitem")
let head = document.querySelector(".head")
let description = document.querySelector(".description")

description.style.display = "none"

head.addEventListener('click', () => {
    description.style.display = "block"
    contnt.style.backgroundColor = "#007bff"
    contnt.style.color = "white"
    head.style.color = "white"
})
head.addEventListener('dblclick', () => {
    description.style.display = "none"
    contnt.style.backgroundColor = "white"
    head.style.color = "#153655"
})
