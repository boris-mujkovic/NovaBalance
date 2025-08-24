export const fetchHomeContent = async () => {
    try {
      const response = await fetch("http://novabalance.rs/home/contentEndpoint?slug=/home");
      if (!response.ok) {
        throw new Error("Failed to fetch home content");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error fetching home content:", err);
      throw err;
    }
  };

  export const fetchServicesContent = async () => {
    try {
      const response = await fetch("http://novabalance.rs/home/contentEndpoint?slug=/usluge");
      if (!response.ok) {
        throw new Error("Failed to fetch home content");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error fetching home content:", err);
      throw err;
    }
  };