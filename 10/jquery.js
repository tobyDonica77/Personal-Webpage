let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitBio").innerHTML = gitObject.bio;
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/tobyDonica77", true);
gitHubRequest.send();


$(document).ready(function(){
  $("p").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "blue");
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '250px'});
  });
});