const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.querySelector("#log-window");
const filePath = document.getElementById('logFilePath').value;

// connection.addEventListener('open', () => {
connection.onopen = () => {
    if(filePath){
        connection.send(filePath);
    }else{
        connection.send('Hello from the client!');
    }
}

connection.onmessage = event => {
    const logs = event.data.split("\n").join("<hr>");
    logWindow.innerHTML = logs;
}