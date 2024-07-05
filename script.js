function generateStrings() {
    const numStrings = document.getElementById('num-strings').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // clear previous results
  
    for (let i = 0; i < numStrings; i++) {
      const numDigits = Math.floor(Math.random() * 5) + 1; // 1-5 digits
      let digits = '';
      for (let j = 0; j < numDigits; j++) {
        digits += Math.floor(Math.random() * 9) + 1; // 1-9
      }
      const decimalPart = Math.floor(Math.random() * 100); // 2 digits
      const result = `${digits}.${decimalPart.toString().padStart(2, '0')} zł`;
      const paragraph = document.createElement('p');
      paragraph.innerText = result;
      resultDiv.appendChild(paragraph);
    }
  }