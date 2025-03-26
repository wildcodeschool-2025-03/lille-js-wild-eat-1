const restaurantsContainer = document.querySelector(".restaurantsContainer");
const nbRestaurants = document.querySelector(".nbRestaurants");
const veggieBtn = document.querySelector("#végétarienBtn");
const asianBtn = document.querySelector("#asiatiqueBtn");
const burgerBtn = document.querySelector("#burgerBtn");
const halalBtn = document.querySelector("#halalBtn");
const filterButtons = document.querySelectorAll(".filterBtn");
const resetBtn = document.querySelector(".resetBtn");

// Code used to keep the added restaurants in the storage and display the updated list
// localStorage.clear();
const storedRestaurants = JSON.parse(localStorage.getItem("restaurants"));
restaurants =
  storedRestaurants && storedRestaurants.length
    ? storedRestaurants
    : restaurants;

// The function that creates a restaurant card based on a restaurant of our array
const createRestaurantCard = (restaurant) => {
  const restaurantCard = document.createElement("li");
  restaurantCard.classList.add("restaurantCard");
  restaurantsContainer.appendChild(restaurantCard);
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");
  restaurantCard.appendChild(imgContainer);
  const restaurantImg = document.createElement("img");
  restaurantImg.src =
    restaurant.img || "assets/img/restaurantImgPlaceholder.webp";
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

// Code used to add a restaurant to the list using the form
const restaurantForm = document.querySelector(".restaurantForm");
restaurantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let restaurant = {
    name: document.querySelector("#restaurantName").value,
    services: [
      ...document.querySelectorAll(
        'input[name="restaurantServices[]"]:checked'
      ),
    ].map((checkbox) => checkbox.value),
    category: [
      ...document.querySelectorAll(
        'input[name="restaurantCategory[]"]:checked'
      ),
    ].map((checkbox) => checkbox.value),
    website: document.querySelector("#restaurantWebsite").value,
    img: document.querySelector("#restaurantIllustration").value,
  };
  restaurants.push(restaurant);
  localStorage.setItem("restaurants", JSON.stringify(restaurants));
  displayRestaurantsCards(restaurants);
  nbRestaurants.innerText = restaurants.length;
  restaurantForm.reset();
});
