function login() {
  var userType = document.getElementById("userType").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // TODO: Add server-side logic to authenticate user and redirect to the landing page based on userType

  // For now, let's assume a simple redirection to a landing page
  window.location.href =
    userType === "student" ? "student-landing.html" : "proctor-landing.html";
}

