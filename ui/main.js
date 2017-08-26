console.log('Loaded!');

//changing the text of main page.
var element = document.getElementById('main.text');
element.innerHTML = 'I am amit and this is my web page!!';

//changing the image style
var img = document.getElementById('img');
var count = 0;
img.onclick = function(){
    if(count === 0){
        img.style.marginLeft = '100px';
        count = 1;
    }
    else{
        img.style.marginRight  = '100px';
        count = 0;
    }
    
};