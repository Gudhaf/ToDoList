//on page load set the checkbox to stored value or default to true
$('#box').prop('checked' , ( typeof localStorage.turbo !== 'undefined' ) ? (localStorage.turbo=='true') : true ); 
//when checkbox is updated, update stored value
$('#box').change( function() { localStorage.turbo = $(this).prop('checked');  }); 