import { AppData } from "../interface/interfaces";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchHomeContent = async (): Promise<AppData[]> => {
  try {
    const response = await fetch(`${API_URL}home`);
    if (!response.ok) {
      throw new Error("Failed to fetch home content");
    }
    const data: AppData[] = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching home content:", err);
    throw err;
  }
};

export const fetchServicesContent = async (): Promise<AppData[]> => {
  try {
    const response = await fetch(`${API_URL}usluge`);
    if (!response.ok) {
      throw new Error("Failed to fetch services content");
    }
    const data: AppData[] = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching services content:", err);
    throw err;
  }
};
