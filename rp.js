let food1 = document.getElementById('food1');
let food2 = document.getElementById('food2');
let foods = document.getElementById('food');

food1.addEventListener('click',()=>{
    foods.style.backgroundImage = "url('food1.png')";

})
food2.addEventListener('click',()=>{
    foods.style.backgroundImage = "url('food.jpg')";
    
})