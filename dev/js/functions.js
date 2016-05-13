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


    /*Galeria imagenes Interna*/

	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
     
	sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		navigation: false,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200,
	});
     
	sync2.owlCarousel({
		items : 3,
		itemsDesktop      : [1199,3],
		itemsDesktopSmall     : [979,3],
		itemsTablet       : [768,3],
		itemsMobile       : [479,3],
		pagination:false,
		navigation: true,
		responsiveRefreshRate : 100,
		afterInit : function(el){
			el.find(".owl-item").eq(0).addClass("synced");
		}
	});
     
	function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
		  center(current)
		}
	}
     
	$("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	});
     
	function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
		  if(num === sync2visible[i]){
		    var found = true;
		  }
		}

		if(found===false){
		  if(num>sync2visible[sync2visible.length-1]){
		    sync2.trigger("owl.goTo", num - sync2visible.length+2)
		  }else{
		    if(num - 1 === -1){
		      num = 0;
		    }
		    sync2.trigger("owl.goTo", num);
		  }
		} else if(num === sync2visible[sync2visible.length-1]){
		  sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
		  sync2.trigger("owl.goTo", num-1)
		}
        
    }

    /*Otros Productos*/
	$('.Productos-otrosList').owlCarousel({
		items : 4,
		itemsDesktop      : [1199,4],
		itemsDesktopSmall     : [979,3],
		itemsTablet       : [768,2],
		itemsMobile       : [479,1],
		pagination:true,
		navigation: true,
		responsiveRefreshRate : 100
	});

    /*Cambiar controles owl*/
    var arrow_izq ='<span class="flecha-left"></span>';
	var arrow_der ='<span class="flecha-right"></span>';
	$.each($('.owl-prev'),function(elemento){
		$(this).html(arrow_izq);
	});

	$.each($('.owl-next'),function(elemento){
		$(this).html(arrow_der);
	});	
	
});