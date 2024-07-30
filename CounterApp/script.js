document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton')
    const decrementButton = document.getElementById('decrementButton')

    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
    })
    decrementButton.addEventListener('click', () => {
        count--;
        counterElement.textContent = count;
    })

}) 