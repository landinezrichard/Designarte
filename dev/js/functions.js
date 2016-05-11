$(document).ready(function() {

	/*Funcionalidades Menu*/

	var menus = ['.Menu','.Header-contactoMovil'];

	/*Mostrar menu mobile*/
	$('.Header-mobileMenu').click(function(event){
		event.preventDefault();
		mostrarOcultar('.Menu');
	});

	/*Mostrar contacto movil*/
	$('.Header-btnMovil--small').click(function(event){
		event.preventDefault();
		mostrarOcultar('.Header-contactoMovil');
	});	

	function mostrarOcultar(elemento){
		for (var i = 0; i <= menus.length-1; i++) {
			if(menus[i] != elemento){
				$(menus[i]).slideUp();
			}
		}
		$(elemento).slideToggle();
	}
	
});