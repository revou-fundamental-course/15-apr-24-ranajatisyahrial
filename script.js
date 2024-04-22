function convert() {
  var temperature = parseInt(document.getElementById('temperature').value);
  var fromUnit = document.getElementById('fromUnit').value;
  var toUnit = document.getElementById('toUnit').value;
  var results = document.getElementById('results');
  var formula = document.getElementById('formula');
  var convertedTemp, formulaText;

  if (isNaN(temperature)) {
    alert("Kolom input hanya boleh di isi dengan angka.");
    return;
  }

  if (fromUnit === toUnit) {
    alert("Situ bercyanda ?");
    return;
  }

  if (fromUnit === 'celcius') {
    if (toUnit === 'kelvin') {
      convertedTemp = temperature + 273.15;
      formulaText = temperature + ' °C + 273,15 = ' + convertedTemp + ' K';
    } else if (toUnit === 'fahrenheit') {
      convertedTemp = temperature * 9/5 + 32;
      formulaText = '(' + temperature + ' °C × 9/5) + 32 = ' + convertedTemp + ' °F';
    }
  } else if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celcius') {
      convertedTemp = ((temperature - 32) * 5/9).toFixed(2);
      formulaText = '(' + temperature + ' °F − 32) × 5/9 = ' + convertedTemp + ' °C';
    } else if (toUnit === 'kelvin') {
      convertedTemp = (((temperature - 32) * 5/9) + 273.15).toFixed(3);
      formulaText = '(' + temperature + ' °F − 32) × 5/9 + 273,15 = ' + convertedTemp + ' K';
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'celcius') {
      convertedTemp = temperature - 273.15;
      formulaText = temperature + ' K − 273,15 = ' + convertedTemp + ' °C';
    } else if (toUnit === 'fahrenheit') {
      convertedTemp = (temperature - 273.15) * 9/5 + 32;
      formulaText = '(' + temperature + ' K − 273,15) × 9/5 + 32 = ' + convertedTemp + ' °F';
    }
  }

  results.innerHTML = 'Hasil konversi: ' + convertedTemp;
  formula.innerHTML = 'Rumus: ' + formulaText;
}
