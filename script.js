let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");

noBtn.addEventListener("click", function() {
    let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    let newSize = currentSize + 10;

    yesBtn.style.fontSize = newSize + "px";
    yesBtn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 30 - 15}deg)`;
});

yesBtn.addEventListener("click", function() {
    window.location.href = "yes.html";
});