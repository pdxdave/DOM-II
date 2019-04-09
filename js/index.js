// Your code goes here

// # 1 - mouse over to change the image.  goes back when mouse out.
let switch_pic = document.querySelector('.switch_pic');

switch_pic.addEventListener('mouseover', function(){
    switch_pic.src = ('img/desert.jpg');
   
})
switch_pic.addEventListener('mouseout', function(){
    switch_pic.src = ('img/adventure.jpg');
})


// # 2 - mouseover the home image and change the h2 font color
let home_img = document.querySelector('.home_img');

home_img.addEventListener('mouseover', function(){
    let textColor = document.querySelector('.intro > h2');
    textColor.style.color = 'red';
})
home_img.addEventListener('mouseout', function(){
    let textColor = document.querySelector('.intro > h2');
    textColor.style.color = 'black';
})


// # 3 - click button to change button text.  on mouseout text returns to original
let destination_btn_1 = document.querySelector('.content-pick .destination:nth-child(1) .btn');
destination_btn_1.addEventListener('click', function() {
   destination_btn_1.textContent = "Yowza!"
});
destination_btn_1.addEventListener('mouseout', function() {
    destination_btn_1.textContent = "Sign Me Up!"
 });