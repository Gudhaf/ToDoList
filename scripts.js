//on page load set the checkbox to stored value or default to true
$('#box').prop('checked' , ( typeof sessionStorage.box !== 'undefined' ) ? (sessionStorage.box=='true') : true ); 
//when checkbox is updated, update stored value
$('#box').change( function() { sessionStorage.box = $(this).prop('checked');  }); 