export const formatCurrency = (value) => {
  if (isNaN(value)) {
    return 'R$ 0,00';  // Retorna R$ 0,00 se o valor não for um número
  }

  const formattedValue = parseFloat(value).toFixed(2);  // Garante que o valor tenha 2 casas decimais
  return `R$ ${formattedValue.replace(',', ',')}`;  
};
