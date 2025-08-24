import React, { useContext } from "react";
import ScrollToTopButton from "../ScrollToTopButton";
import { DataContext } from "../../context/DataContext";
import { sectionComponents } from "./index";

function Home() {
  const { homeData, loading, error } = useContext(DataContext);

  if (loading) {
    return <div className="text-center py-10">Učitava se...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10">{error}</div>
    );
  }

  if (!homeData) {
    return <div className="text-center py-10">No services data available</div>;
  }

  return (
    <>
      {homeData?.map((section) => {
        const Component = sectionComponents[section.section_id];
        if (!Component) return null;
        return <Component data={section} />;
      })}
      <ScrollToTopButton />
    </>
  );
}

export default Home;
