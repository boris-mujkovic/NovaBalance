import Course from "../../../assets/Course.jpg";
import { AppData } from "../../../interface/interfaces";

function Training({ section }: { section: AppData }) {
  return (
    <>
      <div className="block lg:hidden flex justify-center z-20 mt-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-hover-dark-pink text-lg border-2 border-hover-dark-pink font-bold text-white shadow-md">
          4
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 relative z-10">
        <div className="w-full lg:w-1/2 p-4 md:p-6 bg-white shadow-lg lg:min-h-[300px] rounded-xl bg-gradient-to-b from-[#debdda] to-[#ffe6ff]">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {section.heading}
          </h2>
          <div
            className="proseEven max-w-none"
            dangerouslySetInnerHTML={{ __html: section?.content }}
          />
        </div>

        <div className="hidden lg:flex items-center justify-center z-20">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-hover-dark-pink text-lg border-2 border-hover-dark-pink font-bold text-white shadow-md">
            4
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Course}
            alt="Edukacija i obuka"
            className="w-full max-h-[300px] rounded-xl"
          />
        </div>
      </div>
    </>
  );
}

export default Training;
