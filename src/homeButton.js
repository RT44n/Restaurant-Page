function homeButton() {
  const content = document.querySelector(".content");
  const main = document.createElement("div");
  main.classList.toggle("main");
  content.append(main);

  const headline = document.createElement("p");
  headline.textContent = "Konkan Cave";
  const gibberish = document.createElement("p");
  gibberish.textContent =
    "Come, embark on a culinary adventure with us, and let the waves of flavor carry you away at Konkan Krustacean Cove - where every meal is a voyage and every bite tells a story.";
  const bookButton = document.createElement("button");
  bookButton.textContent = "Book Now!";

  main.append(headline, gibberish, bookButton);
}

export { homeButton };
