$(document).ready(function(){
    $('#submit').click(function(){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You are now Registered',
            showConfirmButton: true,
        })
    });
});