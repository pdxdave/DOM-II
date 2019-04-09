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



// # 4 - on click changes the color of the h4 text.  on mouseout text changes back to original
let destination_btn_2 = document.querySelector('.content-pick .destination:nth-child(2) .btn');
destination_btn_2.addEventListener('click', function() {
   let destination_2 = document.querySelector('.content-pick .destination:nth-child(2) h4');
       destination_2.style.color = "green";
});
destination_btn_2.addEventListener('mouseout', function() {
    let destination_2 = document.querySelector('.content-pick .destination:nth-child(2) h4');
       destination_2.style.color = "black";
});


// # 5 - on click removes border radius.  on mouseout it returns it.
let destination_btn_3 = document.querySelector('.content-pick .destination:nth-child(3) .btn');

   destination_btn_3.addEventListener('click', function() {
      destination_btn_3.style.borderRadius = '0';
 });
 destination_btn_3.addEventListener('mouseout', function() {
    destination_btn_3.style.borderRadius = '15px';
});


// # 6 - mouse over footer and the background changes color
let footer_padding = document.querySelector('footer');
footer_padding.addEventListener('mouseover', function(){
    document.querySelector('footer').style.background = 'orangered';
    document.querySelector('footer').style.transition = 'background .3s ease-in-out';
})
footer_padding.addEventListener('mouseout', function(){
    document.querySelector('footer').style.background = '#FFEBCD';
    document.querySelector('footer').style.transition = 'background .3s ease-in-out';
})



// # 7 - mouseover image and hiker dude appears
let switch_hiker = document.querySelector('.switch_hiker');
switch_hiker.addEventListener('mouseover', function() {
    let hike_dude = document.querySelector('.short_hiker');
        hike_dude.style.display = "block";     
})
switch_hiker.addEventListener('mouseout', function() {
    document.querySelector('.short_hiker').style.display = "none";
})


// # 8 - pop up window reminding user of travel specials
window.addEventListener('load', function() {
    alert("Be sure to ask about our travel specials!");
})

// # 9 - on mouse over the font is scaled up by 20%.
let logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', function() {
    logo.style.transform = "scale(1.2)";
    logo.style.transition = "all .3s ease-in-out";
})
logo.addEventListener('mouseout', function() {
    logo.style.transform = "scale(1)";
    logo.style.transition = "all .3s ease-in-out";
})


// # 10 - mouse over image and font size increases

let pick_destination = document.querySelector('.pick-destination');
pick_destination.addEventListener('mouseover', function() {
    document.querySelector('.content-destination p').style.fontSize = '2rem';
})
pick_destination.addEventListener('mouseout', function() {
    document.querySelector('.content-destination p').style.fontSize = '1.6rem';
})