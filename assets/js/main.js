var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});

//mapa google
function initMap() {
    var myLatLng = {lat: 14.5246189, lng: -90.4685997};

    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 16,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

/*
 * Inicio Bootstrap validator
 */

$('#formDatosContacto')
    .bootstrapValidator({
        message: 'El valor no es v&#225;lido',
        //live: 'submitted',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombres: {
                message: 'El nombre no es v&#225;lido',
                validators: {
                    notEmpty: {
                        message: 'Debes proporcionar tu nombre o nombres'
                    }
                }
            },
            apellidos: {
                message: 'El apellido no es v&#225;lido ',
                validators: {
                    notEmpty: {
                        message: 'Debes proporcionar tu apellido o apellidos'
                    }
                }
            },
            telefono: {
                message: 'El teléfono no es v&#225;lido',
                validators: {
                    notEmpty: {
                        message: 'El teléfono no puede estar vaci&#243;'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'El telefono debe ser solo numeros'
                    }
                }
            },
            celular: {
                message: 'El movil no es v&#225;lido',
                validators: {
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'El movil debe ser solo numeros'
                    }
                }
            },
            email: {
                message: 'El correo electónico no es v&#225;lido',
                validators: {
                    notEmpty: {
                        message: 'El correo electónico no puede estar vaci&#243;'
                    }
                }
            },
            empresa: {
                message: 'La empresa no es v&#225;lida',
                validators: {
                    stringLength: {
                        min: 0,
                        max: 50,
                        message: 'La longuitud del campo debe ser de 50 car&#225;cteres '
                    }
                }
            },
            pais: {
                message: 'El pais no es v&#225;lida',
                validators: {
                    stringLength: {
                        min: 0,
                        max: 50,
                        message: 'La longuitud del campo debe ser de 50 car&#225;cteres '
                    }
                }
            },
            asunto: {
                message: 'El asunto no es v&#225;lido',
                validators: {
                    notEmpty: {
                        message: 'El asunto no puede estar vaci&#243;'
                    }
                }
            },
            mensaje: {
                message: 'El mensaje no es v&#225;lido',
                validators: {
                    notEmpty: {
                        message: 'El mensaje no puede estar vaci&#243;'
                    }
                }
            }
        }
    })
    .on('success.form.bv', function(e) {
        e.preventDefault();
        var $form     = $(e.target),
            validator = $form.data('bootstrapValidator');
        var parametros ={
            "nombres": $('#nombres').val(),
            "apellidos": $('#apellidos').val(),
            "empresa":  $('#empresa').val(),
            "telefono": $('#telefono').val(),
            "celular":  $('#celular').val(),
            "email": $('#email').val(),
            "pais": $('#pais').val(),
            "mensaje": $('#mensaje').val(),
            "asunto": $('#asunto').val()
        };

       $.ajax({
           data: parametros,
           url:'mail.php',
           type: 'post',
           success: function () {
               new PNotify({
                   title: 'Correo enviado',
                   text: 'Acabamos de enviar a “Lechugas y Más” sus datos. Gracias por hacernos llegar su opinión',
                   type: 'success',
                   icon: 'glyphicon glyphicon-envelope'
               });
           }
       });
        $('#formDatosContacto').bootstrapValidator('resetForm', true);
    });

/*
 * Fin Bootstrap validator
 */