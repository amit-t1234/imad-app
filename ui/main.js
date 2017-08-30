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
                 var names = request.responseText;
                 names = JSON.parse(names);
                 var list = '';
                for(i=0;i<names.length;i++){
                     list = list + '<li>'+names[i]+'</li>';
                 }
                 var ul = document.getElementById('inputList');
                 ul.innerHTML = list;
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
 var nameInput = document.getElementById('name');
 var name = nameInput.value;
 request.open('GET','http://amitthakurashwani.imad.hasura-app.io/submit-name?name='+ name,true);
 request.send(null);
 var username = document.getElementById('username').value;
 var password = document.getElementById('password').value;
 console.log(username);
 console.log(password);
 request.open('POST','http://amitthakurashwani.imad.hasura-app.io/login',true);
 request.setRequestHeader('Content-Type','application/json');
 request.send(JSON.stringify({username : username, password : password}));
  }; 