const articlesContainer = document.querySelector(".articlesContainer");

// The function that creates an article card based on an article of our array
const createBlogArticle = (article) => {
  const articleCard = document.createElement("li");
  articleCard.classList.add("articleCard");
  articlesContainer.appendChild(articleCard);
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("articleImgContainer");
  articleCard.appendChild(imgContainer);
  const articleImg = document.createElement("img");
  articleImg.src = article.img || "assets/img/restaurantImgPlaceholder.webp";
  articleImg.alt = `Illustration du restaurant`;
  imgContainer.appendChild(articleImg);
  const articleTitle = document.createElement("h4");
  articleTitle.innerText = `${article.title}`;
  articleCard.appendChild(articleTitle);
  const articleDate = document.createElement("p");
  articleDate.innerText = `${article.date}`;
  articleCard.appendChild(articleDate);
  const articleContent = document.createElement("p");
  articleContent.innerHTML = `${article.content}`;
  articleCard.appendChild(articleContent);
  articleCard.appendChild(createLikeSection(article));
  return articleCard;
};

const createLikeSection = (article) => {
  const likeSection = document.createElement("div");
  likeSection.classList.add("likeSection");
  const likeBtn = document.createElement("button");
  likeBtn.classList.add("likeBtn");
  likeBtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
  likeSection.appendChild(likeBtn);
  const likesCounter = document.createElement("p");
  likesCounter.innerText = `${article.nbLikes} likes`;
  likeSection.appendChild(likesCounter);
  likeBtn.addEventListener("click", () => {
    if (article.isLiked === false) {
      article.nbLikes += 1;
      likesCounter.innerText = `${article.nbLikes} likes`;
      likeBtn.classList.add("green");
      article.isLiked = true;
    } else {
      article.nbLikes -= 1;
      likesCounter.innerText = `${article.nbLikes} likes`;
      likeBtn.classList.remove("green");
      article.isLiked = false;
    }
  });
  return likeSection;
};

// The function that displays automatically all the article cards
const displayArticleCards = (blogArticles) => {
  articlesContainer.innerHTML = "";
  blogArticles.forEach((article) => createBlogArticle(article));
};

displayArticleCards(blogArticles);
