$(function(){

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
});