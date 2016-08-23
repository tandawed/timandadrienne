$(document).ready(function() {
  console.log("Ready for the wedding?");
});

$("#venue").on("click", function() {
  console.log("You wanna know where the hotel is?");
  $("#venue-modal").toggle();
  $('#hotel-modal').hide();
  $('#contact-modal').hide();
  $('#rsvp-modal').hide();
  $('#registry-modal').hide();
});

$("#close-venue-modal").on("click", function() {
  console.log("Did you book find the venue?");
  $("#venue-modal").toggle();
});

$("#hotel").on("click", function() {
  console.log("You wanna know where the hotel is?");
  $("#hotel-modal").toggle();
  $('#contact-modal').hide();
  $('#rsvp-modal').hide();
  $('#venue-modal').hide();
  $('#registry-modal').hide();
});

$("#close-hotel-modal").on("click", function() {
  console.log("Did you book your hotel?");
  $("#hotel-modal").toggle();
});

$("#registry").on("click", function() {
  console.log("You wanna know where the hotel is?");
  $("#venue-modal").hide();
  $('#hotel-modal').hide();
  $('#contact-modal').hide();
  $('#rsvp-modal').hide();
  $('#registry-modal').toggle();
});

$("#close-registry-modal").on("click", function() {
  console.log("Did you book find the venue?");
  $("#registry-modal").toggle();
});

$("#contact").on("click", function() {
  console.log("You wanna know where the hotel is?");
  $("#contact-modal").toggle();
  $('#hotel-modal').hide();
  $('#rsvp-modal').hide();
  $('#venue-modal').hide();
  $('#registry-modal').hide();
});

$("#close-contact-modal").on("click", function() {
  console.log("Did you book your hotel?");
  $("#contact-modal").toggle();
});

$("#rsvp").on("click", function() {
  console.log("You wanna know where the hotel is?");
  $("#rsvp-modal").toggle();
  $('#contact-modal').hide();
  $('#hotel-modal').hide();
  $('#venue-modal').hide();
  $('#registry-modal').hide();
});

$("#close-rsvp-modal").on("click", function() {
  console.log("Did you book your hotel?");
  $("#rsvp-modal").toggle();
});

$("#us").on("click", function() {
  console.log("enough with the information!");
  $('#contact-modal').hide();
  $('#rsvp-modal').hide();
  $('#hotel-modal').hide();
  $('#venue-modal').hide();
  $('#registry-modal').hide();
})
