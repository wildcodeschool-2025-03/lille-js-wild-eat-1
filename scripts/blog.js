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
  articleDate.classList.add("articleDate");
  articleCard.appendChild(articleDate);
  const articleContent = document.createElement("p");
  articleContent.innerHTML = `${article.content}`;
  articleCard.appendChild(articleContent);
  articleCard.appendChild(createLikeSection(article));
  articleCard.appendChild(createCommentSection(article));
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

const createCommentSection = (article) => {
  const commentSection = document.createElement("div");
  commentSection.classList.add("commentSection");
  const commentContainer = document.createElement("ul");
  commentContainer.classList.add("commentContainer");
  article.comments.forEach((comments) => {
    const commentElement = document.createElement("li");
    commentElement.classList.add("commentElement");
    const commentAuthor = document.createElement("div");
    commentAuthor.classList.add("commentAuthor");
    const commentAvatar = document.createElement("img");
    commentAvatar.src = `${comments.avatar}`;
    const commentName = document.createElement("p");
    commentName.classList.add("commentName");
    commentName.innerText = `${comments.author}`;
    commentAuthor.appendChild(commentAvatar);
    commentAuthor.appendChild(commentName);
    const commentText = document.createElement("p");
    commentText.classList.add("commentText");
    commentText.innerText = `"${comments.comment}"`;
    commentElement.appendChild(commentAuthor);
    commentElement.appendChild(commentText);
    commentContainer.appendChild(commentElement);
  });
  commentSection.appendChild(commentContainer);
  commentSection.appendChild(createCommentInput(article));
  return commentSection;
};

const createCommentInput = (article) => {
  const commentForm = document.createElement("form");
  commentForm.classList.add("commentForm");
  const commentInputName = document.createElement("input");
  commentInputName.placeholder = "Votre nom";
  commentInputName.classList.add("commentInputName");
  commentInputName.setAttribute("id", "name");
  commentInputName.required = true;
  commentForm.appendChild(commentInputName);
  const commentInputContent = document.createElement("textarea");
  commentInputContent.placeholder = "Votre commentaire";
  commentInputContent.classList.add("commentInputContent");
  commentInputContent.setAttribute("id", "commentMsg");
  commentInputContent.required = true;
  commentForm.appendChild(commentInputContent);
  const commentBtn = document.createElement("button");
  commentBtn.innerText = "Commenter";
  commentForm.appendChild(commentBtn);
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newComment = {
      author: commentInputName.value,
      avatar: "assets/icons/icons8-avatar-32.png",
      comment: commentInputContent.value,
    };
    article.comments.push(newComment);
    const commentContainer = commentForm.previousElementSibling;
    commentContainer.innerHTML = "";
    article.comments.forEach((comment) => {
      const commentElement = document.createElement("li");
      commentElement.classList.add("commentElement");
      const commentAuthor = document.createElement("div");
      commentAuthor.classList.add("commentAuthor");
      const commentAvatar = document.createElement("img");
      commentAvatar.src = comment.avatar;
      const commentName = document.createElement("p");
      commentName.classList.add("commentName");
      commentName.innerText = comment.author;
      commentAuthor.appendChild(commentAvatar);
      commentAuthor.appendChild(commentName);
      const commentText = document.createElement("p");
      commentText.classList.add("commentText");
      commentText.innerText = `"${comment.comment}"`;
      commentElement.appendChild(commentAuthor);
      commentElement.appendChild(commentText);
      commentContainer.appendChild(commentElement);
    });
    commentForm.reset();
  });
  return commentForm;
};

// The function that displays automatically all the article cards
const displayArticleCards = (blogArticles) => {
  articlesContainer.innerHTML = "";
  blogArticles.forEach((article) => createBlogArticle(article));
};

displayArticleCards(blogArticles);
