import Hero from "../../assets/superheroN.webp";
import { AppData } from "../../interface/interfaces";

function About({data}: { data: AppData }) {
  const parts = data.heading.split(/(Balance)/);
  return (
    <div
      id="about"
      className="scroll-mt-52 flex flex-col lg:flex-row-reverse gap-10 px-6 md:px-12 lg:px-20 xl:px-40 py-24 items-center bg-white"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
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
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={Hero}
          alt="Accounting Image"
          className="w-full max-w-[500px] mx-auto rounded-xl"
        />
      </div>
    </div>
  );
}

export default About;
