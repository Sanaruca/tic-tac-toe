$('.casilla')
    .on('click', function () {

        let position = Number($(this).attr('id').replace(/\D/g, ''));
        
        $(this).addClass(`player1`);
        
        
        
        controller(turno_del_boot,position);

    });