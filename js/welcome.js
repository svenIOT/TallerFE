$(document).ready(function(){
	$.ajax({
        url: 'https://localhost:5001/usuario',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        success: function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
            $(function() {
			    $.each(data, function(i, item) {
			        var $tr = $('<tr>').append(
			            $('<td>').text(item.username),
			            $('<td>').text(item.name),
			            $('<td>').text(item.apellidos),
			            $('<td>').text(item.email),
			            $('<td>').text(item.rol)
			        ); //.appendTo('#records_table');
			        console.log($tr.wrap('<p>').html());
			        $('#results').append($tr);
			    });
			});
      	}
    });
});
