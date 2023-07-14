var buns = ["regular", "quater", "potato", "bigmac"];
var garnishes = ["cilantro","ginger","garlic","chilli"];
var cheeses = ["cheddar", "mozzarella", "shreded cheese"];
var sauces = ["mayonnaise", "mustard", "ketchup", "habenaro", "ranch","big mac"];
var patty = ["regmeat", "quaters", "junior","McChiken","grilled chiken"];
var pattyCount = ["single", "double", "triple"];
var vegetables = ["crispy onions","lettuce", "tomato", "onion", "pickles"];

function getRandomOption(options) {
  var randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function createHamburger() {
  var bun = getRandomOption(buns);
  var garnish = [getRandomOption(garnishes), getRandomOption(garnishes)];
  var cheese = getRandomOption(cheeses);
  var sauce = getRandomOption(sauces);
  var meat = getRandomOption(patty);
  var patties = getRandomOption(pattyCount);
  var randomVegies = [getRandomOption(vegetables), getRandomOption(vegetables), getRandomOption(vegetables)];
  return {
    bun: bun,
    garnish: garnish,
    cheese: cheese,
    sauce: sauce,
    meat: meat,
    patties: patties,
    vegetables: randomVegies,
    describe: function() {
      var description = "This hamburger has got a " + bun + " bun, ";
      description += "Ganished with " + garnish.join(", ") + " , ";
      description += " with a slice of " + cheese + " cheese, ";
      description += "and light " + sauce + " sauce, ";
      description += "with juicy " + patties + " " + meat + " patty ";
      description += "and is filled with worlds best " + randomVegies.join(", ") + ".";
      return description;
    }
  };
}

function createAndDescribeHamburger() {
  var myHamburger = createHamburger();
  var descriptionElement = document.getElementById("description");
  descriptionElement.textContent = myHamburger.describe();
}