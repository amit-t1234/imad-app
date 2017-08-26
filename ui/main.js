console.log('Loaded!');

//changing the text of main page.
var element = document.getElementById('main.text');
element.innerHTML = 'I am amit and this is my web page!!';

//changing the image style
var img = document.getElementById('img');
img.onclick = function(){
    img.style.marginLeft = '100px';
};