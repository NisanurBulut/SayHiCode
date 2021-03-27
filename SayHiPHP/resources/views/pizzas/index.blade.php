@extends('layouts.app')

@section('content')
    <div class="modal fade" id="smallModal" tabindex="-1" role="dialog" aria-labelledby="smallModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="smallBody">
                    <div>
                        <!-- the result to be displayed apply here -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ui wrapper pizza-index">
        <h1>Pizza Orders</h1>
        @foreach ($pizzas as $pizza)
            <div class="pizza-item">
                <button class=" btn btn-success btn-sm" id="btnEye" data-toggle="modal" data-target="#smallModal"
                    data-attr="/pizzas/{{ $pizza->id }}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye"
                        viewBox="0 0 16 16">
                        <path
                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                </button>
                <img src="/img/pizza.png" alt="pizza icon">
                <h4><a href="/pizzas/{{ $pizza->id }}">{{ $pizza->name }}</a></h4>
            </div>
        @endforeach

    </div>

@endsection

<script>
  // display a modal (small modal)
  $(document).on('click', '#btnEye', function(event) {
      event.preventDefault();
      let href = $(this).attr('data-attr');
      $.ajax({
          url: href,
          beforeSend: function() {

          },
          // return the result
          success: function(result) {
              $('#smallModal').modal("show");
              $('#smallBody').html(result).show();
          },
          complete: function() {
              $('#loader').hide();
          },
          error: function(jqXHR, testStatus, error) {
              console.log(error);
              alert("Page " + href + " cannot open. Error:" + error);
              $('#loader').hide();
          },
          timeout: 8000
      })
  });
  </script>