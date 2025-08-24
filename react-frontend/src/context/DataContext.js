import React, { createContext, useState, useEffect } from "react";
import { fetchHomeContent, fetchServicesContent } from "../components/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [homeData, setHomeData] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [home, services] = await Promise.all([
          fetchHomeContent(),
          fetchServicesContent(),
        ]);

        setHomeData(home);
        setServicesData(services);
      } catch (err) {
        console.log('err', err);
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ homeData, servicesData, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
