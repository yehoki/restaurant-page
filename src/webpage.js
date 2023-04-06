import GithubIcon from "./github-mark.svg";
import { makeAboutPage } from "./about";
import { makeMenuPage } from "./menu";
import makeHomePage from "./home";
/*----------------------------------------------------
                button factory
----------------------------------------------------*/
const makeButton = (className, text) => {
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.id = text.toLowerCase() + "-" + className;
  btn.innerHTML = text;
  return btn;
};

// Functionality for button eventlisteners to change active tab onclick
const resetActiveButton = () => {
  document.querySelectorAll(".header-button").forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
};

const onHeaderButtonClick = (btn) => {
  resetActiveButton();
  btn.classList.add("active");
};

/*----------------------------------------------------
                header factory
----------------------------------------------------*/

const makeHeader = (isHome = true) => {
  const header = document.createElement("header");
  const buttons = document.createElement("div");
  const homeButton = makeButton("header-button", "Home");
  if (isHome === true) {
    homeButton.classList.add("active");
  }
  homeButton.addEventListener("click", () => {
    if (homeButton.classList.contains("active")) return;
    onHeaderButtonClick(homeButton);
    makePage();
  });

  const menuButton = makeButton("header-button", "Menu");
  menuButton.addEventListener("click", () => {
    if (menuButton.classList.contains("active")) return;
    onHeaderButtonClick(menuButton);
    makePage(makeMenuPage());
  });

  const aboutButton = makeButton("header-button", "About");
  aboutButton.addEventListener("click", () => {
    if (aboutButton.classList.contains("active")) return;
    onHeaderButtonClick(aboutButton);
    makePage(makeAboutPage());
  });

  buttons.classList.add("header-buttons");
  buttons.appendChild(homeButton);
  buttons.appendChild(menuButton);
  buttons.appendChild(aboutButton);
  header.appendChild(buttons);
  return header;
};

/*----------------------------------------------------
                footer factory
----------------------------------------------------*/

const makeFooter = () => {
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  const githubLink = document.createElement("a");
  const githubImage = new Image();
  githubImage.src = GithubIcon;
  githubImage.alt = "Github logo";
  githubImage.classList.add("svg");
  githubLink.href = "https://github.com/yehoki/";
  footerText.innerHTML = "Copyright © 2023 yehoki";
  githubLink.appendChild(githubImage);
  footer.appendChild(footerText);
  footer.appendChild(githubLink);

  return footer;
};

function makePage(whichPage = makeHomePage()) {
  document.body.innerHTML = "";
  arguments.length === 0
    ? document.body.appendChild(makeHeader())
    : document.body.appendChild(makeHeader(false)); // Logic to by default begin with the home button as active
  document.body.appendChild(whichPage);
  document.body.appendChild(makeFooter());
}

export { makePage };
