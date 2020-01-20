//on page load set the checkbox to stored value or default to true
$('#box').prop('checked' , ( typeof localStorage.box !== 'undefined' ) ? (localStorage.box=='true') : true ); 
//when checkbox is updated, update stored value
$('#box').change( function() { localStorage.box = $(this).prop('checked');  }); 