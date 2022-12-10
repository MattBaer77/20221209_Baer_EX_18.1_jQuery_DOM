
//1

$(function() {

    console.log("Let's get ready to party with jQuery!")

})

//2

$('img').addClass('image-center');

//3

$('p',).eq(-1).remove()

//4

const headingSize = (Math.floor(Math.random() * 100)+1);

console.log(headingSize)

$('h1').css('font-size', headingSize);

//5

$('ol').append('<li>Whatever you want.</li>')

//6

$('aside').text('I am sorry for existing... gosh.')

//7

let red = 255;
let blue = 255;
let green = 255;
let color = `rgb(${red},${green},${blue})`

$('form').on('click','input', function(){

    let varName = $(this).attr('class');

    if (varName === 'red') {
        red = $(this).val()
    }
    else if (varName === 'blue') {
        blue = $(this).val()
    }
    else {
        green = $(this).val()
    }

    color = `rgb(${red},${green},${blue})`

    $('body').css('background-color', color);
})

//8

$('img').on('click',function(){
    $(this).remove()
})