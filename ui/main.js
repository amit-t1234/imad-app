console.log('Loaded!');

//changing the text of main page.
var element = document.getElementById('main.text');
element.innerHTML = 'I am amit and this is my web page!!';

//changing the image style
var img = document.getElementById('img');
var imageLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
};
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};