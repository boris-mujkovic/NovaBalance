import { useContext } from "react";
import ScrollToTopButton from "../ScrollToTopButton";
import { DataContext } from "../../context/DataContext";
import { sectionComponents } from "./index";
import Loading from "../shared/Loading";
import { AppData } from "../../interface/interfaces";

function Home() {
  const { homeData, loading, error } = useContext(DataContext);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-center py-10">{error}</div>;
  }

  if (!homeData) {
    return <div className="text-center py-10">No services data available</div>;
  }

  return (
    <>
      {homeData?.map((section: AppData) => {
        const Component = sectionComponents[section.section_id as any];
        if (!Component) return null;
        return <Component data={section} />;
      })}
      <ScrollToTopButton />
    </>
  );
}

export default Home;
