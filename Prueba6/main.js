$(document).ready(function(){
	$("#agregar").click(function(){
		var item = $("#lista").children().last().clone();
		item.text(parseInt(item.text())+1);
		$("#lista").append(item);
	})
	$("#quitar").click(function(){
		$("#lista").children().first().remove();
	})
});