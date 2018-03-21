$(document).ready(function() {  // Start of jquery function.
  
  $('#search').click(function() { // When search button is clicked run code.
    
    var searchTerm=$('#searchTerm').val(); // Set var = form input.

    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&limit=5&callback=?"; 
    // limit = # of results.
    
    /* Using AJAX function within jquery. Both methods work, but this style of code is longer and unnecessary here.
    
        $.ajax( {
        url: url,        
        dataType: 'json',
        type: 'GET',
        async: 'false',        
        success: function(data) {
          
          $('#output').html("");  // clears output from previous search.

          for (var i = 0; i < data[1].length; i++) {
              $('#output').prepend("<li><a href= " + data[3][i] +">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");  
            }          
        },
        error: function (errorMessage) {
            alert("error");       
        }      
      });   */
        
        $.getJSON(url, function(data) {
              $('#output').html("");  // clears output from previous search.
          for (var i = 0; i < data[1].length; i++) {
              $('#output').prepend("<li><a href= " + data[3][i] +">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");  
            } 
         });             
  });
});
