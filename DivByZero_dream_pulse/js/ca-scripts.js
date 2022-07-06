var customerName = "Alliance Victor";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {
  let title = document.getElementById("title");
  title.textContent = customerName;

  // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
  const tmHeader = document.getElementById("tm-header");
  tmHeader.textContent = customerName;

  // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
  const introHeader = document.getElementById("introheader");
  introHeader.textContent = customerName;
}

function toggleColors() {
  // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
  const tmWhiteRect = document.querySelectorAll(".tm-white-rect");
  tmWhiteRect.forEach((element) => {
    element.className = "tm-blue-rect";
  });
}

function hideElement() {
  //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
  const socLinks = document.getElementById("social-links");
  socLinks.style.display = "none";
  console.log("social links style:", socLinks.style);
}

function addText() {
  //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
  //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
  //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
  //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
  // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
}
