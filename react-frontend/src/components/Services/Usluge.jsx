import React, { useState } from "react";
import docloop from "../../assets/docloop.png";

import Projektovanje1 from "../../assets/Projektovanje 01.jpg";
import Software from "../../assets/NovaFormaSoftware.png";
import Course from "../../assets/Course.jpg";
import Consult from "../../assets/Consult.jpg";
import ContactModal from "../Modal";
import ScrollToTopButton from "../ScrollToTopButton";

function Usluge() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-0 lg:gap-10 lg:flex-row h-auto lg:h-[calc(100vh-100px)] px-6 md:px-12 lg:px-40 items-center justify-between bg-gradient-to-b from-[#debdda] to-[#ffe6ff]">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-10 py-8 md:py-12">
          <div className="flex flex-col gap-3 md:gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
              <span className="font-bold">Nova</span>{" "}
              <span className="text-hover-dark-pink font-bold">Balance </span>-
              Vaš partner za optimizaciju poslovanja i digitalizaciju
            </h1>
            <p className="font-merriweather text-sm sm:text-base">
              Modernizujte svoje poslovanje uz sveobuhvatna rešenja NovaBalance
              softvera. Od efikasnog računovodstva do automatizacije poslovnih
              procesa – sve na jednom mestu.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 max-w-[600px] pb-6 lg:pb-0">
          <img
            src={Software}
            alt="Accounting Image"
            className="w-full rounded-xl"
          />
        </div>
      </div>

      <h2 className="text-2xl mt-10 text-center md:text-4xl leading-snug max-w-[1200px] mx-auto ">
        Naše usluge
      </h2>
      <section className="relative space-y-12 md:space-y-12 lg:space-y-16 px-6 md:px-12 lg:px-40">
        {/* Vertical line for connecting circles */}
        {/* <div className="absolute top-20 left-1/2 transform -translate-x-1/2 h-[calc(100%-5rem)] w-px bg-[#e4f0ef] z-0 hidden lg:block"></div> */}
        {/* <div className="absolute top-[270px] bottom-[170px] left-1/2 transform -translate-x-1/2 w-px bg-[#e4f0ef] z-0 hidden lg:block"></div> */}

        {/* Section 1 */}
        {/* Numbered Circle - Mobile (Top Center) */}
        {/* Mobile Numbered Circle */}
        <div className="block lg:hidden flex justify-center z-20 mt-8">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-lg border-2 border-hover-dark-pink font-bold text-hover-dark-pink shadow-md">
            1
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-12 relative z-10">
          {/* Text Card */}
          <div className="w-full lg:w-1/2 p-4 md:p-6 bg-white shadow-lg rounded-xl bg-gradient-to-b from-[#debdda] to-[#ffe6ff]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Nova<span className="text-hover-dark-pink font-bold">Forma</span>{" "}
              – Računovodstveni softver
            </h2>
            <p className="font-merriweather mt-4 text-sm sm:text-base">
              Savremeno rešenje za lako upravljanje finansijama, izveštajima i
              poreskim obavezama. Pojednostavite računovodstvo i osigurajte
              preciznost svojih finansijskih podataka.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base mt-4 font-merriweather">
              <li>Optimizacija računovodstvenih procesa</li>
              <li>Brzo i jednostavno upravljanje finansijama</li>
              <li>Poreska usklađenost bez stresa</li>
            </ul>
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

        {/* Section 2 */}

        <div className="block lg:hidden flex justify-center z-20 mt-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-hover-dark-pink text-lg border-2 border-hover-dark-pink font-bold text-white shadow-md">
            2
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 relative z-10">
          <div className="w-full lg:w-1/2 p-6 bg-gradient-to-b from-[#debdda] to-[#ffe6ff] shadow-lg rounded-xl">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Docloop DMS i Arhivska knjiga
            </h2>
            <p className="font-merriweather mt-4">
              Kao dugogodišnji partner Docloop-a iz Beograda, nudimo podršku pri
              implementaciji MojDMS sistema – digitalnog rešenja za upravljanje
              dokumentacijom.
            </p>
            <ul className="list-disc pl-5 mt-4 font-merriweather">
              <li>Digitalna obrada, evidencija i arhiviranje dokumentacije</li>
              <li>Automatizacija radnih procesa</li>
              <li>Pomoć pri dobijanju saglasnosti od Istorijskog Arhiva</li>
            </ul>
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

            <div className="flex flex-wrap justify-center items-center gap-6 w-full ">
              <a
                href="https://www.mojdms.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 shadow-xl rounded-xl border border-solid border-gray-400"
              >
                <img
                  src="https://www.mojdms.rs/assets/logo-moj-dms.svg"
                  alt="Moj DMS"
                  className="h-16 w-auto object-contain transition-transform hover:scale-105"
                />
              </a>
              <a
                href="https://novabalance.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 shadow-xl shadow-xl rounded-xl border border-solid border-gray-400 rounded-xl"
              >
                <img
                  src={docloop}
                  alt="Docloop"
                  className="h-16 w-auto object-contain transition-transform hover:scale-105"
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
                  className="h-16 w-auto object-contain transition-transform hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="block lg:hidden flex justify-center z-20 mt-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-lg border-2 border-hover-dark-pink font-bold text-hover-dark-pink shadow-md">
            3
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
          <div className="w-full lg:w-1/2 p-6 bg-gradient-to-b from-[#debdda] to-[#ffe6ff] shadow-lg rounded-xl">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Konsultantske usluge za optimizaciju poslovanja
            </h2>
            <p className="font-merriweather mt-4">
              Pomozite svom timu da postane efikasniji uz naše konsultantske
              usluge. Optimizujte poslovne procese, smanjite troškove i
              poboljšajte operativnu efikasnost.
            </p>
            <ul className="list-disc pl-5 mt-4 font-merriweather">
              <li>Analiza i optimizacija poslovnih procesa</li>
              <li> Strateško planiranje i dokumentacija</li>
              <li>Jasna kontrola resursa i troškova</li>
            </ul>
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
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="block lg:hidden flex justify-center z-20 mt-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-hover-dark-pink text-lg border-2 border-hover-dark-pink font-bold text-white shadow-md">
            4
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 relative z-10">
          <div className="w-full lg:w-1/2 p-6 bg-white shadow-lg rounded-xl bg-gradient-to-b from-[#debdda] to-[#ffe6ff]">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Stručne obuke iz oblasti računovodstva
            </h2>
            <p className="font-merriweather mt-4">
              Osnažite svoj tim praktičnim znanjima iz oblasti računovodstva,
              prilagođenim vašim potrebama.
            </p>
            <ul className="list-disc pl-5 text-base mt-4 font-merriweather">
              <li> Osnove računovodstva i knjigovodstva</li>
              <li> Upravljanje zalihama i materijalima</li>
              <li> Fiskalizacija i poreske obaveze</li>
              <li> Obračun zarada i doprinosa</li>
              <li> Finansijsko izveštavanje i analiza</li>
            </ul>
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
              className="w-full  max-h-[300px] rounded-xl"
            />
          </div>
        </div>
      </section>
      <div className="p-6 bg-white shadow-lg flex justify-center rounded-xl justify-center pt-10 lg:py-24 bg-gradient-to-b from-white to-[#debdda]">
        <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-1/2 p-6 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200 rounded-xl ">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Zašto odabrati naše obuke?
          </h2>
          <ul className="pl-5 text-base space-y-2">
            <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-hover-dark-pink">
              Stručnost i relevantnost – znanje zasnovano na realnim primerima i
              aktuelnim propisima
            </li>
            <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-hover-dark-pink">
              Fleksibilna realizacija – online, uživo u vašim prostorijama ili
              na našoj lokaciji
            </li>
            <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-hover-dark-pink">
              Prilagođen sadržaj – od osnovnih do naprednih nivoa, skrojenih
              prema vašem sektoru
            </li>
            <li className="relative pl-6 before:content-['✔'] before:absolute before:left-0 before:text-hover-dark-pink">
              Praktična primena – odmah primenljive veštine koje poboljšavaju
              poslovne procese
            </li>
          </ul>

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
      <ScrollToTopButton />
    </>
  );
}

export default Usluge;
