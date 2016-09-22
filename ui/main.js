console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML="arun";
//going to move image
var img=document.getElementById('ar');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft +5;
    img.style.marginLeft=marginLeft+'px';
}
 img.onclick=function()
{
 var interval=setInterval(moveRight, 50);  
};