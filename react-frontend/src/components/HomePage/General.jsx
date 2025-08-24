import React from "react";
import Carousel1 from "../../assets/Carousel1.jpg";
import Carousel2 from "../../assets/Carousel2.jpg";
import Carousel4 from "../../assets/Carousel4.jpg";

const images = [Carousel1, Carousel2, Carousel4];

function General({ data }) {
  const parts = data.heading.split(/(Balance)/);

  return (
    <div
      id="general"
      className="scroll-mt-52 flex flex-col gap-6 px-6 md:px-12 lg:px-20 xl:px-40 pb-16 pt-12 lg:pt-4 bg-gradient-to-t from-[#debdda] to-[#ffe6ff]"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">
        {parts.map((part, index) =>
          part === "Balance" ? (
            <span key={index} className="text-hover-dark-pink font-bold">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </h2>
      <div
        className="font-merriweather text-sm sm:text-base md:text-base"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      />
      {/* Desktop layout */}
      <div className="hidden lg:flex flex-row items-center justify-center gap-6 mt-12">
        <img
          src={images[0]}
          alt="software"
          className="w-[220px] h-auto rounded-lg shadow-md"
        />
        <div className="w-14 h-0.5 bg-gray-400"></div>
        <img
          src={images[1]}
          alt="software"
          className="w-72 h-auto rounded-xl shadow-lg border-4 border-gray-300"
        />
        <div className="w-14 h-0.5 bg-gray-400"></div>
        <img
          src={images[2]}
          alt="software"
          className="w-[220px] h-auto rounded-lg shadow-md"
        />
      </div>
      {/* Mobile Carousel */}
      <div className="lg:hidden flex flex-col items-center mt-12">
        <img
          src={Carousel1}
          alt="software-mobile"
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}

export default General;
