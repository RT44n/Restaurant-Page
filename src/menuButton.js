const menuBtn = () => {
  const main = document.querySelector(".main");

  const mainChild = document.createElement("div");
  mainChild.classList.toggle("mainChild");
  main.append(mainChild);

  const bombliCard = document.createElement("div");
  bombliCard.classList.toggle("menuCard");
  const crabCard = document.createElement("div");
  crabCard.classList.toggle("menuCard");
  const clamCard = document.createElement("div");
  clamCard.classList.toggle("menuCard");
  const prawnsCard = document.createElement("div");
  prawnsCard.classList.toggle("menuCard");

  mainChild.append(bombliCard, clamCard, crabCard, prawnsCard);

  const bombliTitle = document.createElement("p");
  bombliTitle.classList.toggle("cardTitle");
  bombliTitle.textContent = "Bombil Fry:  $16";
  const bombliContent = document.createElement("p");
  bombliContent.textContent =
    "Bombay Duck (Bombil) marinated in spices, coated in semolina, and deep-fried until crispy.";
  bombliCard.append(bombliTitle, bombliTitle);

  const crabTitle = document.createElement("p");
  crabTitle.classList.toggle("cardTitle");
  crabTitle.textContent = "Crab Xec-Xec:  $25";
  const crabContent = document.createElement("p");
  crabContent.textContent =
    "Crab cooked in a flavorful coconut and red chili paste, creating a rich and spicy curry.";
  crabCard.append(crabTitle, crabContent);

  const clamTitle = document.createElement("p");
  clamTitle.classList.toggle("cardTitle");
  clamTitle.textContent = "Clams Sukka:  $22";
  const clamContent = document.createElement("p");
  clamContent.textContent =
    "Clams cooked with grated coconut, aromatic spices, and a touch of tamarind, creating a dry and spicy dish.";
  clamCard.append(clamTitle, clamContent);

  const prawnsTitle = document.createElement("p");
  prawnsTitle.classList.toggle("cardTitle");
  prawnsTitle.textContent = "Prawn Balchão:  $20";
  const prawnsContent = document.createElement("p");
  prawnsContent.textContent =
    "Spicy and tangy prawn curry with a rich masala made from red chilies, vinegar, and aromatic spices.";
  prawnsCard.append(prawnsTitle, prawnsContent);
};

export { menuBtn };
