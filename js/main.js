/* Show Social Menu */
const shareContainer = document.querySelector(".article-info .share-container");
const socialMediaShare = document.querySelector(".social-media-share");

shareContainer.addEventListener("click", () => {
  socialMediaShare.classList.add("open");
  shareContainer.classList.add("dark-share");
  shareContainer.classList.add("open");
});

/* Show social share  */
