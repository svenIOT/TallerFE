$(document).ready(function () {
	//Según se cargue el HTML, consume un servicio GET para obtener
	//Todos los usuarios y los rellena en la tabla vacía results.
	let totalSales = [];
	$.ajax({
		url: 'https://localhost:5001/proposition/sales',
		dataType: 'json',
		type: 'get',
		contentType: 'application/json',
		success: function (data) {
			//Por cada elemento dentro del array data, construye una fila (tr)
			//y añade celdas con los campos de cada elemento del array.
			$.each(data, function (i, item) {
				totalSales.push(parseInt(item.precio));
				let tr = $('<tr>').append(
					$('<td>').text(item.numBastidor),
					$('<td>').text(item.fechaValidez),
					$('<td>').text(item.precio)
				);
				$('#results').append(tr);
			});
			// Gráficos
			let ctx = $("#myChart");
			let myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ["Total vendidos"],
					datasets: [{
						label: 'Ventas (€)',
						data: [totalSales.reduce((a, b) => a + b)],
						lineTension: 0,
						backgroundColor: '#007bff',
						borderColor: '#007bff',
						borderWidth: 2,
						pointBackgroundColor: '#007bff'
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: false
							}
						}]
					},
					legend: {
						display: true,
					}
				}
			});
		}
	});
});

//Función para volver a login
function logout() {
	window.location.replace("/html/index.html");
}
