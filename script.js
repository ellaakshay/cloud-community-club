// Handle the Join form submission
const joinForm = document.getElementById("join-form");

if (joinForm) {
  joinForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop actual form submission

    // Simple alert message
    alert("Thanks for joining our club!");

    // Optionally clear the form
    joinForm.reset();
  });
}