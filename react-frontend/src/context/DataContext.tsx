import React, { createContext, ReactNode, useState, useEffect } from "react";
import { fetchHomeContent, fetchServicesContent } from "../components/api";
import { AppData } from "../interface/interfaces";

export type DataContextType = {
  homeData: AppData[] | null;
  servicesData: AppData[] | null;
  loading: boolean;
  error: string | null;
};

export const DataContext = createContext<DataContextType>({
  homeData: null,
  servicesData: null,
  loading: true,
  error: null,
});

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [homeData, setHomeData] = useState<AppData[] | null>(null);
  const [servicesData, setServicesData] = useState<AppData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
      } catch (err: any) {
        console.error("Error loading data:", err);
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
