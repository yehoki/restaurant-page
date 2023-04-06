const makeMenuItem = (heading, menuPrice, menuDescription) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  const menuHeading = document.createElement("h3");
  menuHeading.textContent = heading + " " + menuPrice;
  menuItem.append(menuHeading);
  const description = document.createElement("p");
  description.textContent = menuDescription;
  menuItem.appendChild(description);
  return menuItem;
};

const makeMenuPage = () => {
  const main = document.createElement("main");
  main.classList.add("menu-page");
  main.appendChild(
    makeMenuItem(
      "Salmon & Vegetables",
      "£11.25",
      "Fried Salmon with fresh vegetables and variety of sauces."
    )
  );
  main.appendChild(
    makeMenuItem(
      "Cod & Fries",
      "£8.90",
      "U.K. style 'Fish & Chips' served with mushy peas and curry sauce."
    )
  );
  main.appendChild(
    makeMenuItem(
      "Vegeterian Grain & Bean Bowl",
      "£12.90",
      "Vegetarian bowl of grains and beans, served with a variety of fresh vegetables."
    )
  );
  return main;
};

export { makeMenuPage };
