const btn = document.getElementById("button");

document
  .getElementById("contactform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_t9j2rzw";
    const templateID = "template_ioka5y9";

    emailjs
      .sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = "Send Email";
        alert("Message sent successfully!");
      })
      .catch((err) => {
        btn.value = "Send Email";
        alert("Failed to send message: " + JSON.stringify(err));
      });
  });
