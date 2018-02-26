const form = document.querySelector("form");
const arrayForm = Array.from(form);
console.log(arrayForm); //object

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

//funcion para obtener los valores del formulario
  //
  // const valueInput = (array) => {
  //   const newArr = [];
  //   arrayForm.forEach(function(e) {
  //     console.log(e.value);
  //     newArr.push(e.value);
  //   });
  //   console.log(newArr);
  //   return newArr;
  // }



//funcion algoritmo de lunh
const algoritmoDeLuhn = (array) => {

  console.log();
}


//funcion fecha
const date = (array) => {
  console.log("indice 1")
}



//funcion codigo de serguridad
const securityCode = (numbers) => {
  // console.log("indice 2") // me sirvio para revisar si mi funcion la llamaba correctamente
  if (numbers < 1000 && numbers > 99) {
        console.log("true");
        // return true;
        return valid = document.getElementById("cvv").style.borderColor = "green";
    } else {
        console.log("false");
        // return false;
        return valid = document.getElementById("cvv").style.borderColor = "red";
    };
};


//funcion nombre
const name = (array) => {
  // console.log("indice 3")
  if (array == '') {
         return valid = document.getElementById("name").style.borderColor = "red";
     }
    if (array.length >= 30) {
        return valid = document.getElementById("name").style.borderColor = "green";
     }

     // else {
     //    //  return true;
     //     return valid = document.getElementById("name").style.borderColor = "green";
     // }
};



const validateCardDetails = (element) => {
  //escribe tu código aqui
  let validCard = arrayForm[0].value;
  let date1 = arrayForm[1].value
  let code = arrayForm[2].value;
  let names = arrayForm[3].value;
  // console.log(code);
  // console.log(date1);
  // console.log(code);
  // console.log(name);

  algoritmoDeLuhn(validCard);
  date(date1);
  securityCode(code);
  name(names);
}
