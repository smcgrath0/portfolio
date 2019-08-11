$(document).ready(startApp);

function startApp (){

  $(".rounded-corners").hover(startGIF, endGIF)
}

function startGIF() {
  console.log(this);
  // $(this).attr("src = img/before-each-exercise.gif");
  this.attributes[1].nodeValue ="img/before-each-exercise.gif";
}

function endGIF(){
  this.attributes[1].nodeValue = "img/downloads-bg.jpg";
}
