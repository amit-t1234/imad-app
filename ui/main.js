//counter increase button
var counter = 0;
var button = document.getElementById('counter');


button.onclick = function(){
  //make a request to the capture endpoint
  
  //capture the request
  
  //display the increase in pointer.
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};