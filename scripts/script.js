// The container that will contain the list of restaurants
const restaurantsContainer = document.querySelector(".restaurantsContainer");

// The function that creates a restaurant card based on a restaurant of our array
const createRestaurantCard = (restaurant) => {
  const restaurantCard = document.createElement("li");
  restaurantCard.classList.add("restaurantCard");
  restaurantsContainer.appendChild(restaurantCard);
  const restaurantImg = document.createElement("img");
  restaurantImg.classList.add("restaurantImg");
  restaurantImg.src = `${restaurant.img}`;
  restaurantImg.alt = `Illustration du restaurant ${restaurant.name}`;
  restaurantCard.appendChild(restaurantImg);
  const restaurantName = document.createElement("h3");
  restaurantName.classList.add("restaurantName");
  restaurantName.innerText = `${restaurant.name}`;
  restaurantCard.appendChild(restaurantName);
  const restaurantHours = document.createElement("p");
  restaurantHours.classList.add("restaurantHours");
  restaurantHours.innerText = `Horaires : ${restaurant.hours}`;
  restaurantCard.appendChild(restaurantHours);
  return restaurantCard;
};

// The function that displays automatically all the restaurant cards
const displayRestaurantsCards = (restaurants) => {
  restaurantsContainer.innerHTML = "";
  restaurants.forEach((restaurant) => createRestaurantCard(restaurant));
};

displayRestaurantsCards(restaurants);

// Code used to filter the restaurants and display only the veggie ones when the button is clicked
const veggieRestaurants = restaurants.filter((restaurant) =>
  restaurant.category.includes("veggie")
);
const veggieBtn = document.querySelector("#veggieBtn");
veggieBtn.addEventListener("click", () => {
  displayRestaurantsCards(veggieRestaurants);
});

// Code used to filter the restaurants and display only the asian ones when the button is clicked
const asianRestaurants = restaurants.filter((restaurant) =>
  restaurant.category.includes("asian")
);
const asianBtn = document.querySelector("#asianBtn");
asianBtn.addEventListener("click", () => {
  displayRestaurantsCards(asianRestaurants);
});

// Code used to filter the restaurants and display only the burger ones when the button is clicked
const burgerRestaurants = restaurants.filter((restaurant) =>
  restaurant.category.includes("burger")
);
const burgerBtn = document.querySelector("#burgerBtn");
burgerBtn.addEventListener("click", () => {
  displayRestaurantsCards(burgerRestaurants);
});

// Code used to filter the restaurants and display only the halal ones when the button is clicked
const halalRestaurants = restaurants.filter((restaurant) =>
  restaurant.category.includes("halal")
);
const halalBtn = document.querySelector("#halalBtn");
halalBtn.addEventListener("click", () => {
  displayRestaurantsCards(halalRestaurants);
});

// Code used to reset the filters and display all the restaurants
const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", () => {
  displayRestaurantsCards(restaurants);
});
