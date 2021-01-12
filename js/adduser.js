$(document).ready(function () {
    $("#go").click(function(){
        const username =    $("#login").val().trim();
        const password =    MD5($("#password").val().trim());
        const dni =         $("#dni").val().trim();
        const name =        $("#name").val().trim();
        const surnames =    $("#surnames").val().trim();
        const phone =       $("#phone").val().trim();

        const hasData = () => username != "" || password != "" || dni != "" || name != "" || surnames != "" || phone != "";

        if( hasData ){
            $.ajax({
                url: 'https://localhost:5001/user/add',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({Username:username, Password:password, Dni:dni, Name:name, Surnames: surnames, Phone:phone}),
                success: function(data){
                    if(data){ 
                        $("#success").show()
                    } else {
                        $("#error").show()
                    }
              }
            })
        }
    });
});

//Función para volver a login
function logout() {
	window.location.replace("/html/index.html");
}

//Desactivar especialidad hasta que elija mecánico
function checkSelectedOption() {
    if($("#employee").val() === "mechanich") {
        $("#specialty").prop('disabled', false); 
    } else {
        $("#specialty").prop('disabled', 'disable'); 
    }
}
