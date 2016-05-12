$(document).ready(function() {

	/*Funcionalidades Menu*/

	var menus = ['.Menu','.Header-contactoMovil'];

	/*Mostrar menu mobile*/
	$('.Header-mainMenu').click(function(event){
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

	/*Paginador*/	
	var p = $('#paginador').paginator({
        pageTransform: "slide"
    });

	$('.Paginador-nav').on('click','.Paginador-item',function(){
		$('.Paginador-item').removeClass('active');
		var pagina = $(this).attr('data-page');
		$(this).addClass('active');
		p.setCurrentPage(pagina - 1);
	});

	p.on('pageChanged', function (idx) {
		var valor = idx + 1;
		$('.Paginador-item').removeClass('active');
        $('.Paginador-item[data-page='+valor+']').addClass('active');
    });

	
});