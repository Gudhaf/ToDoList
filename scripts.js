
$(document).ready(function() {
  var favorites = JSON.parse(localStorage.getItem('favorites'));
  if(favorites != null)
  {
  if (!favorites.length) {return};
  console.debug(favorites);

  for (var i=0; i<favorites.length; i++) {
    console.debug(favorites[i].value == 'on');
    $('#' + favorites[i].id ).prop('checked', favorites[i].value);
  }
}
});

function clicka()
{
	var fav, favs = [];
  $('.box').each(function() { // run through each of the checkboxes
    fav = {id: $(this).attr('id'), value: $(this).prop('checked')};
    favs.push(fav);
  });
  localStorage.setItem("favorites", JSON.stringify(favs));
};