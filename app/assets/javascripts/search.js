<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script>
  $("#autocomplete_input").autocomplete({
    source: function( request, response ) {
    $.ajax({
      url: "/users/search_auto",
        data: {
          name: request.term
        },
      success: function( data ) {
        response( $.map( data, function( item ) {
          return {
            label: item.id,
            value: item.name
          }
        }));
      }
    });
  },
  minLength: 2,
    select: function( event, ui ) {
      console.log(ui.item)
      window.location.href = "/users/" +ui.item.label;
    }
  }).data( "ui-autocomplete" )._renderItem = function(ul,item){
    return $("<li>")
      .append("<a>" + item.value + "</a>")
      .appendTo(ul);
  };  
</script>