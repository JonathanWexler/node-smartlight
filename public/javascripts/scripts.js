$(document).ready(function(){
  setBackground();
  $('.submit').click(function(){
    var color = $('.jscolor').css('background-color');
    $('body').css('background-color', color);
    color = color.split(/[,)(]/);
    sendToDB(color[1], color[2], color[3]);
  });
});

function sendToDB (red, green, blue) {
  console.log(`red: ${parseInt(red)}, green: ${parseInt(green)}, blue: ${parseInt(blue)}`);
  $.ajax({
    url: "/api/colors",
    type: "POST",
    data: {red: parseInt(red), green: parseInt(green), blue: parseInt(blue)},
    success: function(){
      console.log("SUCCESS!")
    }
  });
}

function setBackground () {
    $.get('/api/last_color', function(colors, status){ 
    console.log(colors.data);
    $('body').css('background-color', `rgb(${colors.data.red},${colors.data.green},${colors.data.blue})`);
  });
}