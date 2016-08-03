$(document).ready(function() {
  console.log("Ready for the wedding?");
});

$("#hotel").on("click", function() {
  console.log("You wanna know where the hotel is?");
  $("#hotel-modal").toggle();
});

$("#close-hotel-modal").on("click", function() {
  console.log("Did you book your hotel?");
  $("#hotel-modal").toggle();
});

$("#contact").on("click", function() {
  console.log("You wanna know where the hotel is?");
  $("#contact-modal").toggle();
});

$("#close-contact-modal").on("click", function() {
  console.log("Did you book your hotel?");
  $("#contact-modal").toggle();
});

$("#rsvp").on("click", function() {
  console.log("You wanna know where the hotel is?");
  $("#rsvp-modal").toggle();
});

$("#close-rsvp-modal").on("click", function() {
  console.log("Did you book your hotel?");
  $("#rsvp-modal").toggle();
});
