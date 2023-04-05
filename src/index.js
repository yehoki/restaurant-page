import "./style.css";
import GithubIcon from "./github-mark.svg";

/*----------------------------------------------------
                button factory
----------------------------------------------------*/

const makeButton = (className, text) => {
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.innerHTML = text;
  return btn;
};

/*----------------------------------------------------
                header factory
----------------------------------------------------*/

const makeHeader = () => {
  const header = document.createElement("header");
  const buttons = document.createElement("div");
  const homeButton = makeButton("header-button", "Home");
  const menuButton = makeButton("header-button", "Menu");
  const aboutButton = makeButton("header-button", "About");
  buttons.classList.add("header-buttons");
  buttons.appendChild(homeButton);
  buttons.appendChild(menuButton);
  buttons.appendChild(aboutButton);
  header.appendChild(buttons);
  return header;
};

/*----------------------------------------------------
                Index page factory
----------------------------------------------------*/

const makeIndexPage = () => {
    const main = document.createElement('main');
    return main;
}

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

const makeDOM = (mainSection) => {
  document.body.appendChild(makeHeader());
  document.body.appendChild(mainSection);
  document.body.appendChild(makeFooter());
};


const removeDOM = () => {
    document.body.childNodes.forEach((child) => document.body.removeChild(child));
}

makeDOM(makeIndexPage());

export {
    makeDOM,
    removeDOM
}