const btn = document.getElementById('darkButton');
btn.addEventListener('mouseover',function(){
})


let isDarkModeEnabled = false; 
function lightOrDark() {
    isDarkModeEnabled = !isDarkModeEnabled;  
    if(isDarkModeEnabled){ 
     document.body.style.color= "white"
     document.body.style.backgroundImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFWjmMmDZ9JM6GR9hLW83dfJSjfG55Vn_5dpB1egK&s');
}
else {
    document.body.style.color= "black"
    document.body.style.backgroundImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_x4a_34dyEfU9rvDWwD4FLrDEpfzdM2FxuIZrFx0QwA&s');
}
}
