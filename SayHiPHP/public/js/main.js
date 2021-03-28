

  // display a modal (small modal)
  $(document).on('click', '#btnEye', function(event) {
      event.preventDefault();
      let href = $(this).attr('data-attr');
      $.ajax({
          url: href,
          // return the result
          success: function(result) {
              console.log(result);

              $('.modal-content').html(result).show();
          },
          complete: function() {
          },
          error: function(jqXHR, testStatus, error) {
              console.log(error);
          },
          timeout: 8000
      })
  });
