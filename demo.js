var a = document.querySelector("#bulb");

var btn = document.querySelector("button");
btn.addEventListener("click",function()
{
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    a.style.backgroundColor = randomColor; 

})
                        