// console.log("home test");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const name = document.getElementById("name").value.trim();
  const country = document.getElementById("country").value.trim();
  const email = document.getElementById("email").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const arrival = document.getElementById("arrival").value;
  const departure = document.getElementById("departure").value;

  // Get hotel category checkboxes
  const hotelCategories = document.querySelectorAll('input[name="hotel_category"]:checked');

  // Regular expressions for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const whatsappPattern = /^\+?[0-9]{7,15}$/; // Accepts international format with optional '+' and between 7-15 digits

  // Validation checks
  let errorMessage = "";

  if (!name) {
    errorMessage += "Please enter your name.\n";
  }

  if (!country) {
    errorMessage += "Please enter your country.\n";
  }

  if (!emailPattern.test(email)) {
    errorMessage += "Please enter a valid email address.\n";
  }

  if (!whatsappPattern.test(whatsapp)) {
    errorMessage += 'Please enter a valid WhatsApp number. It should include only digits and an optional "+" sign.\n';
  }

  if (!arrival) {
    errorMessage += "Please select an arrival date.\n";
  }

  if (!departure) {
    errorMessage += "Please select a departure date.\n";
  }

  if (new Date(arrival) > new Date(departure)) {
    errorMessage += "Departure date must be after the arrival date.\n";
  }

  if (hotelCategories.length === 0) {
    errorMessage += "Please select at least one hotel category.\n";
  }

  if (errorMessage) {
    alert(errorMessage);
    return;
  }

  // If all validations pass, prepare data for submission
  const formData = new FormData(this);
  
  // Example AJAX submission using Fetch API
  fetch('/inquery', { // Replace with your actual endpoint
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    alert("Form submitted successfully!");
    this.reset(); // Reset the form after successful submission
  })
  .catch(error => {
    console.error('Error:', error);
    alert("There was an error submitting the form. Please try again.");
  });
});


