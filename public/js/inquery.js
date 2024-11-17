// Auto-fill fields from local storage
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("name")) {
    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("country").value = localStorage.getItem("country");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("whatsapp").value =
      localStorage.getItem("whatsapp");
  }
});

const submitInquery = () => {
  const inputGroup = document.getElementById("inquiryInputGroup");

  const data = {};
  inputGroup.querySelectorAll("input, textarea, select").forEach((element) => {
    data[element.name] = element.value;
  });

  console.log(data);
  console.log(new URLSearchParams(data).toString());
};

var value1 = 0;

var value2 = 0;

function increaseValue1(id) {
  var input = document.getElementById(adults);
  value1 = parseInt(input.value, 10);
  value1 = isNaN(value1) ? 0 : value1;
  input.value = value1 + 1;
}

function decreaseValue1(id) {
  var input = document.getElementById(adults);
  var value = parseInt(input.value, 10);
  value1 = isNaN(value1) ? 0 : value1;
  value1 = value1 > 0 ? value1 - 1 : 0;
  input.value = value1;
}

function increaseValue2(id) {
  var input = document.getElementById(children);
  var value2 = parseInt(input.value, 10);
  value2 = isNaN(value2) ? 0 : value2;
  input.value = value2 + 1;
}

function decreaseValue2(id) {
  var input = document.getElementById(children);
  value2= parseInt(input.value, 10);
  value2 = isNaN(value2) ? 0 : value2;
  value2 = value2 > 0 ? value2 - 1 : 0;
  input.value = value2;
}
