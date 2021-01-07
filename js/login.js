$(document).ready(function(){
    $("#go").click(function(){
        const username = $("#login").val().trim();
        const password = $("#password").val().trim();

        if( username != "" && password != "" ){
            $.ajax({
                url: 'https://localhost:5001/login',
                dataType: 'json',
                type: 'post',
                crossDomain: true,
                contentType: 'application/json',
                data: JSON.stringify({Username:username, Password:password}),
                success: function(data){
                    if(data){ 
                        window.location.replace("/html/welcome.html");
                    } else {
                        $("#error").show() //.css("display", "block");
                    }
              }
            })
        }
    });
});