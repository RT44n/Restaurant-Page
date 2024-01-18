import "./index.css";
import { homeButton } from "./homeButton";

function homePage() {
  const content = document.createElement("div");
  content.classList.toggle("content");
  document.body.append(content);

  const header = document.createElement("div");
  header.classList.toggle("header");
  content.append(header);

  const headerTitle = document.createElement("div");
  headerTitle.classList.toggle("headerTitle");
  headerTitle.textContent = "Konkan Cave";
  const headerButtons = document.createElement("div");
  headerButtons.classList.toggle("headerButtons");
  header.append(headerTitle, headerButtons);

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", console.log("hallo"));
  homeButton.classList.toggle("headerButton");
  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.classList.toggle("headerButton");
  const aboutButton = document.createElement("button");
  aboutButton.textContent = "About Us";
  aboutButton.classList.toggle("headerButton");
  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact Us";
  contactButton.classList.toggle("headerButton");

  headerButtons.append(homeButton, menuButton, aboutButton, contactButton);
}
export { homePage };
