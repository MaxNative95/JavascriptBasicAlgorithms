function convertCtoF(celsius: number): number {
  let fahrenheit: number | null = null;
  fahrenheit = celsius * 1.8 + 32;
  console.log(fahrenheit)
  return fahrenheit;
}

convertCtoF(30);
