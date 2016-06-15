function Telefono(numero,marca,color){
	this.numero = numero;
	this.marca = marca;
	this.color = color;
	this.llamadas = 0;
	this.marcar = function(numero){
		console.log(this.numero + " le marca a " + numero);
		this.llamadas++;
	}
}

var tel1 = new Telefono(81069632,"Telmex","Rojo");
var tel2 = new Telefono(83003065,"Telcel","Azul");

tel1.marcar(tel2.numero);
console.log("Llamadas de tel1: " + tel1.llamadas);