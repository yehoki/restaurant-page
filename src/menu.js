const makeMenuItem = (heading, ) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  const menuHeading = document.createElement("h3");
  menuHeading.textContent = heading;
  menuItem.append(menuHeading);
};

const makeMenuPage = () => {
  const main = document.createElement("main");
  main.classList.add("menu-page");
  main.innerHTML = "1234";

  const salmon = document.createElement("div");
  salmon.classList.add("menu-item");
  const salmonHeading = document.create;

  return main;
};

export { makeMenuPage };
