class Billete
{
  constructor(valor,cantidad , url)
  {

    this.valor = valor;
    this.cantidad =cantidad;
    this.imagen = new Image();
    this.imagen.src = url;
  }
}

;

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
        div = Math.floor(dinero / bi.valor);
        if(div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else
        {
            papeles = div;
        }
        entregado.push(new Billete(bi.valor, papeles, bi.imagen.src));
        dinero = dinero - (bi.valor * papeles);
        for (var e of entregado)
        {
          document.body.appendChild(bi.imagen);
        }

    }
  }
  if(dinero > 0)
    {
  resultado.innerHTML = "soy un cajero pobre";
    }
    else
    {
      for (var e of entregado)
      {
        if(e.cantidad > 0 )
        {

          resultado.innerHTML += + e.cantidad + " billetes de $ " + e.valor + "<br/>";

        }

      }
    }
console.log(entregado);
}


var entregado = [];
var caja = [];
caja.push( new Billete(50,10, "50.jpg"));
caja.push( new Billete(20,30,"20.jpg"));
caja.push( new Billete(10,10,"10.jpg"));


console.log(caja)

var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click" , entregarDinero);

var imagenes = [];
imagenes["10"] = "10.jpg";
imagenes["20"] = "20.jpg";
imagenes["50"] = "50.jpg";
