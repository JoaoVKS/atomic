//PADRÃO
$(document).ready(function() {
    init();

});

$.fn.redraw = function(){
    return $(this).each(function(){
    var redraw = this.offsetHeight;
});
};

  
$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
        move_left();
        console.log('left'); // left
        break;

        case 38:
        move_up();
        console.log('up'); // up
        break;

        case 39:
        move_right();
        console.log('right'); // right
        break;

        case 40:
        move_down();
        console.log('down'); // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

//FUNCTIONS

function move_left()
{
   var tempx = $("#x").val();
   var tempy = $("#y").val();
   tempy = parseInt(tempy)-parseInt(1);
   move_to(tempx, tempy);   
}

function move_right()
{
   var tempx = $("#x").val();
   var tempy = $("#y").val();
   tempy = parseInt(tempy)+parseInt(1);
   move_to(tempx, tempy);   
}

function move_down()
{
   var tempx = $("#x").val();
   var tempy = $("#y").val();
   tempx = parseInt(tempx)+parseInt(1);
   move_to(tempx, tempy);   
}
function move_up()
{
   var tempx = $("#x").val();
   var tempy = $("#y").val();
   tempx = parseInt(tempx)-parseInt(1);
   move_to(tempx, tempy);   
}

function init()
{
  $("#x").val(0);
  $("#y").val(0);
  constroi(20, 20);
  console.log("Started!");
  set_energy(100);
  move_to(0, 0);
  
}

function constroi(limit_y, limit_x)
{
  var i = 0
  var x = 0;
  var tt = "<table border='0' class='field' id='screen' style=''>";
  for(i = 0; i<limit_y; i++)
  {
    tt += "<tr>";
    for(x = 0; x<limit_x; x++)
    {
      tt += "<td x='"+i+"' y='"+x+"'></td>";
    }
    
    tt += "</tr>";
  }
  tt += "</table>";
  $(".body").append(tt);
  console.log("Created! " + limit_y + "-" + limit_x);
}

function set_energy(e)
{
  $("#energy").val(e);
  console.log("energy: " + e);
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function move_to(x, y)
{
  var classe = $("td[x="+x+"][y="+y+"]").attr("class");

  if($("td[x="+x+"][y="+y+"]").length > 0 && classe != "wall")
  {
    var tempx = $("#x").val();
    var tempy = $("#y").val();
    //$("td[x="+tempx+"][y="+tempy+"]").attr('style', 'background-color:#484848');
    $("td[x="+tempx+"][y="+tempy+"]").attr("class", "rastro");
    $("td[x="+tempx+"][y="+tempy+"]").text('');
    $("#x").val(x);
    $("#y").val(y);
    //$("td[x="+x+"][y="+y+"]").attr('style', 'background-color:blue');

  
    $("td[x="+x+"][y="+y+"]").attr("class", "aqui");
    $("td[x="+x+"][y="+y+"]").text('');
    console.log("location: x-" + x + " y-" + y);
    var e = parseInt($("#energy").val()) - 1;
    set_energy(e);
    if(e <= 0)
    {
      console.log("Faleceu!");
      alert("GAME OVER!");
      location.reload();
    }
  }
}
