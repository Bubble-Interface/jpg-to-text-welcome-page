// Check if user has visited before
const hasVisited = localStorage.getItem("hasVisited");

// If first time -> show confetti
if (!hasVisited) {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Mark that they visited
    localStorage.setItem("hasVisited", "true");
}
