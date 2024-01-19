const menuBtn = () => {
  const main = document.querySelector(".main");

  const headline = document.createElement("p");
  headline.textContent = "Konkan Cave";
  const gibberish = document.createElement("p");
  gibberish.textContent =
    "Come, embark on a culinary adventure with us, and let the waves of flavor carry you away at Konkan Krustacean Cove - where every meal is a voyage and every bite tells a story.";
  const bookButton = document.createElement("button");
  bookButton.textContent = "Book wow wow wow wow wow Now!";

  main.append(headline, gibberish, bookButton);
};

export { menuBtn };
