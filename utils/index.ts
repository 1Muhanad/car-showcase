const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "a87adaf867mshb2a7eb180d9a745p1311aejsnaf7d480eb26f",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "a87adaf867mshb2a7eb180d9a745p1311aejsnaf7d480eb26f",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers },
  );
  const result = await response.json();
  return result;
}
export const calculateCarRent = (year: number) => {
  const rentalRatePerDay = year * 2;

  return rentalRatePerDay.toFixed(0);
};
