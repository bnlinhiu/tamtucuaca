let chatbox = document.getElementById("chatbox");
let input = document.getElementById("msg");

// tải lịch sử từ localStorage
function loadHistory() {
    let history = JSON.parse(localStorage.getItem("tamtucuaca")) || [];
    history.forEach(msg => addMsg(msg));
}

function saveMessage(text) {
    let history = JSON.parse(localStorage.getItem("tamtucuaca")) || [];
    history.push(text);
    localStorage.setItem("tamtucuaca", JSON.stringify(history));
}

function addMsg(text) {
    let div = document.createElement("div");
    div.className = "msg";
    div.textContent = text;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
    let text = input.value.trim();
    if (!text) return;

    addMsg(text);
    saveMessage(text);
    input.value = "";
}

function clearHistory() {
    localStorage.removeItem("tamtucuaca");
    chatbox.innerHTML = "";
}

loadHistory();
