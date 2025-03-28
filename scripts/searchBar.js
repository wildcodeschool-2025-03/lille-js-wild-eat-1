function searchArticles() {
    const searchInput = document.getElementById("search")
    const currentValue = searchInput.value.trim().toLowerCase();


    const filtredArticles = blogArticles.filter(article => article.title.toLowerCase().includes(currentValue))
    displayArticleCards(filtredArticles);



    displayArticleCards(filtredArticles);
}




