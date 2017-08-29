//submit username to login into account
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make a request to the capture endpoint
  var request = new XMLHttpRequest();
  //capture the request
  request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE){
          //do some thing
          if(request.status === 200){
                 //dispaly the list of name
                 
                alert('the user logged in successfully');
            }
            else if(request.status === 403){
                alert("invalid username/password");
            }
            else if(request.status === 500){
                alert('something went wrong on the server!!!');
            }
      }
      //else do nothing.
  };
  
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log(username);
  console.log(password);
  request.open('POST','http://amitthakurashwani.imad.hasura-app.io/login',true);
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username : username, password : password}));
};