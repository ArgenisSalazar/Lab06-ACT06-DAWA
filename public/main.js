const socket = io();

const form = document.getElementById("message-form");
const input = document.getElementById("message-input");
const messagesList = document.getElementById("messages");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = input.value.trim();
    if (message) {
        socket.emit("new-message", message);
        input.value = "";
    }
});

socket.on("message", (message) => {
    const listItem = document.createElement("li");
    listItem.textContent = message;
    messagesList.appendChild(listItem);
});