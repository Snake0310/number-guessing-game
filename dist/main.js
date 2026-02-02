"use strict";
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const input = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");
const message = document.getElementById("message");
button.addEventListener("click", () => {
    const guess = Number(input.value);
    attempts++;
    if (!guess) {
        message.textContent = "❌ Please enter a number";
        return;
    }
    if (guess < secretNumber) {
        message.textContent = "📉 Too low!";
    }
    else if (guess > secretNumber) {
        message.textContent = "📈 Too high!";
    }
    else {
        message.textContent = `🎉 Correct! Attempts: ${attempts}`;
        button.disabled = true;
    }
});
