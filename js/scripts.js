$(function(){
	//Animação menu
	$('div#botao-menu-mobile').click(function(){
		var listaMenu = $('ul#menu-mobile');
		if(listaMenu.is(':hidden') == true){
			var btnOrcamento = $('#contianer-button').find('#btnSolicitarOrcamento');
			btnOrcamento.css('display','block');//Deixa o button solicitar orçamento visivel

			var icone = $('#botao-menu-mobile').find('i');
			icone.removeClass('fas fa-bars');
			icone.addClass('fas fa-times-circle');
			listaMenu.slideToggle();
		}
		else{
			var btnOrcamento = $('#contianer-button').find('#btnSolicitarOrcamento');
			btnOrcamento.css('display','none');//Deixa o button solicitar orçamento visivel

			var icone = $('#botao-menu-mobile').find('i');
			icone.removeClass('fas fa-times-circle');
			icone.addClass('fas fa-bars');
			listaMenu.slideToggle();
		}
	});


	
		//Quando o mouse está no componente
		function CardCustomOn() { 
			var card = $('#section5 ').find('#'+this.id);
			var h2 = $('#section5 #'+this.id).find('h2');
			var p = $('#section5 #'+this.id).find('p');
			
			h2.css('opacity','0')
	
			p.css('display','block')
			p.css('font-size','26px')
			p.css('position','absolute')
			p.css('top','30px')
			p.css('left','10px')
	
			
	
		}
		//Quando o mouse não está no componente
		function CardCustomOff() { 
			var card = $('#section5 ').find('#'+this.id);
			var h2 = $('#section5 #'+this.id).find('h2');
			var p = $('#section5 #'+this.id).find('p');
	
			h2.css('opacity','1')
			p.css('display','none')
		}

		/*
		$('#section5 div.col').mouseenter(CardCustomOn);
		$('#section5 div.col').mouseleave(CardCustomOff); 
		*/
		$('#section5 div.col').click(function(){
			var p = $('#section5 #'+this.id).find('p');
			var h2 = $('#section5 #'+this.id).find('h2');
			if(h2.is('.cardCustomOffH2')){
				h2.removeClass('cardCustomOffH2');
				h2.addClass('cardCustomOnH2');

				p.removeClass('cardCustomOffP');
				p.addClass('cardCustomOnP');
				
			}else {
				h2.removeClass('cardCustomOnH2');
				h2.addClass('cardCustomOffH2');

				p.removeClass('cardCustomOnP');
				p.addClass('cardCustomOffP');
			}

		});

});