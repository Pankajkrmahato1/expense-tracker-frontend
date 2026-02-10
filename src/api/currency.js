import axios from "axios";

// Free, no-auth endpoint
const BASE_URL = "https://open.er-api.com/v6/latest";

export const getRates = async (baseCurrency = "USD") => {
  const response = await axios.get(`${BASE_URL}/${baseCurrency}`);
  return response.data.rates;
};
