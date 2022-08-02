const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.querySelector("#log-window");

connection.addEventListener('open', () => {
    connection.send('Hello from the client!');
});

connection.addEventListener('message', event => {
    logWindow.innerHTML = event.data;
})