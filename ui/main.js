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
  request.open('GET','http://amitthakurashwani.imad.hasura-app.io/counter',true);
  request.send(null);
};

//submitname
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make the request to the server and send the name
  
  //dispaly the list of name 
  var names = ['name1','name2','name3','name4'];
  var list = '';
  for(i=0;i<names.length;i++){
      list = list + '<li>'+names[i]+'</li>'
  }
  var ul = document.getElementById('inputList');
  ul.innerHTML = list;
};