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
  const likeSection = document.createElement("p");
  likeSection.innerHTML = `<i class="fa-regular fa-thumbs-up likeBtn"></i> ${article.nbLikes} likes`;
  likeSection.classList.add("likeSection");
  articleCard.appendChild(likeSection);
  return articleCard;
};

// The function that displays automatically all the article cards
const displayArticleCards = (blogArticles) => {
  articlesContainer.innerHTML = "";
  blogArticles.forEach((article) => createBlogArticle(article));
};

displayArticleCards(blogArticles);
