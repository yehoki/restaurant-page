/*----------------------------------------------------
                Home page factory
----------------------------------------------------*/
const makeHomePage = () => {
  const main = document.createElement("main");
  const content = document.createElement("div");
  content.classList.add("home-page");
  content.innerHTML += "<h1>Plank's fine dining</h1>"
  content.innerHTML += "<h3>Think. Imagine. Receive.</h3>"
  content.innerHTML +=
    "<p>Flavours, like you never experienced before</p>";
  content.innerHTML +=
    "<a href='https://www.freepik.com/free-photo/golden-cutlery-with-textile-plate-dark-background-top-view_19182711.htm#query=restaurant&position=18&from_view=keyword&track=sph'>Background image by valeria_aksakova on Freepik</a>";
  main.appendChild(content);
  return main;
};

export default makeHomePage;
