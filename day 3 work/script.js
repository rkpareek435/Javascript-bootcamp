function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
    }

  function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    }
    document.addEventListener('click',changeBackgroundColor)

  let count = 0; // Step 5: Create a JavaScript variable 'count' and set its initial value to 0.

  function updateCounter() { // Step 6: Create a JavaScript function 'updateCounter()' to increment the count and update the display.
    count++;
    document.getElementById('count').textContent = count;
    } 
