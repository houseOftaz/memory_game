
const valueCounter = document.querySelector('.value-counter');
const incrementBtn = document.querySelector('.increment-btn');
const decrementBtn = document.querySelector('.decrement-btn');

let count = 0;

function changeCounter() {
    valueCounter.textContent = count
}

incrementBtn.addEventListener("click", () => {
    count++;
    console.log("hello")
    changeCounter();
})

decrementBtn.addEventListener("click", () => {
    count--;
    valueCounter.textContent = count;
})

changeCounter()
