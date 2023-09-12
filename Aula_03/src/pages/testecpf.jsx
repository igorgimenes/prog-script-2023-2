import React, { useState } from 'react';

function CPFValidator() {
  const [cpf, setCPF] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateCPF = (inputCPF) => {
    // Remove any non-digit characters from the input CPF
    const cleanCPF = inputCPF.replace(/\D/g, '');

    if (cleanCPF.length !== 11) {
      setIsValid(false);
      return;
    }

    const firstNineDigits = cleanCPF.slice(0, 9).split('').map(Number);
    const verifierDigits = cleanCPF.slice(9, 11).split('').map(Number);

    // Calculate the first verifier digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += firstNineDigits[i] * (10 - i);
    }
    let firstVerifierDigit = 11 - (sum % 11);
    if (firstVerifierDigit >= 10) {
      firstVerifierDigit = 0;
    }

    // Calculate the second verifier digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += firstNineDigits[i] * (11 - i);
    }
    sum += firstVerifierDigit * 2;
    let secondVerifierDigit = 11 - (sum % 11);
    if (secondVerifierDigit >= 10) {
      secondVerifierDigit = 0;
    }

    setIsValid(
      firstVerifierDigit === verifierDigits[0] && secondVerifierDigit === verifierDigits[1]
    );
  };

  const handleCPFChange = (event) => {
    const inputCPF = event.target.value;
    setCPF(inputCPF);
    validateCPF(inputCPF);
  };

  return (
    <div>
      <label>CPF:</label>
      <input type="text" value={cpf} onChange={handleCPFChange} />
      {isValid ? <p>CPF válido</p> : <p>CPF inválido</p>}
    </div>
  );
}

export default CPFValidator;
