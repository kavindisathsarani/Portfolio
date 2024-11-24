let currentFeedback = 0;

function showFeedback(index) {
  const feedbackCards = document.querySelectorAll(".feedback-card");
  feedbackCards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) {
      card.classList.add("active");
    }
  });
}

function changeFeedback(direction) {
  const feedbackCards = document.querySelectorAll(".feedback-card");
  currentFeedback =
    (currentFeedback + direction + feedbackCards.length) % feedbackCards.length;
  showFeedback(currentFeedback);
}
