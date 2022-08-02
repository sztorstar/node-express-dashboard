const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.querySelector("#log-window");

// connection.addEventListener('open', () => {
connection.onopen = () => {
    connection.send('Hello from the client!');
}

connection.onmessage = event => {
    logWindow.innerHTML = event.data;
}