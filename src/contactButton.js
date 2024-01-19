const contactBtn = () => {
  const main = document.querySelector(".main");

  const message = document.createElement("div");
  const address = document.createElement("div");
  const email = document.createElement("div");
  const hours = document.createElement("div");
  const sMedia = document.createElement("div");
  const suggestions = document.createElement("div");

  main.append(message, address, email, hours, sMedia, suggestions);

  let messageTitle = "Contact Us";
  let messageContent =
    "Thank you for considering Konkan Krustacean Cove! We're thrilled to connect with you. Whether you have inquiries about our menu, reservations, or anything else, our team is here to assist you. Feel free to reach out through the following channels:";

  let addressTitle = "Visit Us";
  let addressContent =
    "Konkan Krustacean Cove \n [Street Address] \n [ City, State, ZIP Code]";

  let emailTitle = "Email Us:";
  let emailContent =
    "General Inquiries: info@konkankrustaceancove.com \n Reservations: reservations@konkankrustaceancove.com";

  let hourTitle = "Opening Hours:";
  let hourContent = "Monday to Sunday: 11:00 AM - 10:00 PM";

  let socialMediaTitle = "Connect on Social Media:";
  let socialMediaContent =
    "Follow us on [Social Media Platforms] for the latest updates, promotions, and a glimpse into the culinary delights waiting for you at Konkan Krustacean Cove.";

  let suggestionsTitle = "Feedback and Suggestions:";
  let suggestionsContent =
    "We value your feedback. If you've dined with us recently or have suggestions to enhance your experience, please share your thoughts at feedback@konkankrustaceancove.com. \n Our dedicated team looks forward to serving you and ensuring your experience with Konkan Krustacean Cove is nothing short of exceptional. Thank you for choosing us—we can't wait to welcome you!";

  const mesTitle = document.createElement("p");
  mesTitle.classList.toggle("subTitle");
  mesTitle.textContent = messageTitle;
  const mesContent = document.createElement("p");
  mesContent.classList.toggle("subContent");
  mesContent.textContent = messageContent;
  message.append(mesTitle, mesContent);

  const addTitle = document.createElement("p");
  addTitle.classList.toggle("subTitle");
  addTitle.textContent = addressTitle;
  const addContent = document.createElement("p");
  addContent.classList.toggle("subContent");
  addContent.textContent = addressContent;
  address.append(addTitle, addContent);

  const emTitle = document.createElement("p");
  emTitle.classList.toggle("subTitle");
  emTitle.textContent = emailTitle;
  const eContent = document.createElement("p");
  eContent.classList.toggle("subContent");
  eContent.textContent = emailContent;
  email.append(emTitle, eContent);

  const hTitle = document.createElement("p");
  hTitle.classList.toggle("subTitle");
  hTitle.textContent = hourTitle;
  const hContent = document.createElement("p");
  hContent.classList.toggle("subContent");
  hContent.textContent = hourContent;
  hours.append(hTitle, hContent);

  const smTitle = document.createElement("p");
  smTitle.classList.toggle("subTitle");
  smTitle.textContent = socialMediaTitle;
  const smContent = document.createElement("p");
  smContent.classList.toggle("subContent");
  smContent.textContent = socialMediaContent;
  sMedia.append(smTitle, smContent);

  const sugTitle = document.createElement("p");
  sugTitle.classList.toggle("subTitle");
  sugTitle.textContent = suggestionsTitle;
  const sugContent = document.createElement("p");
  sugContent.classList.toggle("subContent");
  sugContent.textContent = suggestionsContent;
  suggestions.append(sugTitle, sugContent);
};

export { contactBtn };
