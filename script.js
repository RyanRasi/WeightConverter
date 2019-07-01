  var weightValue = null;

  function weightFunction(sel) {
  var w = document.getElementById("weightValue");
  weightValue = w.options[w.selectedIndex].value;
  console.log(weightValue);
}

  document.getElementById("allInput").addEventListener("input", function(e){
    if (weightValue === "pounds"){
      console.log("pounds selected")

      let lbs = e.target.value;
      document.getElementById("gramsOutput").innerHTML = (lbs/0.00220462).toFixed(2);
      document.getElementById("kgOutput").innerHTML = (lbs/2.20462).toFixed(2);
      document.getElementById("ozOutput").innerHTML = (lbs*16).toFixed(2);
      document.getElementById("pOutput").innerHTML = lbs;
    }

    if (weightValue === "grams"){
      console.log("grams selected")

      let grams = e.target.value;
      document.getElementById("gramsOutput").innerHTML = grams;
      document.getElementById("kgOutput").innerHTML = (grams/1000).toFixed(2);
      document.getElementById("ozOutput").innerHTML = (grams/28.3495).toFixed(2);
      document.getElementById("pOutput").innerHTML = (grams/453.592).toFixed(2);
    }

    if (weightValue === "kilograms"){
      console.log("kilograms selected")

      let kilograms = e.target.value;
      document.getElementById("gramsOutput").innerHTML = (kilograms*1000).toFixed(2);
      document.getElementById("kgOutput").innerHTML = kilograms;
      document.getElementById("ozOutput").innerHTML = (kilograms*35.274).toFixed(2);
      document.getElementById("pOutput").innerHTML = (kilograms/2.20462).toFixed(2);
    }

    if (weightValue === "ounces"){
      console.log("ounces selected")

      let ounces = e.target.value;
      document.getElementById("gramsOutput").innerHTML = (ounces*28.3495).toFixed(2);
      document.getElementById("kgOutput").innerHTML = (ounces/35.274).toFixed(2);
      document.getElementById("ozOutput").innerHTML = ounces;
      document.getElementById("pOutput").innerHTML = (ounces/0.0625).toFixed(2);
    }
  });
