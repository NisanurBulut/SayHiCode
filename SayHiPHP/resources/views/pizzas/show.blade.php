
              <div class="modal-header">
                <h5 class="modal-title">
                    <p>{{ $pizza->name }}</p>

                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="extra content">
                    <span class="category">
                        <div class="ui label">
                            <i class="paperclip icon"></i> {{ $pizza->type }}
                        </div>
                        <div class="ui label">
                            <i class="paperclip icon"></i> {{ $pizza->base }}
                        </div>
                    </span>
                </div>
                <hr />
                <div class="content">
                    <div class="ui list">
                        @foreach ($pizza->toppings as $topping)
                        <div class="ui label">
                            <i class="utensils icon"></i>{{ $topping }}
                        </div>
                        @endforeach
                    </div>
                </div>
              </div>
              <div class="modal-footer" style="display: flex;justify-content:space-between;">
                {{ $pizza->created_at->diffForHumans() }}
                <form action="{{ route('destroy', $pizza->id) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">
                        <i class="trash alternate icon large"></i>
                      </button>
                 </form>

              </div>