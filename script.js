document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // For Storage (1).html (Annual)
  
  // Retrieve form data here
  var no1 = document.getElementById("no1").value;
  var na1 = document.getElementById("na1").value;
  var yes1 = document.getElementById("yes1").value;

  var no2 = document.getElementById("no2").value;
  var na2 = document.getElementById("na2").value;
  var yes2 = document.getElementById("yes2").value;

  var no3 = document.getElementById("no3").value;
  var na3 = document.getElementById("na3").value;
  var yes3 = document.getElementById("yes3").value;

  var no4 = document.getElementById("no4").value;
  var na4 = document.getElementById("na4").value;
  var yes4 = document.getElementById("yes4").value;

  var no5 = document.getElementById("no5").value;
  var na5 = document.getElementById("na5").value;
  var yes5 = document.getElementById("yes5").value;

  var no6 = document.getElementById("no6").value;
  var na6 = document.getElementById("na6").value;
  var yes6 = document.getElementById("yes6").value;

  var data = {
    no1 ,
  na1 ,
  yes1,
  no2 ,
  na2 ,
  yes2,
  no3 ,
  na3 ,
  yes3,
  no1 ,
  na1 ,
  yes1,
  no5 ,
  na5 ,
  yes5,
  no6 ,
  na6 ,
  yes6,
  }


var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
var dlAnchorElem = document.getElementById('downloadAnchorElem');
dlAnchorElem.setAttribute("href",     dataStr     );
dlAnchorElem.setAttribute("download", "scene.json");
dlAnchorElem.click();
});
