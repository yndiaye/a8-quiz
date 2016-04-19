$("#q2").hide();
$("#box2").hide();
$("#q3").hide();
$("#box3").hide();
$("#q4").hide();
$("#box4").hide();
$("#q5").hide();
$("#box5").hide();
$("#ans1").hide();
$("#ans2").hide();
$("#ans3").hide();
$("#ans4").hide();
$("#ans5").hide();

$("#sanders1").click(function() {
  $("#ans1").show();
  $("#q2").show();
  $("#box2").show();
});

$("#clinton2").click(function() {
  $("#ans2").show();
  $("#q3").show();
  $("#box3").show();
});

$("#rubio3").click(function() {
  $("#ans3").show();
  $("#q4").show();
  $("#box4").show();
});

$("#trump4").click(function() {
  $("#ans4").show();
  $("#q5").show();
  $("#box5").show();
});

$("#cruz5").click(function() {
  $("#ans5").show();
});