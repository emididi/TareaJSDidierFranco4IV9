function capital(){

    let cap= document.getElementById("cap").value;
    let resultado=cap*0.02;
    let capregex=/^\d+(\.\d+)?$/; 

    if (capregex.test(cap))
   {
    resultado=cap*0.2
    document.getElementById("resul").value=resultado;
   }
   else
   {
    alert("Valor incorrecto")
   }
    


}
function resul2(){
    let checar=/^\d+(\.\d+)?$/;  
    let sueldobase= document.getElementById("sueldobase").value;
    let comision1= document.getElementById("comision1").value;
    let comision2= document.getElementById("comision2").value;
    let comision3= document.getElementById("comision3").value;

    if (checar.test(sueldobase))
    {
       if(checar.test(comision1))
       {
         if(checar.test(comision2))
         {
           if(checar.test(comision3))
           {
            let resultadocomisiones= comision1*0.10;
            resultadocomisiones+= comision2*0.10;
            resultadocomisiones+= comision3*0.10;
            let sumatotal= parseInt(resultadocomisiones) + parseInt(sueldobase);
            document.getElementById("resul11").value=resultadocomisiones;
            document.getElementById("resul22").value=sumatotal;
            }
            else
            {
            alert("Hay un valor incorrecto")
            }
        }
        else
        {
            alert("Hay un valor incorrecto")
        }

        }
        else{
            alert("Hay un valor incorrecto")
        }
    }
    else{
    alert("Hay un valor incorrecto")
    }



}
function resul3(){
    let compraregex=/^\d+(\.\d+)?$/; 
    let compratotal = document.getElementById("totalcompra").value;

    if(compraregex.test(compratotal))
   {
        let descuentototal = compratotal*0.15;
        let totalcompra =  parseFloat(compratotal) - parseFloat(descuentototal);

        document.getElementById("resultadodescuento").value = totalcompra;
    }
    else
    {
     alert("Valor incorrecto")
    }

}
function resul4(){

    let calificacionregex=/^(10(\.0+)?|([0-9](\.[0-9]+)?))$/;
    let examfinal = document.getElementById("examfin").value;

    let proyectfinal = document.getElementById("proyectofinal").value;
  
    let parcial1 = document.getElementById("calif1").value;
    let parcial2 = document.getElementById("calif2").value;
    let parcial3 = document.getElementById("calif3").value;

    if(calificacionregex.test(parcial1))
    {
        if(calificacionregex.test(parcial2))
        {
            if(calificacionregex.test(parcial3))
            {
                if (calificacionregex.test(examfinal))
                {
                    if(calificacionregex.test(proyectfinal))
                    {
                        examfinal *= 30;
                        examfinal = examfinal / 10;
                        proyectfinal *= 15
                        proyectfinal = proyectfinal / 10
                        let califparcialfinal = parseFloat(parcial1) + parseFloat(parcial2) + parseFloat(parcial3)
                        califparcialfinal *= 55;
                        califparcialfinal = califparcialfinal/30;
                        let finalfinal= parseFloat(califparcialfinal) + parseFloat(proyectfinal) + parseFloat(examfinal);       
                        document.getElementById("califfinal").value= finalfinal;
                    }
                    else
                    {
                    alert("Hay un valor incorrecto")
                    }
                }
                else
                {
                    alert("Hay un valor incorrecto")
                }
            }
            else
            {
            alert("Hay un valor incorrecto")
            }
        }
        else
        {
            alert("Hay un valor incorrecto")
        }
    }
    else
    {
    alert("Hay un valor incorrecto")
    }

}

function resul5(){

    let regex1=/^[1-9]\d*$/;

    let hombres = document.getElementById("hombres").value;
    let mujeres = document.getElementById("mujeres").value;
    let total = parseFloat(hombres) + parseFloat(mujeres);

    if (regex1.test(total))
    {
      if (regex1.test(hombres))
      {
        if (regex1.test(mujeres))
        {

            let mujeresresultado = mujeres * 100;
            mujeresresultado /= total;

            let hombresresultado = hombres * 100;
            hombresresultado /= total;

            document.getElementById("mujeresresultado").value =mujeresresultado;
            document.getElementById("hombresresultado").value =hombresresultado;
        }
        else
        {
          alert("Hay un valor incorrecto")
        }
      }
      else
      {
        alert("Hay un valor incorrecto")
      }
    }
    else{
      alert("Hay un valor incorrecto")
    }


}

function resul6(){
    let nacimiento = document.getElementById("nacimiento").value;
    let actualidad = document.getElementById("actualidad").value;

    let edadfinal= parseInt(actualidad) - parseInt(nacimiento);
    document.getElementById("edad").value=edadfinal;
}

