let tg = window.Telegram.WebApp;
tg.expand();

let user = tg.initDataUnsafe.user;
document.getElementById("user").textContent = "Hello, " + user.first_name;

let coins = 0;
document.getElementById("tapBtn").onclick = () => {
    coins += 1;
    document.getElementById("coins").textContent = coins;
    fetch("https://your-backend-url/tap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: user.id })
    });
};