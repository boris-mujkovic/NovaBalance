import React, { useState } from "react";

import ContactModal from "../Modal";
import ScrollToTopButton from "../ScrollToTopButton";
import { AppData } from "../../interface/interfaces";

function ServiceOffer({ section }: { section: AppData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="p-6 bg-white shadow-lg  flex justify-center pt-10 lg:py-24 bg-gradient-to-b from-white to-[#debdda] lg:rounded-xl">
        <div className="flex flex-col max-w-[680px] gap-4 justify-center items-center w-full lg:w-1/2 p-6 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200 rounded-xl ">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {section.heading}
          </h2>
          <div
            className="[&>ul]:pl-5 [&>ul]:space-y-2 [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:before:content-['✔'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:text-hover-dark-pink"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2 rounded-xl transition bg-hover-pink hover:bg-hover-dark-pink text-white tracking-[1px]"
          >
            Zatražite ponudu
          </button>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {!isModalOpen && <ScrollToTopButton />}
    </>
  );
}

export default ServiceOffer;
