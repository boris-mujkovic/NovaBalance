import Projektovanje1 from "../../../assets/Projektovanje01.png";
import { AppData } from "../../../interface/interfaces";

function Software({ section }: { section: AppData }) {
  const parts = section.heading?.split(/(Forma)/) || [];

  return (
    <>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 h-[calc(100%-5rem)] w-px bg-[#e4f0ef] z-0 hidden lg:block"></div>

      <div className="block lg:hidden flex justify-center z-20 mt-8">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-lg border-2 border-hover-dark-pink font-bold text-hover-dark-pink shadow-md">
          1
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-12 relative z-10 ">
        {/* Text Card */}
        <div className="w-full lg:w-1/2 p-4 md:p-6 bg-white shadow-lg lg:min-h-[300px] rounded-xl bg-gradient-to-b from-[#debdda] to-[#ffe6ff]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            {parts.map((part, index) =>
              part === "Forma" ? (
                <span key={index} className="text-hover-dark-pink font-bold">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </h2>
          <div
            className="proseOdd max-w-none"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>

        {/* Numbered Circle - Desktop (Middle) */}
        <div className="hidden lg:flex items-center justify-center z-20">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-lg border-2 border-hover-dark-pink font-bold text-hover-dark-pink shadow-md">
            1
          </div>
        </div>

        {/* Image Card */}
        <div className="w-full lg:w-1/2 md:p-4 border shadow-lg rounded-xl flex items-center justify-center bg-white lg:h-[300px]">
          <div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src={Projektovanje1}
              alt="Računovodstveni softver"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Software;
