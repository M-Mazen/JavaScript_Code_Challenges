/*
  WRITE YOUR SOLUTION HERE
*/
const menuNode = document.querySelector("#menu");

const vegetarianMenu=[
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];
const option=  (option) => option.isVegetarian === true;
const vegetarianOptions = vegetarianMenu.filter(option);
vegetarianOptions.forEach(option => {
  console.log(option)
  let dish = document.createElement("li");
  dish.textContent = option.name;
  menuNode.appendChild(dish);
});
