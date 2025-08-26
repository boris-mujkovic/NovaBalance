import React from "react";
import Software from "../../assets/NovaFormaSoftware.png";

const ServiceHero = ({ section }: any) => {
  const parts = section.heading?.split(/(Balance)/) || [];

  return (
    <div className="flex flex-col lg:h-[calc(100vh-100px)] gap-6 lg:flex-row items-center justify-between px-6 md:px-12 lg:px-12 xl:px-40 py-10 lg:py-20 bg-gradient-to-b from-[#debdda] to-[#ffe6ff]">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
          {parts.map((part: string, index: number) =>
            part === "Balance" ? (
              <span key={index} className="text-hover-dark-pink font-bold">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </h1>
        <div
          className="font-merriweather text-base sm:text-md text-gray-800"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 max-w-xl mx-auto lg:mx-0">
        <img src={Software} alt="Accounting Software" className="w-full" />
      </div>
    </div>
  );
};

export default ServiceHero;
