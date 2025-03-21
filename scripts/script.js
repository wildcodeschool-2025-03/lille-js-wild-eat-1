// The container that will contain the list of restaurants
const restaurantsContainer = document.querySelector(".restaurantsContainer");

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
  return restaurantCard;
};

// The function that displays automatically all the restaurant cards
const displayRestaurantsCards = (restaurants) => {
  restaurantsContainer.innerHTML = "";
  restaurants.forEach((restaurant) => createRestaurantCard(restaurant));
};

displayRestaurantsCards(restaurants);

// Code used to show the number of restaurants available
const nbRestaurants = document.querySelector(".nbRestaurants");
nbRestaurants.innerText = restaurants.length;

// Code used to filter the restaurants and display only the veggie ones when the button is clicked
const veggieRestaurants = restaurants.filter((restaurant) =>
  restaurant.category.includes("Végétarien")
);
const veggieBtn = document.querySelector("#veggieBtn");
veggieBtn.addEventListener("click", () => {
  veggieBtn.classList.add("active");
  asianBtn.classList.remove("active");
  burgerBtn.classList.remove("active");
  halalBtn.classList.remove("active");
  nbRestaurants.innerText = veggieRestaurants.length;
  displayRestaurantsCards(veggieRestaurants);
});

// Code used to filter the restaurants and display only the asian ones when the button is clicked
const asianRestaurants = restaurants.filter((restaurant) =>
  restaurant.category.includes("Asiatique")
);
const asianBtn = document.querySelector("#asianBtn");
asianBtn.addEventListener("click", () => {
  asianBtn.classList.add("active");
  veggieBtn.classList.remove("active");
  burgerBtn.classList.remove("active");
  halalBtn.classList.remove("active");
  nbRestaurants.innerText = asianRestaurants.length;
  displayRestaurantsCards(asianRestaurants);
});

// Code used to filter the restaurants and display only the burger ones when the button is clicked
const burgerRestaurants = restaurants.filter((restaurant) =>
  restaurant.category.includes("Burger")
);
const burgerBtn = document.querySelector("#burgerBtn");
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.add("active");
  veggieBtn.classList.remove("active");
  asianBtn.classList.remove("active");
  halalBtn.classList.remove("active");
  nbRestaurants.innerText = burgerRestaurants.length;
  displayRestaurantsCards(burgerRestaurants);
});

// Code used to filter the restaurants and display only the halal ones when the button is clicked
const halalRestaurants = restaurants.filter((restaurant) =>
  restaurant.category.includes("Halal")
);
const halalBtn = document.querySelector("#halalBtn");
halalBtn.addEventListener("click", () => {
  halalBtn.classList.add("active");
  veggieBtn.classList.remove("active");
  asianBtn.classList.remove("active");
  burgerBtn.classList.remove("active");
  nbRestaurants.innerText = halalRestaurants.length;
  displayRestaurantsCards(halalRestaurants);
});

// Code used to reset the filters and display all the restaurants
const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", () => {
  veggieBtn.classList.remove("active");
  asianBtn.classList.remove("active");
  burgerBtn.classList.remove("active");
  halalBtn.classList.remove("active");
  nbRestaurants.innerText = restaurants.length;
  displayRestaurantsCards(restaurants);
});

const burgerButton = document.querySelector(".classButton");
const listBurger = document.querySelector(".menu-burger");

burgerButton.addEventListener("click", () => {
  const newImage = document.querySelector(".imagebutton");
  listBurger.classList.toggle("open")
  newImage.src = "img/icons8-menu-64.png" ? "img/icons8-croix-50.png" : "img/icons8-menu-64.png";
});
