$(document).ready(function () {
	//Según se cargue el HTML, consume un servicio GET para obtener
	//Todos los usuarios y los rellena en la tabla vacía results.
	let totalSales = [];
	let vehicleTypeSoldCounter = { "Coche": 0, "Motocicleta": 0, "Ciclomotor": 0 };
	let employeeSalesCounter = {"Pepe Morales Cifuentes": 0, "Rigoberto Vende Motos": 0, "Sofía Maracuya Amarilla": 2}; //TODO: Sofía no funca
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

				// Incrementar contador de vehículos vendidos / vendedor
				vehicleTypeSoldCounter[item.tipoVehiculo] += 1;
				employeeSalesCounter[item.nombreVendedor] += 1;

				let tr = $('<tr>').append(
					$('<td>').text(item.nombreVendedor),
					$('<td>').text(item.numBastidor),
					$('<td>').text(item.tipoVehiculo),
					$('<td>').text(item.fechaValidez.substring(0, 10)),
					$('<td>').text(item.precio),
					$('<td>').text(item.totalVendido)
				);
				$('#results').append(tr);
			});
			
			// Gráficos
			let ctx = $("#myChart");
			let mychart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["Coches", "Motocicletas", "Ciclomotores"],
					datasets: [{
						label: 'Nº de vehículos',
						data: [vehicleTypeSoldCounter["Coche"], vehicleTypeSoldCounter["Motocicleta"], vehicleTypeSoldCounter["Ciclomotor"]],
						backgroundColor: ['#D50000', '#F68E01', '#F6DF01'],
					}]
				},
				options: {
					legend: {
						display: true,
					}
				}
			});
			$('#myChart').append(mychart);

			// Gráfico 2
			let ctx2 = $("#myChart2");
			let mychart2 = new Chart(ctx2, {
				type: 'bar',
				data: {
					labels: ["Total vendido"],
					datasets: [{
						label: 'Ventas (€)',
						data: [totalSales.reduce((a, b) => a + b)],
						backgroundColor: '#82FF4B'
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
			$('#myChart2').append(mychart2);

			// Gráfico 3
			let ctx3 = $("#myChart3");
			let mychart3 = new Chart(ctx3, {
				type: 'pie',
				data: {
					labels: ["Pepe Morales Cifuentes", "Rigoberto Vende Motos", "Sofía Maracuya Amarilla"],
					datasets: [{
						label: 'Nº de vehículos',
						data: [employeeSalesCounter["Pepe Morales Cifuentes"], employeeSalesCounter["Rigoberto Vende Motos"], employeeSalesCounter["Sofía Maracuya Amarilla"],],
						backgroundColor: ['#00FFFD', '#2E76FF', '#812EFF'],
					}]
				},
				options: {
					legend: {
						display: true,
					}
				}
			});
			$('#myChart3').append(mychart3);
		}
	});
});

//Función para volver a login
function logout() {
	window.location.replace("/html/index.html");
}
