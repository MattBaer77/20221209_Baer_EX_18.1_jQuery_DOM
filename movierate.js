
// Add Movie From Form
$('.new-movie-add').on('submit', function(e){

    e.preventDefault();

    // gets values from the form inputs
    const title = $('.new-title');
    const rating = $('.new-rating');

    // creates new elements to add to the page
    const newLI = $('<li>');
    const liButton = $('<button>')

    // adds the result of the form inputs to the newy created elements
    newLI.text(title.val() + ' - ' + rating.val() + ' ');
    liButton.text('Remove This Movie');

    // adds button element to li element
    liButton.appendTo(newLI);

    // adds li element to the page's ul with class of movie-list
    newLI.appendTo('.movie-list');

})

// delegates event listeners to all buttons within movie-list - sets buttons to delete it's parent element
$(".movie-list").on('click','button', function(){

    $(this).parent('li').remove();

})
