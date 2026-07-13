const workerURL = "https://throbbing-wind-5ba5.vocalvista2012.workers.dev";

const chatButton = document.getElementById("vv-chat-button");
const chatBox = document.getElementById("vv-chat");
const closeBtn = document.getElementById("vv-close");
const sendBtn = document.getElementById("vv-send");
const input = document.getElementById("vv-input");
const messages = document.getElementById("vv-messages");

chatButton.onclick = () => {
    chatBox.style.display = "flex";
};

closeBtn.onclick = () => {
    chatBox.style.display = "none";
};

function addMessage(text, cls) {
    const div = document.createElement("div");
    div.className = cls;
    div.innerHTML = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

async function sendMessage() {
    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user");
    input.value = "";

    const typing = document.createElement("div");
    typing.className = "bot";
    typing.id = "typing";
    typing.innerHTML = "🤖 Typing...";
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    try {

        const res = await fetch(workerURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await res.json();

        document.getElementById("typing").remove();

        addMessage(data.reply, "bot");

    } catch (e) {

        document.getElementById("typing").remove();

        addMessage("❌ Unable to connect to VocalVista AI.", "bot");

    }

}

sendBtn.onclick = sendMessage;

input.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        sendMessage();
    }
});
