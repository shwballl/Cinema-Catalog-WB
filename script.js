document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("userName").value;
    const rating = document.getElementById("userRating").value;
    const text = document.getElementById("userText").value;

    const newReview = document.createElement("div");
    newReview.classList.add("review-item");

    newReview.innerHTML = `
                <p class="review-author"><strong>${name}</strong> <span class="review-rating">★ ${rating}/10</span></p>
                <p class="review-text">${text}</p>
            `;

    document.getElementById("reviews-list").appendChild(newReview);

    document.getElementById("reviewForm").reset();
  });
