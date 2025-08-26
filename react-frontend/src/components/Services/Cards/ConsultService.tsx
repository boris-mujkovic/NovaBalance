import Consult from "../../../assets/Consult.jpg";
import { AppData } from "../../../interface/interfaces";

function ConsultService({ section }: { section: AppData }) {
  return (
    <>
      <div className="block lg:hidden flex justify-center z-20 mt-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-lg border-2 border-hover-dark-pink font-bold text-hover-dark-pink shadow-md">
          3
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
        <div className="w-full lg:w-1/2 p-4 md:p-6 bg-white shadow-lg lg:min-h-[300px] rounded-xl bg-gradient-to-b from-[#debdda] to-[#ffe6ff]">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {section.heading}
          </h2>
          <div
            className="proseOdd max-w-none"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>

        <div className="hidden lg:flex items-center justify-center z-20">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-lg border-2 border-hover-dark-pink font-bold text-hover-dark-pink shadow-md">
            3
          </div>
        </div>

        <div className="w-full lg:w-1/2 border shadow-lg rounded-xl flex items-center justify-center">
          <div className="w-full max-h-[300px] rounded-lg overflow-hidden">
            <img
              src={Consult}
              alt="Računovodstveni softver"
              className="h-[300px] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsultService;