function resul7(){
    let regc=/^-?\d*\.?\d+$/;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if(regc.test(num1))
    {
        if(regc.test(num2))
        {

    if(num1 == num2){
        let numresul = parseFloat(num1) * parseFloat(num2);
        document.getElementById("numresul").value = numresul;
        document.getElementById("cuales").value = "multiplicacion";
    }
    if(num1 > num2){
        let numresul = parseFloat(num1) - parseFloat(num2);
        document.getElementById("numresul").value = numresul;
        document.getElementById("cuales").value = "resta";
    }
    if(num1 < num2){
        let numresul = parseFloat(num1) + parseFloat(num2);
        document.getElementById("numresul").value = numresul;
        document.getElementById("cuales").value = "suma";
    }
}
else
{
  alert("Hay un valor incorrecto")
}
}
else{
alert("Hay un valor incorrecto")
}

}

function resul8(){

    
  
    let num1 = parseFloat(document.getElementById("num11").value);
    let num2 = parseFloat(document.getElementById("num22").value);
    let num3 = parseFloat(document.getElementById("num33").value);
 
    let regd=/^-?\d*\.?\d+$/;

    if(regd.test(num1))
    {
      if(regd.test(num2))
      {
        if(regd.test(num3))
        {
            if(num1 > num2){
                if(num1 > num3){
                    document.getElementById("grande").value= num1;
                }
                else{
                    document.getElementById("grande").value= num3;
                }
            }
            else{
                if(num2 > num3){
                    document.getElementById("grande").value= num2;
                }
                else{
                    document.getElementById("grande").value= num3;
                }

            }
        }
        else{
          alert("Hay un valor incorrecto")
        }
      }
      else
      {
        alert("Hay un valor incorrecto")
      }
    }
    else{
      alert("Hay un valor incorrecto")
    }
  
      
}

function ejercicio9()
 {
    let rege1=/^\d+$/;
    let rege2=/^\d*\.?\d+$/;
  let horastotales=document.getElementById("horastotales").value;
  let salariohora=document.getElementById("salario").value;
  let horasnormalestrabajadas;
  let pagototal;
  let pagonormal;
  let horasextra;
  let salariohorasextra2;
  let pagohorasextra;
  let salarioenhoratriple;
  let horasextratrabajadasp;
  let horasdobletrabajadas;
  let horastripletrabajadas;
  
  if(rege1.test(horastotales))
  {
    if(rege2.test(salariohora))
    {
        if (horastotales<=40)
        {
            pagototal=horastotales*salariohora;
        }
        else
        {
            pagonormal=40*salariohora;
            horasextra=horastotales-40;
            if(horasextra<=8)
            {
            pagohorasextra=salariohora*2;
            salariohorasextra2=pagohorasextra*horasextra;
            pagototal=pagonormal+salariohorasextra2;
            }
            else
            {
            pagohorasextra=salariohora*2;
            salariohorasextra2=pagohorasextra*8;
            horastriple=horasextra-8;
            salarioenhoratriple=salariohora*3;
            pagohorastriple=horastriple*salarioenhoratriple;
            pagototal=pagohorastriple+pagonormal+salariohorasextra2;
            }
        }
        if(horastotales<=40)
        {
            horasnormalestrabajadas=horastotales;
            horasdobletrabajadas=0;
            horastripletrabajadas=0;
        }
        else
        {
            horasnormalestrabajadas=40;
            horasextratrabajadasp=horastotales-40;
            if(horasextratrabajadasp<=8)
            {
            horasdobletrabajadas=horasextratrabajadasp;
            horastripletrabajadas=0;
            }
            else
            {
            horasnormalestrabajadas=40;
            horasdobletrabajadas=8;
            horastripletrabajadas=horasextratrabajadasp-8;
            }

        }
        document.getElementById("salariofinal").value=pagototal;
        document.getElementById("horasnormales").value=horasnormalestrabajadas;
        document.getElementById("horasdobles").value=horasdobletrabajadas;
        document.getElementById("horastriples").value=horastripletrabajadas;
    }
    else
    {
      alert("Hay un valor incorrecto")
    }
  }
  else{
    alert("Hay un valor incorrecto")
  }
 }

function resul10(){
    let anos = parseFloat(document.getElementById("anos").value);
    let meses = parseFloat(document.getElementById("mesess").value);
    let pagomes = parseFloat(document.getElementById("pagomes").value);

    meses *= 10;
    meses /= 12;
    meses *= 0.1;
    pagomes *=12;

    let total = parseFloat(anos) + parseFloat(meses);

    if(total < 1){
        pagomes *= 0.05;
        document.getElementById("recibir").value= pagomes;

    }
    if(total >= 1  && total < 2){
        pagomes *= 0.07;
        document.getElementById("recibir").value= pagomes;

    }
    if(total >= 2  && total < 5){
        pagomes *= 0.10;
        document.getElementById("recibir").value= pagomes;

    }
    if(total >= 5  && total < 10){
        pagomes *= 0.15;
        document.getElementById("recibir").value= pagomes;

    }
    if(total >= 10 ){
        pagomes *= 0.20;
        document.getElementById("recibir").value= pagomes;

    }
    


}