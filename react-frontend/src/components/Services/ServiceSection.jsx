import React, { useContext } from "react";
import Software from "./Cards/Software";
import Systems from "./Cards/Systems";
import ConsultService from "./Cards/ConsultService";
import Training from "./Cards/Training";
import ServiceHero from "./ServiceHero";
import ServiceOffer from "./ServiceOffer";
import { DataContext } from "../../context/DataContext";

const ServiceSection = () => {
  const { servicesData, loading, error } = useContext(DataContext);
  console.log('error', error);

  if (loading) {
    return <div className="text-center py-10">Učitava se...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10">{error}</div>
    );
  }

  if (!servicesData) {
    return <div className="text-center py-10">No services data available</div>;
  }

  // Helper to get a section by title
  const getSection = (title) =>
    servicesData.find((item) => item.section_title === title);
  return (
    <>
      <ServiceHero section={getSection("Banner")} />
      <h2 className="text-2xl mt-10 text-center md:text-4xl leading-snug max-w-[1200px] mx-auto ">
        Naše usluge
      </h2>
      <section className="relative space-y-12 md:space-y-12 lg:space-y-16 px-6 md:px-12 lg:px-10 xl:px-40 ">
        <Software section={getSection("Software")} />
        <Systems section={getSection("DoCloop DMS")} />
        <ConsultService section={getSection("Konsultacija")} />
        <Training section={getSection("Strucne obuke")} />
      </section>
      <ServiceOffer section={getSection("Zasto")} />
    </>
  );
};

export default ServiceSection;
