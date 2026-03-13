
const joinForm = document.getElementById("join-form");
if (joinForm) {
  joinForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    alert("Thanks for joining our club!");
    joinForm.reset();
  });
}
