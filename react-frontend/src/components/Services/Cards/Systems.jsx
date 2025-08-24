import React from "react";
import docloop from "../../../assets/docloop.png";

function Systems({ section }) {
  return (
    <>
      <div className="block lg:hidden flex justify-center z-20 mt-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-hover-dark-pink text-lg border-2 border-hover-dark-pink font-bold text-white shadow-md">
          2
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 relative z-10">
        <div className="w-full lg:w-1/2 p-4 md:p-6 bg-white shadow-lg lg:min-h-[300px] rounded-xl bg-gradient-to-b from-[#debdda] to-[#ffe6ff]">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {section.heading}
          </h2>
          <div
            className="proseEven max-w-none"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>

        <div className="hidden lg:flex items-center justify-center z-20">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-hover-dark-pink text-lg border-2 border-hover-dark-pink font-bold text-white shadow-md">
            2
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-white border border-gray-200 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Povezani sistemi
          </h1>

          <div className="flex flex-wrap justify-center lg:h-[194px] items-center gap-6 w-full ">
            <a
              href="https://www.mojdms.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 shadow-xl rounded-xl border border-solid border-gray-400"
            >
              <img
                src="https://www.mojdms.rs/assets/logo-moj-dms.svg"
                alt="Moj DMS"
                className="h-14 w-auto object-contain transition-transform hover:scale-105"
              />
            </a>
            <a
              href="https://docloop.rs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 shadow-xl shadow-xl rounded-xl border border-solid border-gray-400 rounded-xl"
            >
              <img
                src={docloop}
                alt="Docloop"
                className="h-14 w-auto object-contain transition-transform hover:scale-105"
              />
            </a>
            <a
              href="https://www.moj-eracun.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-gradient-to-b from-[#debdda] to-[#ffe6ff] rounded-xl"
            >
              <img
                src="https://www.moj-eracun.rs/Content/erdesign/images/e_racun_logo_black.png"
                alt="eRačun"
                className="h-14 w-auto object-contain transition-transform hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Systems;
