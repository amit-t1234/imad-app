//counter increase button
var button = document.getElementById('counter');


button.onclick = function(){
  //make a request to the capture endpoint
  var request = new XMLHttpRequest();
  //capture the request
  request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE){
          //do some thing
          if(request.status === 200){
                var counter = request.responseText; 
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
          }
      }
      //else do nothing.
  };
  request.open('GET','http://amitthakurashwani.imad.hasura-app.io/counter',true)
  request.send(null);
};