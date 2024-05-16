function isQuestion(phrase) {
    return phrase.endsWith("?");
}

function isYelling(phrase) {
    return phrase === phrase.toUpperCase() && phrase.trim() !== "";
}

function isTalkingAboutFortnite(phrase) {
    return phrase.toLowerCase().includes("fortnite");
}

function acneBot() {
    const userInput = document.getElementById("userInput").value;

    if (userInput.trim() === "") {
        document.getElementById("botResponse").innerText = "t'es en PLS ?";
    } else if (isQuestion(userInput)) {
        document.getElementById("botResponse").innerText = "Ouais Ouais...";
    } else if (isYelling(userInput)) {
        document.getElementById("botResponse").innerText = "Pwa, calme-toi...";
    } else if (isTalkingAboutFortnite(userInput)) {
        document.getElementById("botResponse").innerText = "on s' fait une partie soum-soum ?";
    } else {
        document.getElementById("botResponse").innerText = "balek.";
    }
}