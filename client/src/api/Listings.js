import axios from "axios";

// URL base del API
// Función para obtener todas las casas
export const getAllHouses = async () => {
  try {
    const response = await axios.get(`/houses`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Función para obtener una casa por su ID
export const getHouseById = async (id) => {
  try {
    const response = await axios.get(`/houses/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Función para buscar casas con un objeto JSON de parámetro
export const searchHouses = async (searchParams) => {
  try {
    const response = await axios.post(`/houses/search`, searchParams);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const searchForLocation = async (location) => {
  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: location,
          format: "json",
        },
      }
    );

    const data = response.data;
    if (data.length > 0) {
      console.log(data);
      const firstResult = data[0];
      return [firstResult.lat, firstResult.lon];
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};

export const getAddress = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
