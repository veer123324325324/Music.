document.addEventListener("DOMContentLoaded", function () {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userDetailsDiv = document.getElementById("user-details");

  if (userData) {
    userDetailsDiv.innerHTML = `
            <p>Email: ${userData.email}</p>
            <p>Name: ${userData.name}</p>
            <p>Location: ${userData.location}</p>
            <p>About Me: ${userData.about}</p>
        `;
  } else {
    alert("User data not found. Please sign up first.");
    window.location.href = "signup.html";
  }
});
