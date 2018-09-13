function apiCall (input) {
      var inputObj = {'query' : input};
      if (input != null) {
      $.ajax({
       type: 'POST',
       dataType: 'text',
       url: 'http://MYURL.com/api.php',
       data: inputObj,
       success: function (responseData, textStatus, jqXHR) {
         if (responseData != "incorrect") {
          $('#divOutput').html('<div>' + responseData + '</div>');
         } else {
          alert(responseData);
         }
       },
       error: function (responseData, textStatus, errorThrown) {
         alert('POST failed.');
       }
     });
      }  else {
        alert('FAILBOAT')
      }
  }