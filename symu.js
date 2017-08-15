//PADRÃO
$(document).ready(function() {
    init();

});

$.fn.redraw = function(){
    return $(this).each(function(){
    var redraw = this.offsetHeight;
});
};

//KEYPRESS
$(document).keypress(function(event){
  //note : pra otimizar podemos passar o elemento 'you' para uma var
  var time = 0;
  var i = 0;
  setInterval(function(){
    if(i < 19){
      move_to(0, i);
      i++
    }
},1800);

});
//FUNCTIONS
function init()
{
  $("#x").val(0);
  $("#y").val(0);
  constroi(20, 20);
  console.log("Started!");
  move_to(0, 0);
  set_energy(100);
}

function constroi(limit_y, limit_x)
{
  var i = 0
  var x = 0;
  var tt = "<table border='1' id='screen' style='width:100%;height:100%'>";
  for(i = 0; i<limit_y; i++)
  {
    tt += "<tr>";
    for(x = 0; x<limit_x; x++)
    {
      tt += "<td x='"+i+"' y='"+x+"'></td>"
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
  }
}
