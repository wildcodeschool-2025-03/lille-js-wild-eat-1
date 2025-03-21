const restaurantsContainer = document.querySelector(".restaurantsContainer");
const burgerButton = document.querySelector(".classButton");
const nbRestaurants = document.querySelector(".nbRestaurants");
const listBurger = document.querySelector(".menu-burger");
const veggieBtn = document.querySelector("#végétarienBtn");
const asianBtn = document.querySelector("#asiatiqueBtn");
const burgerBtn = document.querySelector("#burgerBtn");
const halalBtn = document.querySelector("#halalBtn");
const filterButtons = document.querySelectorAll(".filterBtn");
const resetBtn = document.querySelector(".resetBtn");

// Code used for the burger menu
burgerButton.addEventListener("click", () => {
  const newImage = document.querySelector(".imagebutton");
  listBurger.classList.toggle("open");
  newImage.src = newImage.src.includes("img/icons8-menu-64.png")
    ? "img/icons8-croix-50.png"
    : "img/icons8-menu-64.png";
});

// The function that creates a restaurant card based on a restaurant of our array
const createRestaurantCard = (restaurant) => {
  const restaurantCard = document.createElement("li");
  restaurantCard.classList.add("restaurantCard");
  restaurantsContainer.appendChild(restaurantCard);
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");
  restaurantCard.appendChild(imgContainer);
  const restaurantImg = document.createElement("img");
  restaurantImg.src = restaurant.img
    ? `${restaurant.img}`
    : "img/restaurantImgPlaceholder.webp";
  restaurantImg.alt = `Illustration du restaurant ${restaurant.name}`;
  imgContainer.appendChild(restaurantImg);
  const restaurantName = document.createElement("h4");
  restaurantName.innerText = `${restaurant.name}`;
  restaurantCard.appendChild(restaurantName);
  const restaurantCategory = document.createElement("p");
  restaurantCategory.innerHTML = `Ce restaurant propose des plats: <span class="italic"> ${restaurant.category.join(
    ", "
  )}</span>`;
  restaurantCard.appendChild(restaurantCategory);
  const restaurantServices = document.createElement("p");
  restaurantServices.innerHTML = `Services : <span class="italic"> ${restaurant.services.join(
    ", "
  )}</span>`;
  restaurantCard.appendChild(restaurantServices);
  const restaurantBtn = document.createElement("button");
  restaurantBtn.innerHTML = `<a href="${restaurant.website}" target="_blank">Voir le site web</a>`;
  restaurantCard.appendChild(restaurantBtn);
  resetBtn.classList.add("active");
  return restaurantCard;
};

// The function that displays automatically all the restaurant cards
const displayRestaurantsCards = (restaurants) => {
  restaurantsContainer.innerHTML = "";
  restaurants.forEach((restaurant) => createRestaurantCard(restaurant));
};

// We display all the restaurants when the site is opened
displayRestaurantsCards(restaurants);

//We show the number of restaurants that are listed on the page
nbRestaurants.innerText = restaurants.length;

// Code used to filter the restaurants by category with the buttons
const filterRestaurants = (category) => {
  const filteredRestaurants = category
    ? restaurants.filter((restaurant) => restaurant.category.includes(category))
    : restaurants;

  displayRestaurantsCards(filteredRestaurants);

  filterButtons.forEach((btn) => btn.classList.remove("active"));
  if (category)
    document
      .querySelector(`#${category.toLowerCase()}Btn`)
      .classList.add("active");

  nbRestaurants.innerText = filteredRestaurants.length;
};

veggieBtn.addEventListener("click", () => filterRestaurants("Végétarien"));
asianBtn.addEventListener("click", () => filterRestaurants("Asiatique"));
burgerBtn.addEventListener("click", () => filterRestaurants("Burger"));
halalBtn.addEventListener("click", () => filterRestaurants("Halal"));
resetBtn.addEventListener("click", () => {
  filterRestaurants(null);
  resetBtn.classList.add("active");
});
