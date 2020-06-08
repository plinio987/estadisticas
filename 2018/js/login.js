jQuery(document).on('submit', '#formlg'function(event) {
    event.preventDefault();

    jQuery.ajax({
        url: 'login/login.php',
        type: "POST",
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function() {}
    })

    .done(function(respuesta) {
            console.log("success");
        })
        .fail(function(resp) {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
});