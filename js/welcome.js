$(document).ready(function(){
	//Según se cargue el HTML, consume un servicio GET para obtener
	//Todos los usuarios y los rellena en la tabla vacía results.
	$.ajax({
        url: 'https://localhost:5001/user',
        dataType: 'json',
		type: 'get',
		crossDomain: true,
        contentType: 'application/json',
        success: function(data){
            //Por cada elemento dentro del array data, construye una fila (tr)
            //y añade celdas con los campos de cada elemento del array.
		    $.each(data, function(i, item) {
		        const $tr = $('<tr>').append(
		            $('<td>').text(item.username),
		            $('<td>').text(item.name)
		        );
		        $('#results').append($tr);
		    });
      	}
    });
});

//Función para volver a login
function logout(){
	window.location.replace("/html/login.html");
}
