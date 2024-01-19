import "./index.css";
import { homeBtn } from "./homeButton";
import { removeDivs } from "./removeDivs";
import { menuBtn } from "./menuButton";
import { contactBtn } from "./contactButton";

function homePage() {
  const content = document.createElement("div");
  content.classList.toggle("content");
  document.body.append(content);

  const header = document.createElement("div");
  header.classList.toggle("header");
  const main = document.createElement("div");
  main.classList.toggle("main");

  content.append(header, main);

  const headerTitle = document.createElement("div");
  headerTitle.classList.toggle("headerTitle");
  headerTitle.textContent = "Konkan Cave";
  const headerButtons = document.createElement("div");
  headerButtons.classList.toggle("headerButtons");
  header.append(headerTitle, headerButtons);

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", () => {
    removeDivs();
    homeBtn();
  });

  homeButton.classList.toggle("headerButton");
  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.classList.toggle("menuBtn");
  menuButton.addEventListener("click", () => {
    removeDivs();
    menuBtn();
  });
  menuButton.classList.toggle("headerButton");

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact Us";
  contactButton.classList.toggle("headerButton");
  contactButton.addEventListener("click", () => {
    removeDivs();
    contactBtn();
  });

  headerButtons.append(homeButton, menuButton, contactButton);
  homeBtn();
}

export { homePage };
