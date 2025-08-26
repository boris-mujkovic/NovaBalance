import React, { useState } from "react";

import SoftwareImage from "../../assets/NovaFormaSoftware.png";

import { AppData } from "../../interface/interfaces";
import Button from "../shared/Button";

function Hero({ data }: { data: AppData }) {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append("email", email);
    try {
      const response = await fetch("/home/subscribe", {
        method: "POST",
        body: form,
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      setStatus("error");
    }
  };

  const parts = data.heading.split(/(Forma)/);

  return (
    <div className="flex flex-col gap-4 lg:gap-10 lg:flex-row h-auto lg:h-[calc(100vh-100px)] px-6 md:px-12 lg:px-20 xl:px-40 items-center justify-between bg-gradient-to-b from-[#debdda] to-[#ffe6ff]">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-10 py-8 md:py-12">
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
            {parts.map((part, index) =>
              part === "Forma" ? (
                <span key={index} className="text-hover-dark-pink font-bold">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </h1>
          <div
            className="font-merriweather text-sm sm:text-base md:text-base"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <p className="font-merriweather text-sm sm:text-base md:text-base">
            <span className="font-bold">Prijavite se na Newsletter</span> i
            saznajte šta sve NovaBalance može da uradi za vas.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 font-merriweather">
            <form
              action="/home/subscirbe"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 font-merriweather"
            >
              <input
                type="email"
                id="hero_email"
                placeholder="Unesite svoj e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-auto min-w-[300px] flex-1 px-4 py-2 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-hover-dark-pink"
              />
              <Button name="Prijavite se" color="black" />
            </form>
          </div>
          {status === "success" && (
            <p className="text-green-600 text-sm">You're subscribed!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="lg:mt-0 w-full lg:w-1/2 max-w-[600px]">
        <img src={SoftwareImage} alt="Accounting Image" className="w-full" />
      </div>
    </div>
  );
}

export default Hero;
